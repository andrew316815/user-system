export interface UserItem {
  completed: boolean
  id: number
  title: string
  userId: number
}

export type GrouppedUsers = {
  [key:number]: Array<UserItem> 
}

export interface CompletedUser {
  completedCount: number
  info: Array<UserItem>
}