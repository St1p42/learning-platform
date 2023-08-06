<template>
  <div class="allTests">
    <div class="test">
      <div class="photo" :style="{ backgroundImage: `url(${ortImage})` }"> </div>
      <div class="lower-area">
         ОРТ<br>
         0$/month
        <div>
          <button @click="handleClick">Перейти к тесту</button>
        </div>
      </div>

    </div>
    <div class="test">
      <div class="photo" id="toefl" :style="{ backgroundImage: `url(${toeflImage})` }"> </div>
      <div class="lower-area">
         TOEFL<br>
         0$/month
        <div>
          <button @click="handleClick">Перейти к тесту</button>
        </div>
      </div>
    </div>
    <div class="test">
      <div class="photo" id="custom" :style="{ backgroundImage: `url(${customImage})` }"> </div>
      <div class="lower-area">
         Свой тест<br>
         0$/month
        <div>
          <button @click="handleClick">Перейти к тесту</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customImage from '@/assets/images/custom.png'
import ortImage from '@/assets/images/ort.png'
import toeflImage from '@/assets/images/toefl.png'
import router from '../router'
import { Api } from "@/apis/apiService"

export default {
  data() {
    return {
      customImage,
      ortImage,
      toeflImage,
      handleClick
    }
  }
}

function handleClick() {
  router.push('/toefl')
  console.log('handled')
}
</script>

<style scoped>
.allTests {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
}
.test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #282828;
  font-size: 40px;
  height: 400px;
  width: 400px;
  background-color: white;
  border-radius: 50px;
  padding-left: 40px;
  line-height: normal;
}
.photo {
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 300px;
  border-radius: 50px;
  margin: 20px 20px 20px 1px;
  background-repeat: no-repeat;
}
.lower-area {
  display: flex;
  flex-direction: row;
}
button {
  margin-left: 35px;
  margin-top: 40px;
  border-radius: 10px;
  background: #F2F6FF;
  width: 100px;
  height: 45px;
  color: #3E86F5;
  font-family: Poppins,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
#custom {
    background-position: -55px 50%;
}
#toefl {
    background-position: 25px 50%;
}
button:hover {
  background-color: white;
}
</style>