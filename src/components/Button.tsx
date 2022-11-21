import React from 'react'
import clsx from 'clsx'

export type ButtonProps = {
  text: string
  disabled?: boolean
}

const Button = ({ text, disabled = false }: ButtonProps) => {
  return (
    <button
      className="smooth-colors inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-primary px-6 hover:bg-primary-subtle disabled:pointer-events-none disabled:bg-primary/25"
      disabled={disabled}
    >
      <span className="heading-md text-white">{text}</span>
    </button>
  )
}

export default Button
