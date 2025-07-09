<template>
  <div class="math-question text-center mint-theme full-width-page">
    <h2 class="mb-3 mint-title">Rounding Numbers to the Nearest 10</h2>
    <h4 class="mb-4 mint-subtitle">Please select the correct answer for each question below.</h4>

    <div class="container text-center">
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center align-items-stretch"
      >
        <div class="col" v-for="(q, qIdx) in questions" :key="qIdx">
          <div class="card h-100 mint-card">
            <div class="card-body">
              <h5 class="card-title mint-question">{{ q.text }}</h5>
              <div class="btn-group-vertical w-100">
                <button
                  v-for="option in q.options"
                  :key="option"
                  class="btn"
                  :class="{
                    'mint-btn-selected': q.selected === option,
                    'mint-btn': q.selected !== option,
                  }"
                  @click="selectOption(qIdx, option)"
                >
                  {{ option }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button class="btn mint-action me-2" @click="checkAnswer">Submit</button>
        <button class="btn mint-reset" @click="resetQuiz">Reset</button>
        <div class="mt-3" v-if="resultMessage">
          <div
            class="modal fade show"
            tabindex="-1"
            style="display: block; background: rgba(0, 0, 0, 0.5)"
            v-if="resultMessage"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content mint-modal">
                <div class="modal-header">
                  <button type="button" class="btn-close" @click="resultMessage = ''"></button>
                </div>
                <div class="modal-body">
                  <div
                    class="d-flex justify-content-center align-items-center mb-3"
                    style="font-size: 5rem; animation: pop 0.6s"
                  >
                    <span v-if="resultMessage && resultMessage.includes('All answers are correct')"
                      >🎉</span
                    >
                    <span
                      v-else-if="resultMessage && parseInt(resultMessage.match(/\d+/)?.[0]) >= 6"
                      >👏</span
                    >
                    <span v-else>😅</span>
                  </div>
                  <strong>
                    <template
                      v-if="resultMessage && resultMessage.includes('All answers are correct')"
                    >
                      {{ resultMessage }}
                    </template>
                    <template
                      v-else-if="resultMessage && parseInt(resultMessage.match(/\d+/)?.[0]) >= 6"
                    >
                      Congratulations! <br />{{ resultMessage }}
                    </template>
                    <template v-else> Try again! <br />{{ resultMessage }} </template>
                  </strong>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn mint-action" @click="resultMessage = ''">
                    Close
                  </button>
                  <button type="button" class="btn mint-action" @click="$router.push('/score')">
                    Go to Top Score
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/user'

export default {
  data() {
    return {
      questions: [
        {
          text: '17 rounded to the nearest 10 is:',
          options: [10, 20, 17],
          correct: 20,
          selected: null,
        },
        {
          text: '45 rounded to the nearest 10 is:',
          options: [50, 45, 40],
          correct: 50,
          selected: null,
        },
        {
          text: '75 rounded to the nearest 10 is:',
          options: [70, 80, 175],
          correct: 80,
          selected: null,
        },
        {
          text: '19 rounded to the nearest 10 is:',
          options: [20, 10, 19],
          correct: 20,
          selected: null,
        },
        {
          text: '64 rounded to the nearest 10 is:',
          options: [64, 70, 60],
          correct: 60,
          selected: null,
        },
        {
          text: '0 rounded to the nearest 10 is:',
          options: [10, 1, 0],
          correct: 0,
          selected: null,
        },
        {
          text: '98 rounded to the nearest 10 is:',
          options: [80, 100, 89],
          correct: 100,
          selected: null,
        },
        {
          text: '199 rounded to the nearest 10 is:',
          options: [190, 100, 200],
          correct: 200,
          selected: null,
        },
        {
          text: '94 rounded to the nearest 10 is:',
          options: [90, 100, 110],
          correct: 90,
          selected: null,
        },
        {
          text: '165 rounded to the nearest 10 is:',
          options: [160, 170, 150],
          correct: 170,
          selected: null,
        },
        {
          text: '445 rounded to the nearest 10 is:',
          options: [450, 440, 500],
          correct: 450,
          selected: null,
        },
        {
          text: '999 rounded to the nearest 10 is:',
          options: [990, 1000, 909],
          correct: 1000,
          selected: null,
        },
      ],
      resultMessage: '',
    }
  },
  methods: {
    selectOption(qIdx, option) {
      this.questions[qIdx].selected = option
    },
    checkAnswer() {
      let correctCount = 0
      this.questions.forEach((q) => {
        if (q.selected === q.correct) correctCount++
      })
      // Use Pinia store to save score and update leaderboard
      const userStore = useUserStore()
      userStore.setScore(correctCount)

      if (correctCount === this.questions.length) {
        this.resultMessage = 'All answers are correct! 🎉'
      } else {
        this.resultMessage = `You got ${correctCount} out of ${this.questions.length} correct.`
      }
    },
    resetQuiz() {
      this.questions.forEach((q) => {
        q.selected = null
      })
      this.resultMessage = ''
    },
  },
}
</script>

<style scoped>
@keyframes pop {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
