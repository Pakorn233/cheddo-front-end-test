import { IActivity } from "../../types/activityList"
import { List, ListContainer } from "../style"

interface IActivityList {
  activityList: IActivity[]
}
export const ActivityList = (
  { activityList }: IActivityList
) => {
  return (
    <ListContainer>
      <h2>Todo List</h2>
      <List>
        <ul>
        {
          [...activityList].reverse().map(activity => {
            return <li key={activity.id}>{activity.activity}</li>
          })
        }
        </ul>
      </List>
    </ListContainer>
  )
}