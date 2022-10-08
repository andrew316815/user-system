import { CompletedUser, GrouppedUser, UserItem } from '@/types'
import { isTemplateNode } from '@vue/compiler-core'

export const groupBy = ( arr: Array<UserItem> ): Array<CompletedUser> => {
  const grouppedUsers: GrouppedUser = arr.reduce( ( acc: GrouppedUser, value ) => {
    if ( !acc[value.userId]) {
      acc[value.userId] = []
    }
    acc[value.userId].push( value )
  
    return acc
  }, {})
  console.log( 'OBJECTS', grouppedUsers )
  console.log( 'ARRAYS', Object.values( grouppedUsers ) )
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