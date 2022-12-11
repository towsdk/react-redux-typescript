import React from 'react'

const ParentToChild = (props) => {
    const [title]= props.parentToChild;
  return (
    <div>
        <h3>
        {props.parentToChild}
        </h3>
        {/* <h3>{title}</h3> */}
        </div>
  )
}

export default ParentToChild;