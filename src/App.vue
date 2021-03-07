<template>
  <div id="app">
    <div class="nav-search">
      <nav class="navbar gradient" style="padding: 8px;">
        <h1>
          <router-link style="color: white" to="/">{{
            "iTunes Search App"
          }}</router-link>
        </h1>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 10px;
}

h1 {
  font-size: 2rem;
  padding-left: 1rem;
}

.gradient {
  background-color: #a93fc9c9;
  background-image: linear-gradient(325deg, #f0ed3eec, #43c6ddf8 100%);
}

.nav-search {
  position: fixed;
  width: 100%;
}
</style>
