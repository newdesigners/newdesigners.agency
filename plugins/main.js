import Vue from "vue";
Vue.mixin({
  methods: {
    mySpecialMethod(value) {
      console.log(value);
    },

    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return value.replace(/-/g, " ");
    },

    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    }
  }
});
