import { type } from 'os'
import React from 'react'

type userProps = {
    status : "loading" | "success" | "error";
}
const UserdefinedProps = ({status}:userProps) => {
    if(status == "success"){
        return <h2>Data is loading..</h2>
    }else if(status == "error"){
        return <h2>Error is happing</h2>
    }
  return (
    <div>
        <h4>Data fetched successfully</h4>
    </div>
  )
}

export default UserdefinedProps