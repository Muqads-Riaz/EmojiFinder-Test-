import React from 'react'

export default function Input(props) {
    let{className , onChange , placeholder} = props
  return (
    <input className={className}  onChange={onChange}  placeholder={placeholder}/>
  )
}
