//retrieve all haikus/poems from DB to pass in to state in order to display them from poems component.
export const getPoems = () => {
  return dispatch => {
    dispatch({type: "LOADING"})
    fetch('http://localhost:3001/poems')
    .then(resp => resp.json())
    .then(poems => {dispatch({ type: "SET_POEMS", poems })})
  }
};

// add a poem to database and use history from react-router-dom to redirect to index haikus page that displays all the haikus.
export const addPoem = (poem, history) => {
  return dispatch => {
    fetch('http://localhost:3001/poems', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ poem })
    })
      .then(resp => resp.json())
      .then(poem => {
        dispatch({type: "ADD_POEM", poem })
        history.push("/haikus")
      })
  }
}



