<template>
 <div class="block latestPostBlock">
    <v-container>
    <v-card 
      class="mx-auto"
      max-width="400" 
      v-if="isCar" >
      <v-card-title> Car Payment</v-card-title>
      <v-card-text class="text--primary">
      <div>Your Car is:  {{$store.state.car.title}}</div>
      <div> FullName:  {{$store.state.car.username}}</div>
      <div>E-mail:  {{$store.state.car.useremail}}</div>
      <div>Phone:  {{$store.state.car.userphone}}</div>
      <div><span> From: </span>{{$store.state.car.startD}} </div>
      <div><span> To: </span>{{$store.state.car.endD}} </div>
      <div> At: {{$store.state.car.time}} </div>
      <div> Total:  {{$store.state.car.total}}<span> TND </span> </div>
      </v-card-text>
      <v-card-actions>
      <v-btn
      @click="pay"
        color="green"
        text
      >
        Continue
      </v-btn>
      <v-btn
        color="red"
        text
        @click="cancelCar"
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
    name: "Payment",
    data:()=>{
        return {
            car:null,
            hotel:null,
            event:null,
            isCar:false
        }
    },
    beforeMount(){
       this.isCar = this.$store.state.car
    },
    methods:{
      pay(){},
      cancelCar(){
        this.$store.commit('setCar',null)
          this.$store.commit('decrementPayments')
          this.isCar = null
      }
    },
   
}
</script>
<style>

</style>