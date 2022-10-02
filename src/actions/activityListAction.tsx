import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { IActivityList } from "../types/activityList"

export const getActivityList = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'GET_ACTIVITY_LIST',
    })
  }
}
export const addActivityList = (
  activity: string
) => {
  return (dispatch: ThunkDispatch<IActivityList, any, AnyAction>) => {
    dispatch({
      type: 'ADD_ACTIVITY_LIST',
      payload: activity
    })
  }
}
