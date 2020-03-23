<template>
  <div id="nav">
    <div id="logo">
      <h1>
        <img alt="Vue logo" src="../assets/logo.png">
        <span>Grow Journal</span>
      </h1>
    </div>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/schedule">Schedule</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#nav {
  display: block;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 15px;
  background: linear-gradient(160deg, #f0f1f4 0%, #e4e6eb 100%);
  border-bottom: 2px solid #fafafa;
  box-shadow: inset -3px -3px 5px 0px #ffffff, -1px -1px 4px 0px #ffffff, inset 5px 5px 10px 0px rgba(0, 0, 0, 0.12), inset 2px 2px 3px 0px rgba(0, 0, 0, 0.07), 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
}
#nav:after {
  content: "";
  display: block;
  clear: both;
}
/* Logo */
#nav #logo {
  display: block;
  width: 50px;
  height: auto;
  margin: 0 auto;
  padding: 0;
}
#nav #logo h1,
#nav #logo img {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
#nav #logo span {
  display: none;
  font-size: 12px;
  line-height: 14px;
}
/* Menu */
#nav ul.menu {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
#nav ul.menu li {
  display: inline-block;
  margin: 0 5px;
  padding: 5px;
}
#nav ul.menu li a {
  font-weight: bold;
  color: #2c3e50;
}
#nav ul.menu li a.router-link-exact-active {
  color: #42b983;
}
</style>