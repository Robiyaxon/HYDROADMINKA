import React, { useEffect } from 'react'
import { contactAPI } from '../../api/contactApi'

export const Contact = () => {
    const dispatch = useDispatch();
    const isLoggedIn = auth.accessToken;

    if(isLoggedIn) {
        return <Navigate to={'/'}/>
    }
    const onSubmit = (data) => {
        const { email, password } = data;
        dispatch(getAuthUser(email, password))
    }
  return (
    <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
  )
}
