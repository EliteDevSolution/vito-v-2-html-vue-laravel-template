import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  cart: [],
  wishlist: [],
  selectedProduct: {
    name: 'Amazon - Echo Dot',
    description: 'Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone or tablet.',
    brand: 'Amazon',
    categories: ['Smart Home'],
    hierarchicalCategories: { lvl0: 'Smart Home' },
    type: 'Voice assistants',
    price: 49.99,
    price_range: '1 - 50',
    image: 'https://cdn-demo.algolia.com/bestbuy-0118/5578851_sb.jpg',
    url: 'https://api.bestbuy.com/click/-/5578851/pdp',
    free_shipping: true,
    rating: 4,
    popularity: 21466,
    objectID: '5578851',
    _highlightResult: {
      name: { value: 'Amazon - Echo Dot', matchLevel: 'none', matchedWords: [] },
      description: { value: 'Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone or tablet.', matchLevel: 'none', matchedWords: [] },
      brand: { value: 'Amazon', matchLevel: 'none', matchedWords: [] },
      categories: [{ value: 'Smart Home', matchLevel: 'none', matchedWords: [] }],
      type: { value: 'Voice assistants', matchLevel: 'none', matchedWords: [] }
    },
    __position: 4
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
