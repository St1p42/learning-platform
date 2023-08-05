<template>
  <div class="wrapper">
    <div class="leftPart">
       <div class="passage">
         <h2>Название текста</h2>
         Текст паывадвыоад<br>
         плавплаовплоавлпоывлап
       </div>
    </div>
    <div class="rightPart">
      <div class="questions">
           <h2>Questions:</h2>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import toeflSection from '@/assets/images/toefl_sections.png'

export default {
  data() {
    return {
      submit,
      toeflSection
    }
  }
}
function submit() {
  // submit answers
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
  justify-content: center;
  align-items: center;
  width: 50%;
}

.rightPart {
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

h2 {
  font-weight: bold;
}
</style>
