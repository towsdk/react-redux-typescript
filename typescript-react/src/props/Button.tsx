import React from 'react'

type btnProps = {
    btnStyle : React.CSSProperties;
}
const Button = (props: btnProps) => {
  return (
    <div style={props.btnStyle}>Good Day Man</div>
  )
}

export default Button