const initState = {
  poems: [],
  loading: true,
  text:''
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

      // case "SEARCH_POEMS_BY_AUTHOR":
      //   const poemsByAuthor = [...state.poems].filter(poem => poem.author.includes(action.text))
      //   return {
      //     ...state,
      //   }

    default:
      return state;
  }
}

export default poemsReducer;