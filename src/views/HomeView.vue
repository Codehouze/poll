<template>
  <section class="flex justify-center h-screen container px-4 mx-auto">
    <main class="flex flex-col justify-center content-center gap-3">
      <div class="p-3 bg-gray-600" v-for="vote in voteArray" :key="vote.id">
        <span class="flex font-bold" :class="[vote.titleColor]">{{ vote.title }}</span>
        <progress :class="[vote.progressColor]" class="progress w-56 h-3" :value="[vote.value]" max="100"></progress>
        <span class="ml-4">{{ vote.value }}%</span>
        <button :class="[vote.btnColor]" class="btn rounded-none ml-4" @click="handleVote(vote.id)">
          Vote
        </button>
      </div>
      <button @click="clearAllVotes" class="btn rounded-none btn-secondary">
        Clear all votes
      </button>
    </main>
  </section>
</template>

<script>
import { useLocalStorage } from "@vueuse/core";
export default {
  data() {
    return {
      voteArray: [],
      // Total vote given across all polls 
      totalVotes: null,
    };
  },
  // Runs state, getting correct localstorage data in regard of the poll
  mounted() {
    this.watchState();
  },
  methods: {
    // In use?
    titleColor: "",
    // Main Poll - Easily adjustable
    watchState() {
      let pollState = useLocalStorage("state", [
        {
          title: "windows 10",
          titleColor: "text-success",
          id: 0,
          progressColor: "progress-success",
          btnColor: "btn-success",
          value: 0,
          prosent: 0,
          howManyClicked: 0,
        },
        {
          title: "windows 11",
          titleColor: "text-info",
          id: 1,
          progressColor: "progress-info",
          btnColor: "btn-info",
          value: 0,
          prosent: 0,
          howManyClicked: 0,
        },
        {
          title: "mac os",
          titleColor: "text-warning",
          id: 2,
          progressColor: "progress-warning",
          btnColor: "btn-warning",
          value: 0,
          prosent: 0,
          howManyClicked: 0,
        },
        {
          title: "linux",
          titleColor: "text-error",
          id: 3,
          progressColor: "progress-error",
          btnColor: "btn-error",
          value: 0,
          prosent: 0,
          howManyClicked: 0,
        },
      ]);
      this.voteArray = pollState;
    },

    // Adds a new vote to the Total Votes, then updates the poll with the correct values
    handleVote(voteId) {
      this.voteArray[voteId].howManyClicked++;
      this.totalVotes++;
      this.handleTotal();
    },

    // Takes total vote, loops over the array and make a calculation where each poll get their correct %
    handleTotal() {
      let totalClick = this.totalVotes;
      for (let index = 0; index < this.voteArray.length; index++) {
        let valueToSet = this.voteArray[index].howManyClicked;
        let findPercentage = Math.floor((100 * valueToSet) / totalClick);
        this.voteArray[index].value = findPercentage;
      }
    },
    
    // Clears the Votes from localstorage
    clearAllVotes() {
      localStorage.clear();
      window.location.reload();
    },
  },
};
</script>
