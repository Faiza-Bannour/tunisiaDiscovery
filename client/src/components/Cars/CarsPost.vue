<template>
<div class="block latestPostBlock">
  
  <createCar v-if="apear"/>
  <v-btn
      v-if="userstatus === 'admin'"
      class="mx-2"
      dark
      large
      color="cyan"
   @click="apearcarcreate"
    > create car
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
  
    <v-container>
      <h2 class="text-center">Cars Post</h2>
      <v-row>
        <v-col v-for="(car) in cars" :key="car._id" cols="12" md="4" >
          <v-card outlined class="mx-auto">
            <v-img class="black--text align-end" height="200px" :src="car.imageUrl">
              <v-card-title>{{ car.title }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ car.price }} <span> TND per day </span></v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ car.text }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="showcar(car._id)">More</v-btn>
                
                <v-btn v-if="userstatus === 'admin'" class="ma-1" color="red" @click="remove(car._id)">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import createCar from './createCar';
const Cookie =require('js-cookie');

export default {
  name: "CarsPost",

 data() {
    return {
        cars: [],
        apear : false,
        userstatus:Cookie.get('status'),
        
  }},

  components: {
    createCar,
  },

 async mounted() {
    const response = await axios.get("http://localhost:5000/api/Car");
    console.log(response.data)
    console.log(this.userstatus)
    this.cars = response.data;
  },
  methods: {
    showcar(id){
      this.$router.push(`/CarShow/${id}`)

    },
    apearcarcreate(){
      this.apear = !this.apear;
    },
    async remove(id){
            await axios.delete(`/api/Car/${id}`);
            window.location.replace("/CarsPost");
        }
  }
};
</script>