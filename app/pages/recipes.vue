<script setup lang="ts">
type Recipe = {
  recipe_id: number
  title: string
  cuisine_name: string | null
}

const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl

const { data, pending, error } = await useFetch(`${apiUrl}/api/recipes`)

const recipes = computed<Recipe[]>(() => {
  const res = data.value as any
  return res?.data ?? []
})
</script>

<template>
  <main style="padding: 24px;">
    <h1>Recipes</h1>

    <p v-if="pending">Chargement...</p>
    <p v-else-if="error">Erreur lors du chargement</p>

    <ul v-else>
      <li v-for="r in recipes" :key="r.recipe_id">
        <strong>{{ r.title }}</strong>
        <span v-if="r.cuisine_name"> — {{ r.cuisine_name }}</span>
      </li>
    </ul>
  </main>
</template>
