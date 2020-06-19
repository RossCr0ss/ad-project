<template>
  <v-app>
    <v-navigation-drawer temporary app>
      <!-- -->
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Ad appcication</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Link One</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- <v-footer app /> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>
