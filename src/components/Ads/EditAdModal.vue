<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn class="warning" flat slot="activator">Edit</v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                label="Title"
                name="title"
                type="text"
                v-model="editedTitle"
              ></v-text-field>
               <v-text-field
                label="Description"
                name="description"
                type="text"
                multi-line
                v-model="editedDesctiption"
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                class="error"
                @click="onCancel"
              >Cancel</v-btn>
              <v-btn
                flat
                class="success"
                @click="onSave"
              >Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      editedTitle: this.ad.title,
      editedDesctiption: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.editedTitle = this.ad.title
      this.editedDesctiption = this.ad.description
      this.modal = false
    },
    onSave () {
      if (this.editedDesctiption !== '' && this.editedTitle !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDesctiption,
          id: this.ad.id
        })
        this.modal = false
      }
    }
  }
}
</script>

<style>

</style>