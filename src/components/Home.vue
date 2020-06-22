<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(ad,i) in ads"
              :key="i"
              :src="ad.imageSrc"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>Home</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'Fisrt Ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '1'
        },
        {
          title: 'Second Ad',
          description: 'Hello I am description',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '2'
        },
        {
          title: 'Third Ad',
          description: 'Hello I am description',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '3'
        },
        {
          title: 'Fourth Ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '4'
        }
      ]
    }
  }
}
</script>