import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
    },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      // const selectedItem = state.store.filter(val => {
      //   return val.id === action.payload})
      const updatedPriceAdd = state.additionalPrice+action.payload.price
      console.log('Action, Add Feature : ', action.payload)
      return {
        ...state,
        additionalPrice: updatedPriceAdd,
        car: {...state.car, features: [...state.car.features, action.payload]}
      }
    case REMOVE_FEATURE:
      const filteredFeatures = state.car.features.filter(val => {
        return val.id !== action.payload.id
      })
      const updatedPriceRemove = state.additionalPrice-action.payload.price
      console.log(filteredFeatures)
      return {
        ...state,
        car: {...state.car, features: filteredFeatures},
        additionalPrice: updatedPriceRemove
      }
    default:
      return state;
  }
}