'use client'

import Button from "./Button"

const RegisterButton = () => {
  const onClick = () => {
    alert('clicked sign up');

  }
  return (
    <Button label="Sign Up" onClick={onClick} />
  )
}

export default RegisterButton;