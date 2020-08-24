<template>
  <div class="res">
    <h1>Результаты поиска:</h1>
   	<br>
    <input v-model='message' />
    <button type="submit" placeholder="owner/repositoryName" @click="FetchPosts(message, '1')">Поиск</button>
    <PostForm></PostForm>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import PostForm from '@/components/PostForm.vue'
import store from '../store'

export default {
  	name: 'Search',
  	store,
	components: { PostForm },
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