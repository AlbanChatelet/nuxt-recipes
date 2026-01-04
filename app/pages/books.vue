<script setup lang="ts">
type Book = {
  _id: string
  title: string
  description?: string
  coverUrl?: string
}

const config = useRuntimeConfig()

const projectId = config.public.sanityProjectId
const dataset = config.public.sanityDataset
const apiVersion = config.public.sanityApiVersion

const query = encodeURIComponent(`*[_type == "book"]{
  _id,
  title,
  description,
  "coverUrl": cover.asset->url
}`)

const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`

const { data, pending, error } = await useFetch(url)

const books = computed<Book[]>(() => {
  const res = data.value as any
  return res?.result ?? []
})
</script>

<template>
  <main style="padding: 24px;">
    <h1>Books (Sanity)</h1>

    <p v-if="pending">Chargement...</p>
    <p v-else-if="error">Erreur lors du chargement</p>

    <ul v-else>
      <li v-for="b in books" :key="b._id" style="margin-bottom: 24px;">
        <h3>{{ b.title }}</h3>
        <p>{{ b.description }}</p>

        <img
          v-if="b.coverUrl"
          :src="b.coverUrl"
          :alt="b.title"
          style="max-width: 200px"
        />
      </li>
    </ul>
  </main>
</template>
