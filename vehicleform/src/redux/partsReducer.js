import {ADD_ITEM,FETCH_PART,REMOVE_ITEM} from './partsAction';

const initialState = []


export default(state = initialState, partsAction)=>{
  switch (partsAction.type) {
    case FETCH_PART:
      return [...partsAction.payload]
    
    case ADD_ITEM:
      return [...partsAction.payload]
    
    case REMOVE_ITEM:
    let allPartsIn = state.filter(part => part.id !== partsAction.payload)
    let removeParts = state.filter(part => part.id === partsAction.payload)[0]
    let updatedPartsCart = {
      ...removeParts,
      inCart: false
    }
    return [...allPartsIn, updatedPartsCart].sort((a,b)=>a.id> b.id)
    
    default:
      return state
  }
}