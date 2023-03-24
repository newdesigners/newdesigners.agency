<template>
  <div class="mb-0.625">
    <div class="w-faqwidth h-faqheight bg-tertiary text-white flex flex-row justify-between rounded items-center">
        <p class="text-2xl font-bold justify-self-start ml-2.25">{{question}}</p>
        <div v-if="this.IsOpen" class="mr-1.75 font-bold" @click="OpenAndCloseBlock"><p class="select-none cursor-pointer font-bold leading-10 text-3xl transform -rotate-90">></p></div>
        <div v-else="this.IsOpen" class="mr-1.25 font-bold" @click="OpenAndCloseBlock"><p class="select-none cursor-pointer font-bold leading-10 text-3xl transform rotate-90">></p></div>
    </div>
    <div class="flex justify-center items-center rounded-br rounded-bl w-faqwidth faqShadow" v-if="this.IsOpen">
      <div class="mt-2.5 mb-2.5">
        <p class="leading-6">{{answer}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    answer: String,
  },
  data() {
  return {
    IsOpen: false,
  };
},
methods:{
  OpenAndCloseBlock(){
    if(this.IsOpen){
      this.IsOpen = false;
    }else{
      this.IsOpen = true;
    }
    console.log(this.IsOpen)

}
}
};
 

</script>
