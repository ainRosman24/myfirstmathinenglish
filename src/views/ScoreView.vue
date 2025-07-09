<template>
  <div class="score-page text-center mint-theme full-width-page">
    <div class="card text-center">
      <h2 class="mb-3 mint-title" style="font-weight: bold; color: #009688">Top 10 Scores</h2>
      <h5 class="mb-4 mint-subtitle" style="color: #607d8b">
        Here are the top 10 scores from the quiz. <br />
        Congratulations to all the participants!
      </h5>
      <div class="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, idx) in userStore.leaderboard" :key="idx">
              <td>{{ idx + 1 }}</td>
              <td>{{ entry.name }}</td>
              <td>{{ entry.score }}</td>
            </tr>
            <tr v-if="userStore.user">
              <td>-</td>
              <td><strong>Your Score</strong></td>
              <td>
                <strong>{{ userStore.user.score }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
</script>
