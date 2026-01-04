export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:3000",
      sanityProjectId: "uh17jgul",
      sanityDataset: "production",
      sanityApiVersion: "2023-10-01",
    },
  },
});
