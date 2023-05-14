'use client'

import { useForm } from "react-hook-form"
import Button from "@/components/buttons/Button"

export default function RegistrationForm() {
    //first name
    //last name
    //email
    //username
    //password
    //passwordConfirm
    const handleFormSubmit = () => {
        alert('You are completing a form')
    }

    const formAttributes = {
        id: {
            firstName: "register-first-name",
            lastName:  "register-last-name",
            email:     "register-email",
            userName:  "register-username",
            password:  "register-password",
            pwordCon:  "register-password-confirm",
        },
        css: {
            label: "block text-gray-700 text-sm font-bold mb-2",
            input: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            error: "block text-sm font-bold text-error my-2"
        }
    }


    return (
        <form className="bg-secondary max-w-md p-5" onSubmit={handleFormSubmit}>
            <label className={formAttributes.css.label} htmlFor={formAttributes.id.firstName}>First Name</label>
            <input className={formAttributes.css.input} id={formAttributes.id.firstName} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.lastName}>Last Name</label>
            <input className={formAttributes.css.input} id={formAttributes.id.lastName} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.email}>Email</label>
            <input className={formAttributes.css.input} id={formAttributes.id.email} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.userName}>Username</label>
            <input className={formAttributes.css.input} id={formAttributes.id.userName} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.password}>Password</label>
            <input className={formAttributes.css.input} id={formAttributes.id.password} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.pwordCon}>Confirm Password</label>
            <input className={formAttributes.css.input} id={formAttributes.id.pwordCon} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>
            
            <Button label="Register"  type="submit" width="w-full"/>
        </form>
    )
}