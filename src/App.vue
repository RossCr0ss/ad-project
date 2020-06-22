<template>
  <v-app>
    <v-navigation-drawer 
      temporary 
      app 
      v-model="drawer"
    >
      <v-list>
        <v-list-tile 
          :to="link.url"
          v-for="link of links"
          :key="link.title"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon 
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          flat
          v-for="link in links"
          :key="link.title"
          :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
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
      drawer: false,
      links: [
        {
          title: 'Login',
          icon: 'lock',
          url: '/login'
        },
        {
          title: 'Registration',
          icon: 'face',
          url: '/registration'
        },
        {
          title: 'Orders',
          icon: 'bookmark_border',
          url: '/orders'
        },
        {
          title: 'New ad',
          icon: 'note_add',
          url: '/new'
        },
        {
          title: 'My ads',
          icon: 'list',
          url: '/list'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
