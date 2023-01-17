<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <NHome />
    </v-main>
  </v-app>
</template>

<script>
import NHome from './components/NHome'
export default {
  name: 'App',

  components: {
    NHome,
  },

  data: () => ({
    //
  }),
};
</script>
