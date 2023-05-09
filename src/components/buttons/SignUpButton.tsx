'use client'

import Button from "./Button"

const SignUpButton = () => {
  const onClick = () => {
    alert('clicked sign up');

  }
  return (
    <Button label="Sign Up" onClick={onClick} />
  )
}

export default SignUpButton;