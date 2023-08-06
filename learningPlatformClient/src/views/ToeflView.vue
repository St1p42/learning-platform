<template>
  <h1 v-if="clicked">Please, wait. AI generates the passage.</h1>
  <div class="container" v-if="!clicked">
    <div class="left">
       <div class="image" :style="{ backgroundImage: `url(${toeflSection})` }"> </div>
       <div class="sections">
          Выберите раздел:
          <div class="section" @click="handleReading">Reading</div>
          <div class="section">Writing</div>
          <div class="section">Speaking(independent)</div>
       </div>
    </div>
    <div class="right">
      <h1>Подготовься к TOEFL<br>вместе с Coderillas</h1>
      <p>Благодаря искусственному интеллекту, наш сайт<br>
         генерирует задания на подобии вопросов из TOEFL<br>
         Это позволит вам натренироваться на пробных тестах и<br>подготовиться к экзамену.</p>
    </div>
  </div>
</template>

<script>
import router from '../router'
import toeflSection from '@/assets/images/toefl_sections.png'
let clicked = false;
export default {
  data() {
    return {
      handleReading,
      toeflSection,
      clicked: false
    }
  }
}

function handleReading() {
  this.clicked = !this.clicked;
  router.push('/toefl/reading')
}

function handleClick() {
  router.push('/')
  console.log('handled')
}
</script>
<style>
.container {
  display: flex;
  flex-direction: row;
}
.left {
  display: flex;
  flex-direction: column;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: right;
  line-height: normal;
}
.image {
  margin-left: 175px;
  height: 263px;
  width: 565px;
}

h1 {
  font-family: Poppins,serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.right {
  margin-left: 175px;
  margin-top: 150px;
}

p {
  font-family: Poppins,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%
}

.sections {
  margin-top: 50px;
  margin-left: 225px;
  font-family: Poppins,serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #3E86F5;
}

.section {
  border-radius: 35px;
  background-color: #FFF;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.section:hover {
  background-color: antiquewhite;
}
</style>
