export default {
    state: {
        userInfo: {},
        headerState: null,
        isLogin: window.sessionStorage.getItem('isLogin') === 'true',
        signShow: false,
        loading: false
    },
    getters: {},
    actions: {
        login ({ commit }: any) {
            commit('LOGIN')
        },
        logout ({ commit }: any) {
            commit('LOGOUT')
        },
        signIn ({ commit }: any) {
            commit('SIGNIN')
        },
        signOut ({ commit }: any) {
            commit('SIGNOUT')
        },
        showLoading ({ commit }: any) {
            commit('loadingShow')
        },
        hideLoading ({ commit }: any) {
            commit('loadingHide')
        }
    },
    mutations: {
        LOGIN (state: any) {
            window.sessionStorage.setItem('isLogin', 'true')
            state.isLogin = true
        },
        LOGOUT (state: any) {
            window.sessionStorage.clear()
            state.isLogin = false
        },
        SIGNIN (state: any) {
            state.signShow = true
        },
        SIGNOUT (state: any) {
            state.signShow = false
        },
        loadingShow (state: any) {
            state.loading = true
        },
        loadingHide (state: any) {
            state.loading = false
        }
    }
}
