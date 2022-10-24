<script setup>
// import team from "@/team.json";
import TeamHeader from "@/components/TeamHeader.vue";
import TeamMembers from "@/components/TeamMembers.vue";
import TeamFooter from "@/components/TeamFooter.vue";
import {useTeamStore} from "@/stores/TeamStore";
import Modal from "@/components/Modal.vue";
import {ref} from "vue";
let team = useTeamStore();
team.init();

setTimeout(() => {
  team.grow(25);
}, 2000);

let showModal = ref(false);
</script>

<template>
  <TeamHeader @add="showModal"/>
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers/>
  </div>
  <TeamFooter/>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #default>
        <p>Need to add a new member to your team?</p>

        <form class="mt-6">
          <div class="flex gap-2">
            <input type="email" placeholder="Email Address..." class="flex-1">
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>