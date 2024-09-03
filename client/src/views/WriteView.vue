<template>
  <div id="main">
    <Write/>
  </div>
</template>

<script>
import Write from '@/components/Write.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WriteView',
  components: {
    Write
  }
})
</script>
