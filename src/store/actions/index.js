export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addCarFeature = (featureID) => {
  console.log(featureID);
  return { type: ADD_FEATURE, payload: featureID }
}

export const removeCarFeature = (featureID) => {
  console.log(featureID);
  return { type: REMOVE_FEATURE, payload: featureID}
}