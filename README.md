# Team Dashboard
-> header is extracted 
`TeamHeader` 
-> declared at the top what are the props 
`definedProps()` -> we expect full object 

`TeamMembers` -> table with all members -> the same way of declaring 
```js
<script setup>
import TeamMember from "@/components/TeamMember.vue";
defineProps({
  team: Object
});
</script>
```

1 member -- diferent declaring of props -> at the bottom 
```js
  <script setup>
  defineProps({
    name: String,
    email: String,
    status: String
  })
  </script>
  ```

  ## Build and Seed a Team store (Pinia)
  - declare store `stores/TeamStore.js`
    -> delcare object return (name, spots and members)
  - inside TeamView import and use that function :
seed - from database or API or json file like here
- actions - inside method   call init (import json file) with promise  (cache response and assign variables)

```js
        import('@/team.json').then(res => {
            // cache defaults :
            let data = res.default;
            this.name = data.name;
            this.spots = data.spots;
            this.members = data.members;

        })
```
2nd way: update with `this.$patch()`
3rd way: - recreate state `this.$state = res.default`

we can change action to be async 
with this approach we are waiting till user hit right endpoint and wait with loading 
```js
  async init() {
      let res = await import('@/team.json');
      this.$state = res.default;
    },
```    
we can remove all defined props from our code -- thanks to pinia 
---
## Animation - transition - teleporting :)
### 1. Modal
- create modal view component 
inside modal Script : 
    - create prop show (bool)
    - on root element set that only display if is true 

 ```js
 <script setup>
  defineProps({
    show: Boolean
  });
</script>
...
<template>
  <div v-if="show" class="modal-mask">
```
in top-level component import `ref` and assign value of false
add to header button `@click="$emit('add')"`
then listen for that 
defineProps -> <-emit relations 

### 2. Transition
wrap within transition element 
 - apply classses
    - enter-from-class (at the beginning)
    - enter-to (when we complete transition)

    enter-active-classs => full-length of transition

### 3. Teleporting
teleport modal right before colsing tag 
Teleport component --> provided by Vue
- wrap our modelw with `<Teleport>