'use client'

import { useForm } from "react-hook-form"
import Button from "@/components/buttons/Button"
import TextToggleButton from "@/components/buttons/TextToggleButton";
import { useState } from "react";

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
        handleSubmit,
        watch,
    } = useForm<FormData>();

    const [showPassword, setShowPassword] = useState(false);
    const [showPassConfirm, setShowPassConfirm] = useState(false);

    const showPasswordHandleClick = () => setShowPassword(!showPassword);
    const showPassConfirmHandleClick = () => setShowPassConfirm(!showPassConfirm)
   
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
            error: "block text-sm font-bold text-error my-2 h-5",
            passwordContainer: "flex items-center relative",
            showHideBtn: "absolute right-0 pr-2.5"
        },
        regex: {
            nameValidation: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
            passwordValidation: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!#%&^?])[a-zA-Z0-9!#%&^?]+$/,
            emailValidation: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        }
    }

    return (
        <form className="bg-secondary max-w-md p-5" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
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
            <p className={`${formAttributes.css.error} ${errors.firstName ? "visible" : "invisible"}`}>{errors.firstName && errors.firstName.message}</p>
            
            <label className={formAttributes.css.label} htmlFor={formAttributes.id.lastName}>Last Name</label>
            <input 
              className={formAttributes.css.input} 
              id={formAttributes.id.lastName} 
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: {
                    value: true,
                    message: "A last name is required"
                },
                pattern: {
                    value: formAttributes.regex.nameValidation,
                    message: "Your last name must only contain letters"
                }
              })} 
            />
            <p className={`${formAttributes.css.error} ${errors.lastName ? "visible" : "invisible"}`}>{errors.lastName && errors.lastName.message}</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.email}>Email</label>
            <input 
              className={formAttributes.css.input}
              id={formAttributes.id.email}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: {
                    value: true,
                    message: "Please enter a valid email address"
                },
                pattern: {
                    value: formAttributes.regex.emailValidation,
                    message: "Please ensure you are entering a valid email address"
                }
            }
              )}
             />
            <p className={`${formAttributes.css.error} ${errors.email ? "visible" : "invisible"}`}>{errors.email && errors.email.message}</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.password}>Password</label>
            <div className={formAttributes.css.passwordContainer}>
                <input 
                    className={formAttributes.css.input} 
                    id={formAttributes.id.password} 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Please enter a password"
                        },
                        pattern: {
                            value: formAttributes.regex.passwordValidation,
                            message: "Please enter a valid password"
                        },
                        minLength: {
                            value: 10,
                            message: "Password must be at least 10 characters"
                        }
                    })}
                />
                <TextToggleButton callback={showPasswordHandleClick} className={formAttributes.css.showHideBtn} /> 
            </div>
            <p className={`${formAttributes.css.error} ${errors.password ? "visible" : "invisible"}`}>{errors?.password && errors.password.message}</p>

            <label className={formAttributes.css.label} htmlFor={formAttributes.id.pwordCon}>Confirm Password</label>
            <div className={formAttributes.css.passwordContainer}>
                <input 
                    className={formAttributes.css.input} 
                    id={formAttributes.id.pwordCon} 
                    type={showPassConfirm ? "text" : "password"}
                    placeholder="Confirm password"
                    {...register("pwordCon", {
                        required: {
                            value: true,
                            message: "Please confirm your password"
                        },
                        validate: (pword: string) => {
                            if (watch("password") !== pword) {
                                return "Your passwords must match"
                            }
                        }
                    })}
                />
                <TextToggleButton callback={showPassConfirmHandleClick} className={formAttributes.css.showHideBtn} /> 
            </div>
            <p className={`${formAttributes.css.error} ${errors.pwordCon ? "visible" : "invisible"}`}>{errors.pwordCon && errors.pwordCon.message}</p>
            
            <Button label="Register"  type="submit" width="w-full"/>
        </form>
    )
}