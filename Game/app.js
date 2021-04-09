function getRandomValue(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  methods: {
    attackMonster() {
     const attackValue =  getRandomValue(5, 12);
     this.monsterHealth -= attackValue;
    },
    attackPlayer() {
      const attackValue =  Math.floor(Math.random() * (15 - 8)) + 8;
      this.playerHealth -= attackValue;
    }
  }
});

app.mount('#game');