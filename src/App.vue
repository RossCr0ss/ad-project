<template>
    <v-app>
        <v-navigation-drawer app temporary>
            <!-- -->
        </v-navigation-drawer>

        <v-app-bar app>
            <!-- -->
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>

            <!-- Provides the application the proper gutter -->
            <v-container fluid>

            <!-- If using vue-router -->
            <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        'v-app-bar': AppBar
    }
}
</script>
