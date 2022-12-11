import React from 'react'
import PropTypes from "prop-types";

const User = (props) => {
  console.log(props.userName);
  return (
    <div>
        Welcome
    </div>
  )
};

User.protoTypes = {
   userName: PropTypes.object.isRequired,
};

// User.defaultProps = {
//   userName: "defalut name",
//   userId: 34,
// }

export default User