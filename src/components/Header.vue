<template>
  <div class="col-12">
    <div class="row">
      <header class="main-header text-center" style="background-color: #e6fff7; color: #2e7d6b">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <p class="username_nav mb-0 me-auto" v-if="$route.name !== 'Home'">
                <span v-if="userStore.username">Hello, {{ userStore.username }}!</span>
                Let’s begin.
              </p>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{ name: 'Score' }" class="nav-link">Score</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { useRoute } from 'vue-router'
const userStore = useUserStore()
const $route = useRoute()
</script>
