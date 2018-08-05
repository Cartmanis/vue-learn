export default {
    //namespaced - решает за нас проблему с одинаковыми именами в разных модулях
    namespaced: true,
    state: {
        items: [
            {
                url: '/products',
                text: 'Products List'
            },
            {
                url: '/cart',
                text: 'Your Cart'
            },
            {
                url: '/checkout',
                text: 'Order Now'
            }
        ]
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
