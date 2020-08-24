<template>
  <div id="app">
    <div id="nav">
      <router-link class="links" to="/">Начальная страница</router-link> |
      <router-link class="links" to="/res">Результат</router-link>
       <hr />
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.links{
  text-decoration: none;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;

}

hr{
  color: black;
    width: 100%;
    height: 2px;
    background-color: black;
    border-width: 0;
}

button {
    margin: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    background: rgb(64,199,129);
    transition: 0.2s;
    border-width: 0px;
    padding: 4px;
  
  transition: 0.2s;
} 
button:hover { background: rgb(53, 167, 110); }
button:active {
  background: rgb(33,147,90);
  
}

table {
  max-width: 70%;
  width: 70%;
  border-collapse: collapse;
  text-align: left;
  margin-top: 40px;

}
.t, table{
  position: absolute;
    left: 50%;
    margin-left: -130px;
}
th {
  font-weight: normal;
  color: #039;
  border-bottom: 2px solid #6678b1;
  padding: 10px 8px;
}
td {
  border-bottom: 1px solid #ccc;
  color: #669;
  padding: 9px 8px;
  transition: .3s linear;
}
tr:hover td {color: #6699ff;}
</style>
