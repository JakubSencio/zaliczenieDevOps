<template>
  <v-app>
    <v-app-bar app color="blue darken-3" dark>
      <v-toolbar-title>Moja Aplikacja Vuetify</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-card>
          <v-card-title>Witamy w aplikacji Vuetify!</v-card-title>
          <v-card-text>
            To jest przykładowy widok.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="onClick">Kliknij mnie</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert('Przycisk działa!');
    },
  },
};
</script>

<style>
</style>
