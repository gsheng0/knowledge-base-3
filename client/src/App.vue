<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Knowledge Base 3</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/write">Write</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
}
</style>
