<template>
	<div>
	    <div>
			<button class="Button" @click="pageNum--,FetchPosts(message)">Предыдущая</button>
			{{pageNum}}
		  	<button class="Button" @click="pageNum++,FetchPosts(message)">Следующая</button>
		</div>


		<div class="t"><tr><th>Full name</th><th>Owner</th><th>Stars</th></tr></div>

		<table>
		    <div class="post" v-for="post in AllPosts" :key="post.id">
		    	<tr><td><Searcher :url="post.html_url" :name="post.full_name"></Searcher></td>
		    	<td>{{post.owner.login}}</td><td>{{post.stargazers_count}}</td></tr>
			   
		    </div>
	    </table>
	</div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import Searcher from './URL_finder'
import store from '../store'

export default {
  	components: { Searcher},
  	store,
	computed: {
	    AllPosts:{
	   		get () {
	            return this.$store.state.posts
	        },
	        set (value) {
	            this.$store.commit('updatePosts', value)
	        }
	    },
	    pageNum: {
	    	get () {
	            return this.$store.state.pageNum
	        },
	        set (value) {
	            this.$store.commit('updatePageNum', value)
	        }
	    },
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
	    updatePageNum (e) {
	        this.$store.commit('updatePageNum', e.target.value)
	    },
	    updatePosts (e) {
	        this.$store.commit('updatePosts', e.target.value)
	    },
		...mapActions({
		    FetchPosts: 'fetchPosts'
		})
	}
}
</script>

