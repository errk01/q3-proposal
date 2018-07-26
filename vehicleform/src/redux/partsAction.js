import axios from 'axios';
// export const  CREATE = 'CREATE'
// export const  UPDATE = 'UPDATE'
export const  REMOVE_ITEM = 'REMOVE_ITEM'
export const FETCH_PART = 'FETCH_PART'
export const ADD_ITEM = 'ADD_ITEM'

export const fetch_part = () => {
  return dispatch => {
    axios.get(`http://localhost:8000/part`).then(response => {
      dispatch({type: FETCH_PART, payload: response.data})
    })
  }
}

// export const add_item = (id) => {
//   return dispatch => {
//     axios.post(`http://localhost:8000/part`).then(response => {
//       dispatch({type: ADD_ITEM, payload: response.data})
//     })
//   }
// }

export const add_item = (part) => {
  console.log('parts', part);
  return dispatch => { 
    return axios.post(`http://localhost:8000/part`,part) 
    .then((response) => { 

      dispatch({
        type: ADD_ITEM,
        payload: response.data
      })
    })
  }
}



export const remove_item = (id) => {
  return dispatch => {
    dispatch({type: REMOVE_ITEM, payload: id})
  }
}



