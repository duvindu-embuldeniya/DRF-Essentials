import React from 'react'

const ButtonComponent = (props) => {
  return (
    <>
            <a className={`btn ${props.class}`} href="">{props.text}</a>
    </>
  )
}

export default ButtonComponent