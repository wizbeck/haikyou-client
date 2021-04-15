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
        poems: [action.poem, ...state.poems]
      }

    case "LIKE_POEM":
      console.log('adding like to poem');
      const i = state.poems.findIndex(poem => poem.id === action.id) //find index of poem to add like to
      const poem = state.poems[i] //set poem = to poem from state at certain index
      //return state updated with poem that now has + 1 like
      return {
        ...state,
        poems: [
          ...state.poems.slice(0, i), //poems before the updated poem
          {...poem, likes: poem.likes += 1},
          ...state.poems.slice(i + 1),//poems after the updated poem
        ]
      }
      
      

    default:
      return state;
  }
}

export default poemsReducer;