import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const Privateroutes = ({children,...rest}) => {
    let auth = {'token':true}
  return (
      auth.token ? <Outlet {...rest} /> : <Navigate to='/login'/>
    )
  }

  export default Privateroutes