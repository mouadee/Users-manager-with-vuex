<template>
    <div class="usersDetails">
        <div class="card-header">
            <small class="text-muted">Users Details:</small>
        </div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">User ID</th>
                <th scope="col">Username</th>
                <th scope="col">Full Name</th>
                <th scope="col">Address</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users">
                <td>{{ user.userId }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.fullName }}</td>
                <td>{{ user.address }}</td>
                <td>
                    <button class="btn btn-danger btn-sm" @click="delete_user(index)">x</button>
                </td>
            </tr>
            </tbody>
        </table>
        <p v-if="users.length === 0" class='text-center alert alert-warning'>No data found! Please add some data ...</p>
    </div>
</template>

<script>
    export default {
        name: "usersDetails",
        computed: {
            users() {
                return this.$store.getters.users;
            },
        },
        methods: {
            delete_user(index) {
                this.$store.commit('DELETE_USER', index)
            }
        },
    }
</script>

<style scoped>

</style>