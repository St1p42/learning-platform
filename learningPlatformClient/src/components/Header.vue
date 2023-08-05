<template>
  <div class="homepage" v-bind:style="{backgroundImage: background}">
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
  </div>
</template>

<script>
import background from '@/assets/images/image_book.png'
export default {
  data() {
    return {
      background,
    }
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  width: 100%; /* Set width to 100% */
  box-sizing: border-box; /* Include padding in width calculation */
}

.company-name {
  color: var(--white-primary, #FFF);
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 70px;
}

.nav-text {
  color: #fff;
  margin-right: 60px;
  cursor: pointer;
  font-size: 20px
}
#blog {
  margin-right: 150px;
}

</style>