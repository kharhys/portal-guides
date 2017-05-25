<template>
  <section class="container">
    <!-- <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" /> -->
    <article class="wrapper">
      <div class="header">
        <div class="labels">
          <v-chip class="blue-grey lighten-2  white--text">
            <v-avatar class="blue-grey  ">27</v-avatar>
            All
          </v-chip>
          <v-chip class="grey  white--text">
            <v-avatar class="grey  ">8</v-avatar>
            Parastatals
          </v-chip>
          <v-chip class="grey  white--text">
            <v-avatar class="grey  ">19</v-avatar>
            Private
          </v-chip>
        </div> 
      </div>

      <entry-card> </entry-card> 
      
    </article>
    <!--
    <nuxt-link class="button" to="/demo">
      Demo page
    </nuxt-link>
    -->
  </section>
</template>

<style >
.chip {
  height: 16px;
  padding-left: 5px;
  font-size: .88rem;
}
.chip .avatar {
  height: 23px;
  width: 23px;
  min-width: 23px;
  margin-right: 4px;
}
.labels {
  margin-bottom: 1rem;
}
.labels > span {
  cursor: pointer;
}
.labels > span:hover > .avatar,
.labels > span:hover { 
  background-color: #607d8b!important;
  border-color: #607d8b!important;
}
.title
{
  margin: 50px 0;
}




</style>


<script>
import EntryCard from '~components/EntryCard.vue'

export default {
  components: {
    EntryCard
  },
  data () {
    return {
      showsidenav: false,
      pinned: false 
    }
  }
}
</script>