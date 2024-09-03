<template>
  <v-card :to="`/article/${searchResult.id}`" class="mb-4" @click="handleClick">
    <div class="details">
      <h2 class="title">{{ searchResult.title }}</h2>
      <span class="tags">{{ searchResult.tags.join(', ') }}</span>
    </div>
    <v-card-text>
      {{ searchResult.content.substring(0, 50) }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps(['searchResult']);
const handleClick = () => {
  console.log("USER JUST CLICKED ON SEARCH RESULT: " + props.searchResult.title);
};
</script>

<style scoped>
.details {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 10px 0;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin: 15px;
}

.tags {
  font-size: 0.9em;
  color: gray;
  margin: 15px;
}
</style>
