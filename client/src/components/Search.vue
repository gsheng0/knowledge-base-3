<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title>
        <v-text-field
          v-model="searchTerm"
          label="Enter a search term"
          outlined
          append-icon="mdi-magnify"
          @click:append="search"
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-container v-if="results.length">
          <v-row>
            <v-col
              v-for="(result, index) in results"
              :key="index"
              cols="12"
              md="6"
            >
              <SearchResultCard :searchResult="result"/>
            </v-col>
          </v-row>
        </v-container>
        <div v-else>
          <p>No results found</p>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import SearchResultCard from './SearchResultCard.vue';
export default {
  name: 'Search',
  components: {
    SearchResultCard
  },
  setup() {
    const searchTerm = ref('')
    const results = ref([])

    const search = async() => {
      console.log(`Search Term: ${searchTerm.value}`)
      // Mock search results
      try{
        results.value = (await axios.get('http://localhost:3000/articles')).data;
      } catch(error){
        console.log(error);
      }
      
    }

    //populate with all articles
    onMounted(async() => {
      try{
        results.value = ((await axios.get('http://localhost:3000/articles')).data).reverse();
      } catch(error){
        console.log(error);
      }
    })

    return {
      search,
      searchTerm,
      results
    }
  }
}


</script>

<style scoped>
.v-card {
  max-width: 800px;
  margin: auto;
}
</style>
