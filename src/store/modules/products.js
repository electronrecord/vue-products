export const state = function () {
  return {
    products: [
      {
        id: 1,
        name: 'Perfume 1',
        collectionId: 'perfumes',
        collectionName: 'P1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!',
      },
      {
        id: 2,
        name: 'Perfume 2',
        collectionId: 'perfumes',
        collectionName: 'P1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 3,
        name: 'Perfume 3',
        collectionId: 'perfumes',
        collectionName: 'P2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 4,
        name: 'Perfume 4',
        collectionId: 'perfumes',
        collectionName: 'P2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 5,
        name: 'Candle 1',
        collectionId: 'candles',
        collectionName: 'C1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 6,
        name: 'Candle 2',
        collectionId: 'candles',
        collectionName: 'C1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 7,
        name: 'Candle 3',
        collectionId: 'candles',
        collectionName: 'C2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 8,
        name: 'Candle 4',
        collectionId: 'candles',
        collectionName: 'C2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
      {
        id: 9,
        name: 'Candle 5',
        collectionId: 'candles',
        collectionName: 'C3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium animi consectetur consequatur culpa cupiditate deserunt enim labore, modi, nulla obcaecati perspiciatis quasi quisquam rem tenetur totam ut vel veritatis!'
      },
    ],
    collections: {
      perfumes: ['P1', 'P2'],
      candles: ['C1', 'C2', 'C3']
    }
  }
}

export const getters = {
  collections: state => {
    const data = state.products.reduce((acc, product) => {
      if (!acc[product.collectionId]) {
        acc[product.collectionId] = []
      }
      if (!acc[product.collectionId].includes(product.collectionName)) {
        acc[product.collectionId].push(product.collectionName)
      }
      return acc
    }, {})
    return data
  }
}
