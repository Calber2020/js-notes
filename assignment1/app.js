const app = Vue.createApp({
  data() {
    return {
      name: 'Chase',
      age: 22,
      imageUrl: "https://wallpapercave.com/wp/wp3789020.jpg"
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    }
  }
});

app.mount('#assignment');