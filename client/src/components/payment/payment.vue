<template>
 <div>
    <v-card 
      class="mx-auto"
      max-width="400" 
      :v-if="isCard" >
      <v-card-title> Car Payment</v-card-title>
      <v-card-text class="text--primary">
      <div> {{$store.state.car.username}}</div>
      <div>{{$store.state.car.useremail}}</div>
      <div>{{$store.state.car.userphone}}</div>
      <div><span> From: </span>{{$store.state.car.startD}} </div>
      <div><span> To: </span>{{$store.state.car.endD}} </div>
      <div> {{$store.state.car.time}} </div>
      <div> {{$store.state.car.total}}<span> TND </span> </div>
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
      >
        Cancel
      </v-btn>
     </v-card-actions>
    </v-card>

  </div>
</template>
<script>
export default {
    name: "Payment",
    data:()=>{
        return {
            car:null,
            hotel:null,
            event:null
        }
    },
    beforeMount(){
        console.log(this.$store.state)
    },
    mutations:{
        isCard(){
            return this.$store.state.car
        }
    }
}
</script>
<style>

</style>