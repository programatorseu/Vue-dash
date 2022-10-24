import {defineStore} from "pinia";
export let useTeamStore = defineStore('team', {
 state() {
    return {
        name: "",
        spots: 0,
        members: []
    }
 },
 actions: {
    async init() {
        let res = await import('@/team.json');
        this.$state = res.default;
      },
      grow(spots) {
        this.spots = spots;
      }
 }
});