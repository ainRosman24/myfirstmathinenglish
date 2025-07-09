<template>
  <div
    class="welcome-page text-center mint-theme full-width-page d-flex align-items-center justify-content-center"
  >
    <div class="card text-center shadow-lg p-4">
      <h2 class="mb-3 mint-title" style="font-weight: bold; color: #009688">
        Welcome to Math in English
      </h2>
      <h5 class="mb-4 mint-subtitle" style="color: #607d8b">
        This is a simple math quiz application designed to help you practice math in English.
      </h5>
      <p class="mb-4" style="font-size: 1.1rem">Please enter your name to begin:</p>
      <form id="startForm" @submit="startQuiz">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Your Name"
            required
            v-model="username"
            style="border-radius: 10px; padding: 12px; font-size: 1.1rem"
          />
        </div>
        <button
          type="submit"
          class="btn mint-action w-100"
          style="
            background: #009688;
            color: #fff;
            font-weight: 600;
            border-radius: 10px;
            padding: 10px 0;
          "
        >
          Start Quiz
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user'

export default {
  setup() {
    // Do not return userStore to the template, so it's not accessible in the template
    useUserStore()
    return {}
  },
  data() {
    return {
      username: '',
    }
  },
  methods: {
    isUsernameInserted() {
      return this.username.trim().length > 0
    },
    startQuiz(event) {
      event.preventDefault()
      // Access userStore only in methods, not in template
      const userStore = useUserStore()
      if (this.isUsernameInserted()) {
        userStore.setUsername(this.username)
        this.$router.push('/question')
      } else {
        alert('Please enter your name to start the quiz.')
      }
    },
  },
}
</script>
