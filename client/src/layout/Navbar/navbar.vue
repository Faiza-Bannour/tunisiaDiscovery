<template>
  <v-sheet  width="100%">
    <v-tabs id="tabs"  width="100%" height="64px"
      dark color="cyan"
      
      show-arrows
    >
      <v-tabs-slider color="cyan"></v-tabs-slider>
      <v-tab>
       <v-btn class="ma-9" outlined color="white" router-link to="/home">
       Home
    </v-btn>
    </v-tab>
    <v-tab>
       <v-btn class="ma-8" outlined color="white" router-link to="/hotels">
     Hotels
    </v-btn>
    </v-tab>
   <v-tab>
       <v-btn class="ma-8" outlined color="white" router-link to="/Gallery">
    Places
    </v-btn>
    </v-tab>
      <v-tab>
       <v-btn class="ma-8" outlined color="white" router-link to="/events">
     Events
    </v-btn>
    </v-tab>
    <v-tab>
       <v-btn class="ma-8" outlined color="white" router-link to="/CarsPost">
     Cars
    </v-btn>
    </v-tab>

       <div class="navdiv" v-if="!this.islogged" >
            <span class="name_loggedin" >Not a member? </span>

      <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/signin">
     Sign In
    </v-btn>
    </v-tab>

      <v-tab>
       <v-btn class="ma-2" outlined color="light-green lighten-5" router-link to="/signup">
     Sign Up
    </v-btn>
    </v-tab>

      </div>
      <div class="navdiv2" v-else-if='this.islogged'>
      <span class="name_loggedin"><v-icon>{{ icons.mdiAccount }}</v-icon>{{this.username}}</span>
      <v-btn id="buttons" color="green" class="navbar_space2" router-link to="/payment"><v-icon>mdi-cart</v-icon></v-btn>
      <v-badge
        color="red"
        :content="getPayments"
        :value="getPayments"
      >
        
      </v-badge>
      <v-btn id="buttons" @click="logout()" class="navbar_space2" color="red" >logout</v-btn>
      
      </div>
      
   </v-tabs>
  </v-sheet>
</template>

<script>
const Cookie =require('js-cookie');
import {mdiAccount} from '@mdi/js';

export default {
  name: "navbar",
  data: () => ({
    islogged:!!Cookie.get('name'),
    username:Cookie.get('name'),
    icons: {mdiAccount},
  }),
  updated(){
    if(Cookie.get('name')){
      this.islogged= true;
    }
  },
  methods:{
    logout(){
      this.islogged = false;
      Cookie.remove('name')
      this.$router.push('/home')
    }
  },
  computed: {
    getPayments(){
      console.log('here', this.$store.state.payments)
      return this.$store.state.payments
    }
  }

};
</script>

<style scoped>
.navdiv{
 display:flex;
 justify-content:space-between;
 padding:0 5%
 
}
.name_loggedin{
  justify-self:center;
  align-self: center;
}
.mainHeader{
  display:flex;
  justify-content:space-between
}
.navdiv2{
 display:flex;
 justify-content:space-between;

 
}
.navbar_space{
  margin-left:10rem;
}
.navbar_space2{
   margin-left:5rem;
}

#tabs {
 margin: auto;
  width: 500%;
  border: 3px solid green;
  
}

#buttons {
  top:5px;
}
</style>