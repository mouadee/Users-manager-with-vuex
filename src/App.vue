<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mt-4 text-center">
          <addUser></addUser>
        </div>
        <div class="col-lg-12 mt-4 text-center">
          <usersDetails></usersDetails>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addUser from './components/addUser.vue'
import usersDetails from './components/usersDetails.vue'

export default {
  name: 'app',
  components: {
    addUser, usersDetails
  }
}
</script>
