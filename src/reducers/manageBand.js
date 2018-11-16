export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    const band = {
      id: Math.random()*10000000000000000,
      text: action.name
    }
    return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return {...state, bands:state.bands.filter(band => band.id !== action.payload)}

    default:
      return state;
  }
};
