import axios from 'axios';

export const  SUBMIT_FORM = 'SUBMIT_FORM'
export const  LOGIN = 'LOGIN'

export const  REMOVE_USER = 'REMOVE_USER'
export const  FETCH_CARS = 'FETCH_CARS'

export const fetch_cars = () => {
  return dispatch => {
    axios.get(`http://localhost:8000/vehicle`).then(response => {
      dispatch({type: FETCH_CARS, payload: response.data})
    })
  }
}
export const submitForm = (id) => {
  return dispatch => {
    dispatch({type: SUBMIT_FORM, payload: id})
  }
}

export const login = (id) => {
  return dispatch => {
    dispatch({type: LOGIN, payload: id})
  }
}


export const remove_user = (id) => {
  return dispatch => {
    dispatch({type: REMOVE_USER, payload: id})
  }
}

