const program = {
    data() {
        return {
            products: [
                {
                    'id': 1,
                    'name': 'aple',
                    'price': 100
                },
                {
                    'id': 2,
                    'name': 'avocado',
                    'price': 200
                },
                {
                    'id': 3,
                    'name': 'potato',
                    'price': 50
                },
                {
                    'id': 4,
                    'name': 'tomato',
                    'price': 150
                }
            ],
            sortType: ''
        }
    },

    computed: {
        sortedList() {
            switch (this.sortType) {
                case 'ascendingSort': return this.products.sort(ascSort);
                case 'descendingSort': return this.products.sort(descSort);
                default: return this.products;
            }
        }
    }
}
Vue.createApp(program).mount('#app');

const ascSort = (d1, d2) => (d1.price > d2.price) ? 1 : -1;
const descSort = (d1, d2) => (d1.price > d2.price) ? -1 : 1;
