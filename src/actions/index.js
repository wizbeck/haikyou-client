export const getPoems = () => {
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch('http://localhost:3001/poems')
    .then(resp => resp.json())
    .then(poems => {dispatch({ type: "SET_POEMS", poems })})
  }
};

