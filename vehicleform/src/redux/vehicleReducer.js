
import {SUBMIT_FORM, LOGIN,UPDATE,REMOVE_USER,FETCH_CARS} from './action';

const initialState = {}

export default(state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return [...action.payload]

    case SUBMIT_FORM:
    // let all = state.filter(vehicle = vehicle.id !==action.payload)
    // let allCars = state.filter(vehicle = vehicle.id ===action.payload)[0]
    // let updated={
    //   ...allCars,
    //   inQue:true
    // }
    //   return [...all, updated].sort((a,b)=>a.id>b.id)
        return [...action.payload]
    case LOGIN:
      return [...action.payload]


  
      return [...action.payload]
    case REMOVE_USER:
    // let allItems = state.filter(vehicle = vehicle.id !==action.payload)
    // let ItemsSelected = state.filter(vehicle = vehicle.id ===action.payload)[0]
    // let updatedItems={
    //   ...allCars,
    //   inQue:false
    // }
    //   return [...allItems, updatedItems].sort((a,b)=>a.id>b.id)
return [...action.payload]
    default:
      return state

  }
};