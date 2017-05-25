<template>
  <div>
    
    <v-app id="example-2" left-fixed-sidebar>
      <v-toolbar>
        <v-toolbar-side-icon @click.native.stop="showsidenav = !showsidenav" />
        <v-toolbar-logo>
          <v-container fluid="fluid">
            <v-row style="align-items: center; text-align: left;">
              <v-col xs2> 
                <v-toolbar-title class="hidden-sm-and-down">YellowPages</v-toolbar-title>
              </v-col>
              <v-col xs7>
                  <div class="search-box">
                    <input type="text" placeholder="Search" spellcheck="false">
                    <div class="switch-box">
                      <v-switch primary v-model="pinned" light />
                    </div>
                  </div>
              </v-col>
              <v-col xs2 offset-xs1>
                <div class="toolbar-buttons">

                  <v-icon  class=" ">apps</v-icon>

                  <v-icon  class="  text--darken-2">notifications</v-icon>

                  <v-icon  class="  text--darken-2">person_pin</v-icon> 
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-toolbar-logo> 
      </v-toolbar>
      <main>
        <v-sidebar left fixed drawer v-model="showsidenav">
          <v-list>
            <v-list-item v-for="i in 3" :key="i">
              <v-list-tile>
                <v-list-tile-title>Label {{ i }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-sidebar>
        <v-content>
          <v-container fluid> 
            <nuxt/>
          </v-container>
        </v-content>
      </main>
    </v-app>

    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  },
  data () {
    return {
      showsidenav: false,
      pinned: false 
    }
  }
}
</script>

<style>
main {
  padding: 0 !important;
}
.content {
  background: transparent !important;
}
.toolbar-buttons {
  display: flex; 
  width: 100%;
  text-align: right;
  padding-right: 1.5rem;
}
.toolbar-buttons > i {
  flex: 1;
  cursor: pointer;
  font-size: 1.25rem;
}
.container
{ 
  padding: 0;
  width: 100%; 
  text-align: left;
}

.button, .button:visited
{
  display: inline-block;
  color: #744d82;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #744d82;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #744d82;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
.toolbar {
  background: #4285f4;
}
.primary--text {
  background: #1266f1;
}
.sidebar--drawer {
  margin-top: 4.2rem;
  background: white;
  z-index: 2;
}
.sidebar--drawer ul li:hover {
    background: #e8e8e8;
}
.sidebar--drawer .list__item a { 
    cursor: pointer; 
    text-decoration: none;
    color: #9b9b9b;
    font-weight: 600;
}
body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 82.5%;
    background: #fff;
    height: 100%;
    min-width: 300px;
    -webkit-font-smoothing: antialiased !important;
    background: #ececec; 
}
.search-box > input {
    height: 35px;
    width: 100%; 
    background: rgba(255, 255, 255, 0.15); 
    border: none;
    outline: none;
    color: white;
    padding: 0 0 0 15px;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: .8px; 
}
.search-box {  
    line-height: 65px;
    white-space: nowrap;
    transition: .2s;
    width: 100%;
    display: flex;
    align-items: center;
}
.search-box .text {  
  flex: 9;
}
.search-box .switch-box {  
  flex: 1;
}
.search-box .input-group__input {  
  margin-top: 1.5rem;
}
::-webkit-input-placeholder {
    color: white;
  }
.toolbar__logo { 
    font-size: 1rem;
}
</style>
