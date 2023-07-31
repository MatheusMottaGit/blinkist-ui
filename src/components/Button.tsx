import React, { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'>

const Button = (props: ButtonProps) => {
  return <button {...props} />
}

export default Button