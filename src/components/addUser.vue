<template>
  <div class="card">
    <div class="card-header">
      <small class="text-muted">Add User:</small>
    </div>
    <div class="card-body">
      <div class="form-group">

        <label class="mr-4" for="id">User ID</label>
        <input v-model="SET_USER_ID" class="form-control" type="text" id="id" placeholder="Student ID"> <br>

        <label class="mr-4 ml-4" for="username">Username</label>
        <input v-model="USERNAME" class="form-control" type="text" id="username" placeholder="student Name"><br>

        <label class="mr-4 ml-4" for="fullName">Full Name</label>
        <input v-model="FULL_NAME" class="form-control" type="text" id="fullName" placeholder="student Class"><br>

        <label class="mr-4 ml-4" for="address">Address</label>
        <input v-model="ADDRESS" class="form-control" type="text" id="address" placeholder="student Class"><br>

        <button class="btn btn-success ml-4" @click="userAdd()">Add</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    SET_USER_ID: {
      get() {
        return this.$store.getters.userId
      },
      set(value) {
        this.$store.commit("SET_USER_ID", value)
      }
    },
    USERNAME: {
      get() {
        return this.$store.getters.username
      },
      set(value) {
        this.$store.commit("USERNAME", value)
      }
    },
    FULL_NAME: {
      get() {
        return this.$store.getters.fullName
      },
      set(value) {
        this.$store.commit("FULL_NAME", value)
      }
    },
    ADDRESS: {
      get() {
        return this.$store.getters.address
      },
      set(value) {
        this.$store.commit("ADDRESS", value)
      }
    },
  },
  methods: {
    userAdd() {
      this.$store.commit('userAdd');
    }
  }
}
</script>