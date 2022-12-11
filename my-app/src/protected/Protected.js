import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({isLoggenIn, children}) => {
    if(!isLoggenIn){
        return <Navigate to="/" replace />
    }
  return children;
}

export default Protected