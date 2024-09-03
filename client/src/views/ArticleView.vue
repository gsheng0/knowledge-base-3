<template>
  <div v-if="article">
    <!-- The current route is accessible as $route in the template -->
    <h1>{{ article.title }}</h1>
    <h2>{{ article.content }}</h2>
    <h3>{{ article.tags.join(', ') }}</h3>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
export default {
  name: 'ArticleView',
  setup() {
    const article = ref('');
    const route = useRoute();
    onMounted(async() => {
      try{
        article.value = (await axios.get(`http://localhost:3000/articles/${route.params.id}`)).data[0];
      } catch(error){
        console.log(error);
      }
    })
    return {
      article
    }
  }
  
}

</script>