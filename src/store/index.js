import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Api = "https://api.github.com/repos/"

export default new Vuex.Store({
	strict: true,
    state: {
        message:  '', 
        pageNum: '1',
        posts: []
    },
    mutations: {
        updateMessage (state, message) {
            state.message = message
        },
        updatePosts(state, posts){
			state.posts = posts
		},
		updatePageNum(state, pageNum){
			state.pageNum = pageNum
		}
    },
	actions: {
		async fetchPosts(ctx,  value, state ){	
			fetch(Api + value + "/forks?page=" + this.state.pageNum).then(resp => {
		        if (!resp.ok) {
		            throw alert('Ошибка! Проверьте правильность ввода.')
		        }
			   	return resp.json();
			}).catch((err) => {console.warn('Ошибка! Проверьте правильность ввода.\nВозможно вы превысили количество запросов')})

			const res = await fetch(Api + value + "/forks?page=" + this.state.pageNum);
		    const posts = await res.json();

		    ctx.commit('updatePosts', posts)
		}
	}
})
