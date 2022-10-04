import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionUserCreators from '../../actions/userCreators'

const UsersList = () => {
  const { users, isFetcing, error } = useSelector(({ users }) => users)
  const { getUsersRequest } = bindActionCreators(
    ActionUserCreators,
    useDispatch()
  )
  useEffect(() => {
    getUsersRequest({ limit: 5, offset: 0 })
  }, [])
  return (
    <section>
      {users.map(u => (
        <article key={u.id}>
          <h3>{u.login}</h3>
          {u.avatar && (
            <img
              alt={u.login}
              src={`http://localhost:5000/images/${u.avatar}`}
            />
          )}
        </article>
      ))}
    </section>
  )
}

export default UsersList
