<template>
  <nav>
    <ul>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/characters">Characters</nuxt-link>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background: rgba(256, 256, 256, 0.5);
  ul {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 900px;
    padding: 2em;
    display: flex;
    justify-content: flex-start;
    a {
      color: #87267c;
      margin-right: 1em;
    }
  }
}
</style>
