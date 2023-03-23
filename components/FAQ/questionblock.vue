<template>
    <div class="w-faqwidth h-faqheight bg-tertiary text-white flex flex-row justify-between rounded items-center mb-0.625">
        <p class="text-2xl font-bold justify-self-start ml-2.25">{{question}}</p>
        <h1 class="mr-1.25 font-bold transform rotate-90">></h1>
    </div>
</template>

<script>
export default {
  props: {
    question: String,
  },
  data() {
  return {
  };
}
};
</script>
