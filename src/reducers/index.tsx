import { combineReducers } from "redux"
import { IActivity, IActivityList } from "../types/activityList"

const INITAL_STATE: IActivity[]  = []
export const activityListReducer = (state: IActivity[]=INITAL_STATE, action: any) => {
  switch(action.type) {
    case 'GET_ACTIVITY_LIST':
      return [ ...state ]
    case 'ADD_ACTIVITY_LIST':
      console.log(state)
      return [
          ...state,
          { 
            id: state.length ? state[state.length - 1].id + 1 : 0,
            activity: action.payload
          }
        ]
      
    default : return state;
  }
}

export const reducers = combineReducers({
  activityList : activityListReducer
})