'use client'

import Button from "./Button";


const LogInButton = () => {

    const onClick = () => {
        alert("clicked log in")
    }

    return (
        <Button label="Log In" onClick={onClick} />
    )
}

export default LogInButton