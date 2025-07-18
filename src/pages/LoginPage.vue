<script>
export default {
  name: "LoginPage",
  data: () => ({
    email: 'admin@gmail.com',
    password: 'admin',
  }),
  methods: {
    submit() {
      //
      setTimeout(() => {
        if (this.email === 'admin@gmail.com' && this.password === 'admin') {
          localStorage.setItem('token', 'token');
          this.$router.push({name: 'home'});
        }
      }, 1000)
      //
    }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" @keyup.enter="submit"/>
      </div>
      <div>
        <button type="submit">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>