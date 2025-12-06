import { useEffect } from "react"
import React from 'react'

const Navbar = (props) => {

    useEffect(() => {
      alert("Color was changed")
    }, [props.color])
    

  return (
    <div>
      I am Navbar of {props.color} hehe....
    </div>
  )
}

export default Navbar