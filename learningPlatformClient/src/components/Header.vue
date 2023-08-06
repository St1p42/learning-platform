<template>
  <div class="homepage" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="navbar">
        <div class="left-section">
          <span class="company-name">Coderillas</span>
        </div>
        <div class="right-section">
          <span class="nav-text">Review</span>
          <span class="nav-text">Tips</span>
          <span class="nav-text">Alerts</span>
          <span class="nav-text" id ="blog">Blog</span>
        </div>
      </div>
    <section class="middleText">
          <span> Подготовься к экзамену, </span>
          <span> учись эффективно!</span>
    </section>
  </div>




</template>

<script>
import backgroundUrl from '@/assets/images/image_book.png'
export default {
  data() {
    return {
      backgroundUrl
    }
  }
}
</script>

<style>
.navbar {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  width: 100%; /* Set width to 100% */
  box-sizing: border-box; /* Include padding in width calculation */
}

.company-name {
  font-family: Poppins,fantasy;
  font-size: 55px;
  font-weight: 500;
  line-height: normal;
  margin-left: 70px;
}

.nav-text {
  color: #fff;
  margin-right: 60px;
  cursor: pointer;
  font-size: 25px
}
#blog {
  margin-right: 150px;
}

.homepage {
  height: 800px;
  display: flex;
  flex-direction: column;
}

.middleText {
  flex-direction: column;
  color: #FFF;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 64px;
  font-weight: 1500;
  line-height: normal;
}

</style>