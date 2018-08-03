export default {
     //namespaced - решает за нас проблему с одинаковыми именами в разных модулях
     namespaced: true,
    state: {
        items: [1,2,3]
    },
    getters: {
        items(state) {
            return state.items;
        }
    },
    mutations: {

    },
    actions: {
        
    }
}