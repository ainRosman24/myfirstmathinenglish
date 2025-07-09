import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: localStorage.getItem('username') || '',
    score: Number(localStorage.getItem('score')) || 0,
    leaderboard: JSON.parse(localStorage.getItem('leaderboard') || '[]'),
  }),
  actions: {
    setUsername(name) {
      this.username = name
      localStorage.setItem('username', name)
    },
    setScore(score) {
      this.score = score
      localStorage.setItem('score', score)
      this.saveToLeaderboard()
    },
    saveToLeaderboard() {
      const entry = { name: this.username, score: this.score }
      let leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]')
      leaderboard.push(entry)
      // Sort descending and keep top 10
      leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10)
      this.leaderboard = leaderboard
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard))
    },
  },
})
