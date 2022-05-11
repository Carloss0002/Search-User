<template>
  <div id="app">
     <Form v-if="0"/>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'


export default {
  components: { Form },
 
}
</script>

<style>

</style>
