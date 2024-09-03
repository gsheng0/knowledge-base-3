<template>
  <v-container class="write">
    <v-card>
      <v-card-title>
        <h2>Write</h2>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="title"
          label="Title"
          outlined
        ></v-text-field>
        <v-textarea
          v-model="content"
          label="Enter content here..."
          outlined
          rows="15"
          height="300"
        ></v-textarea>
        <v-text-field
          v-model="tags"
          label="Tags"
          outlined
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="publish">Publish</v-btn>
      </v-card-actions>
      <div v-if="result">
        <h5 class="result">{{ result }}</h5>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import axios from "axios";

export default {
  name: 'Write',
  setup () {
    const title = ref('')
    const content = ref('')
    const tags = ref('')
    const result = ref('');

    const publish = async() => {
      console.log(`Title: ${title.value}`)
      console.log(`Content: ${content.value}`)
      console.log(`Tags: ${tags.value}`)
      let cleanedTags = tags.value.trim().replace(/\s+/g, '');
      result.value = (await axios.post('http://localhost:3000/articles', {
        title: title.value,
        content: content.value,
        tags: cleanedTags.split(",")
      })).data;

    }

    return {
      title,
      content,
      tags,
      result,
      publish
    }
  }
}
</script>

<style scoped>
.write {
  max-width: 600px;
  margin: auto;
}

.result{
  color: red;
  margin: 10px;
}
</style>
