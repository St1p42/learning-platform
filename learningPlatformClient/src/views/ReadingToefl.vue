<template>
  <div class="wrapper">
    <h1 v-if="!passage">Please, wait. AI generates the passage.</h1>
    <div class="leftPart" >
       <div class="passage" v-if="passage">
         <h2>{{ passage.title }}</h2>
         {{ passage.passage }}
       </div>
    </div>
    <div class="rightPart" v-if="passage">
      <div class="questions">
        <h2 v-if="submitted">Вы завершили тест, ваш результат:<br>{{ result }} %</h2>
        <h3 v-if="submitted"> Правильные ответы: {{ correct }} </h3>
        <button v-if="submitted" class='button' type="button" @click="goBack">Go back</button>

        <form v-if="!submitted" @submit.prevent="submitAnswers">
      <div v-for="(question, index) in passage.questions" :key="index">
        <p>{{ question.question }}</p>
        <div v-for="(option, optionIndex) in question.options" :key="optionIndex">
          <label>
            <input
              type="radio"
              :name="'question_' + index"
              :value="optionIndex"
              v-model="selectedAnswers[index]"
              :disabled="submitted"
            />
            {{ option }}
          </label>
        </div>
      </div>
      <button class='submit' type="submit" :disabled="submitted">Submit</button>
    </form>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import router from '../router'
import toeflSection from '@/assets/images/toefl_sections.png'
import dataManager from "@/apis/dataManager";

export default {
  data() {
    return {
      selectedAnswers: [],
      submitted: false,
      submitAnswers,
      toeflSection,
      goBack,
    }
  },
  computed: {
    passage() {
      return dataManager.getData();
    },
    result() {
      let count = 0
      let correct = dataManager.getData().questions.map(a => a.answer.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0))
      for (let i = 0; i < this.selectedAnswers.length; i++) {
        if (this.selectedAnswers[i] == correct[i]) {
          count++
        }
      }
      return count / correct.length * 100
    },
    correct() {
      return dataManager.getData().questions.map(x => x.answer)
    },
  },
  created() {
    // Initialize selectedAnswers array with default values
    this.selectedAnswers = this.passage.questions.map(() => null);
  }
}
function goBack() {
  router.push('/toefl')
}
function submitAnswers() {
  this.submitted = true;

  // Collect user's selected answer indices for each question
  const userAnswerIndices = this.selectedAnswers.slice();
  console.log('User Answer Indices:', userAnswerIndices);
}

</script>
<style>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.leftPart {
  display: flex;
  flex-direction: row;
  width: 55%;
}

.rightPart {
  display: flex;
  width: 45%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: bold;
}

.questions {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.questionText {
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 20px;
}

.submit {
  margin-top: 20px;
  border-radius: 35px;
  font-size: 20px;
  background-color: #FFF;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button {
  margin-top: 20px;
  border-radius: 35px;
  font-size: 20px;
  background-color: #FFF;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
