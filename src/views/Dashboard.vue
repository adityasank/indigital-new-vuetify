<template>
  <v-app id="inspire">
    <v-navigation-drawer class="nav" v-model="drawer" app>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="ml-3">
        <v-toolbar-title style="font-size:40px;">Indigital</v-toolbar-title>
      </div>
      <div class="ml-12">
        <v-toolbar-title active>Top Ups</v-toolbar-title>
      </div>

      <div class="ml-3">
        <v-toolbar-title>My Packs</v-toolbar-title>
      </div>

      <div class="ml-3">
        <v-toolbar-title>Help</v-toolbar-title>
      </div>
      <div class="ml-3">
        <v-toolbar-title>Premium</v-toolbar-title>
      </div>
    </v-app-bar>
    <Carousel />

    <v-col>
      <Card />
    </v-col>
    <h5 class="ml-6">Exclusive Content</h5>
    <v-row>
      <v-col>
        <ExclusiveCard />
      </v-col>
      <v-col>
        <ExclusiveCard />
      </v-col>
      <v-col>
        <ExclusiveCard />
      </v-col>
      <v-col>
        <ExclusiveCard />
      </v-col>
      <v-col>
        <ExclusiveCard />
      </v-col>
      <v-col>
        <ExclusiveCard />
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import Carousel from "@/components/Elements/Carousel.vue";
import Card from "@/components/Elements/Card.vue";
import ExclusiveCard from "@/components/Elements/ExclusiveCard.vue";

export default {
  components: {
    Carousel,
    Card,
    ExclusiveCard
  },
  props: {
    source: String
  },

  data: () => ({
    drawer: null
  })
};
</script>
