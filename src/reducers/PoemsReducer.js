const initState = {
  poems: [],
  loading: true,
}

const poemsReducer = (state = initState, action) => {
  switch(action.type) {
    case "LOADING":
      return{
        ...state,
        loading: true,
      } 
    case "SET_POEMS":
      return{
        ...state,
        loading: false,
        poems: action.poems
      }

    case "ADD_POEM":
      return {
        ...state,
        poems: [...state.poems, action.poem]
      }

    default:
      return state;
  }
}

export default poemsReducer;