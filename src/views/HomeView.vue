<template>
  <section class="flex justify-center h-screen container px-4 mx-auto">
    <main class="flex flex-col justify-center content-center gap-3">
      <div class="p-3 bg-gray-600" v-for="vote in voteArray" :key="vote.id">
        <span class="flex font-bold" :class="[vote.titleColor]">{{
          vote.title
        }}</span>
        <progress
          :class="[vote.progressColor]"
          class="progress w-56 h-3"
          :value="[vote.value]"
          max="100"
        ></progress>
        <span class="ml-4">{{ vote.value }}%</span>
        <button
          :class="[vote.btnColor]"
          class="btn rounded-none ml-4"
          @click="handleVote(vote.id)"
        >
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
// import {useGlobalState, useStorage} from "@vueuse/core"
export default {
  data() {
    return {
      voteArray: [],
      totalVotes: null,
    };
  },
  mounted() {
    this.watchState();
  },
  methods: {
    titleColor: "",
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
    handleVote(voteId) {
      this.voteArray[voteId].howManyClicked++;
      this.totalVotes++;
      this.handleTotal(voteId);
    },
    handleTotal(voteId) {
      let totalClick = this.totalVotes;
      let linux = this.voteArray[voteId].howManyClicked;
      let findProsent = Math.floor((100 * linux) / totalClick);
      console.log(findProsent);
      this.voteArray[voteId].value = findProsent;
    },

    clearAllVotes() {
      localStorage.clear();
      window.location.reload();
    },
    logShit() {
      console.log("I AM NOW LOGGING SHIT");
    },
  },
  // watch: {
  //   totalVotes(newVote, oldVote) {
  //     if (newVote) {
  //       this.handleVote(voteId);
  //     }
  //   },
  // },
};
</script>
