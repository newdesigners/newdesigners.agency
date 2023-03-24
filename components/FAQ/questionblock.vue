<template>
  <div class="mb-0.625 w-3/4">
    <div class="relative w-full h-faqheight bg-tertiary text-white flex flex-row justify-between rounded items-center">
        <p class="md:text-2xl text-sm font-bold justify-self-start ml-2.25 md:max-w-xs lg:max-w-2xl">{{question}}</p>
        <div v-if="this.IsOpen" class="absolute right-2 bottom-0.375 md:bottom-auto font-bold" @click="OpenAndCloseBlock"><p class="select-none cursor-pointer font-bold leading-10 md:text-3xl text-base transform -rotate-90">></p></div>
        <div v-else="this.IsOpen" class="absolute right-1.5 bottom-0.375 md: md:bottom-auto font-bold" @click="OpenAndCloseBlock"><p class="select-none cursor-pointer font-bold leading-10 md:text-3xl text-base transform rotate-90">></p></div>
    </div>
    <div class="flex justify-center items-center rounded-br rounded-bl faqShadow" v-if="this.IsOpen">
      <div class="mt-2.5 mb-2.5 w-11/12">
        <p class="leading-6 md:text-lg text-xs max-w-none">{{answer}}</p>
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
