<template>
  <div class="home">
    
    <h1>Добро пожаловать!</h1>
    <h2>Найдите forks по репозиторию</h2>
	<br>
    <input placeholder="owner/repositoryName" v-model='message' />
   
 	<router-link to="/res"><button type="submit" @click="FetchPosts(message, '1')">Поиск</button></router-link>
  </div>
    
</template>

<script>

import { mapGetters, mapActions, mapState } from 'vuex'
import store from '../store'


export default {
  	name: 'Home',
  	store,
	    computed: {
	        message: {
	            get () {
	                return this.$store.state.message
	            },
	            set (value) {
	                this.$store.commit('updateMessage', value)
	            }
	        }
	    },
	    methods: {
	        updateMessage (e) {
	            this.$store.commit('updateMessage', e.target.value)
	        },
		    ...mapActions({
		      FetchPosts: 'fetchPosts'
		    })
	    }
}
</script>
