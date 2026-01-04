<template>
  <main style="padding: 24px;">
    <h1>Nuxt Recipes</h1>
    <p>Mini front Nuxt connecté à l’API Express + au CMS Sanity.</p>

    <ul>
      <li><NuxtLink to="/recipes">Voir les recettes (API)</NuxtLink></li>
      <li><NuxtLink to="/books">Voir les livres (Sanity)</NuxtLink></li>
    </ul>
  </main>
</template>
