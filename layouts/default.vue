<template>
  <div>
    <div class="fantasyBackground"></div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Charm&display=swap');
h1,
h2,
h3 {
  font-family: 'Charm', cursive;
}
h4,
h5,
h6 {
  font-family: sans-serif;
}
html,
body {
  font-family: sans-serif;
}
.fantasyBackground {
  background: url('/img/floating-city.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.3;
  z-index: -1;
}

.container {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
  color: #edbfe6;
  width: 100%;
  max-width: 900px;
  margin: 100px auto;
  padding: 2em;
}
a {
  color: #edbfe6;
}
</style>
