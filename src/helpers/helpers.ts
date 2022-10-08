import { CompletedUser, GrouppedUsers, UserItem } from '@/types'

// функция группировки и последующей сортировки массива пользователей 
export const groupBy = ( users: Array<UserItem> ): Array<CompletedUser> => {
  const grouppedUsers: GrouppedUsers = users.reduce( ( acc: GrouppedUsers, value ) => {
    if ( !acc[value.userId]) {
      acc[value.userId] = []
    }
    acc[value.userId].push( value )
  
    return acc
  }, {})
  return Object.values( grouppedUsers ).map( ( userData: Array<UserItem> ) => {
    return {
      info: userData,
      completedCount: userData.filter( ( el: UserItem ) => el.completed ).length
    }
  }).sort( ( a, b ) => {
    if ( b.completedCount === a.completedCount ) {
      return a.info[0].userId > b.info[0].userId ? 1 : -1
    }
    return b.completedCount - a.completedCount
  })
}