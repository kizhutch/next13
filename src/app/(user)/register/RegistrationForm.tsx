'use client'

import { useForm } from "react-hook-form"
import Button from "@/components/buttons/Button"

type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    pwordCon: string,
}

export default function RegistrationForm() {

    const {
        register, 
        formState: {errors}, 
        handleSubmit
    } = useForm<FormData>();
   
    const handleFormSubmit = (e) => {
        e.prevent.default();
        alert('You are completing a form')
    }

    const formAttributes = {
        id: {
            firstName: "register-first-name",
            lastName:  "register-last-name",
            email:     "register-email",
            password:  "register-password",
            pwordCon:  "register-password-confirm",
        },
        css: {
            label: "block text-gray-700 text-sm font-bold mb-2",
            input: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
            error: "block text-sm font-bold text-error my-2"
        },
        regex: {
            nameValidation: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
            passwordValidation: /^[a-zA-Z0-9!#%&^?]+$/,
            emailValidation: ""
        }
    }


    return (
        <form className="bg-secondary max-w-md p-5" onSubmit={handleSubmit(handleFormSubmit)}>
            <label className={formAttributes.css.label} htmlFor={formAttributes.id.firstName}>First Name</label>
            <input 
                className={formAttributes.css.input} 
                id={formAttributes.id.firstName} 
                type="text" 
                placeholder="First Name" 
                {...register("firstName", {
                    required: {
                        value: true,
                        message: "A first name is required"
                    },
                    pattern: {
                        value: formAttributes.regex.nameValidation,
                        message: "Your first name must only contain letters"
                    }
                })} 
            />
            {errors.firstName && <p className={formAttributes.css.error}>{errors.firstName.message}</p>}
            
            <label className={formAttributes.css.label} htmlFor={formAttributes.id.lastName}>Last Name</label>
            <input className={formAttributes.css.input} id={formAttributes.id.lastName} type="text" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.email}>Email</label>
            <input className={formAttributes.css.input} id={formAttributes.id.email} type="email" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.password}>Password</label>
            <input className={formAttributes.css.input} id={formAttributes.id.password} type="password" />
            <p className={formAttributes.css.error}>Silly sample error</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.pwordCon}>Confirm Password</label>
            <input className={formAttributes.css.input} id={formAttributes.id.pwordCon} type="password" />
            <p className={formAttributes.css.error}>Silly sample error</p>
            
            <Button label="Register"  type="submit" width="w-full"/>
        </form>
    )
}