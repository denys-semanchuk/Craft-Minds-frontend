import React, {forwardRef, ReactElement} from 'react'
import styles from './styles.module.scss'
import cn from "classnames";
import {FieldValues, RegisterOptions, useFormContext} from "react-hook-form";
import {findInputError, isFormValid} from "../libs";
import {AnimatePresence} from "framer-motion";
import {InputError} from "./input-error";

interface InputProps {
    icon: ReactElement<any, any>,
    type?: string;
    placeholder: string;
    fullWidth?: boolean,
    name: string;
    validation: RegisterOptions<FieldValues, string> | undefined

    [key: string]: any
}


export const Input = forwardRef<HTMLInputElement, InputProps>(({
                                                                   icon,
                                                                   fullWidth,
                                                                   type = "text",
                                                                   placeholder,
                                                                   name,
                                                                   validation
                                                               }: InputProps, ref) => {
    const {register, formState: {errors}} = useFormContext()

    const inputError = findInputError(errors, name)
    const isInvalid = isFormValid(inputError)
    console.log(inputError)
    return (
        <label className={cn(styles.label, {fullWidth})}>
            <div className={styles.icon}>{icon}</div>
            <input type={type} className={cn(styles.input)} placeholder={placeholder} {...register(name, validation)}/>
            <AnimatePresence mode='wait' initial={false}>
                {
                    isInvalid && inputError.error &&
                    <InputError message={inputError.error.message} key={inputError.error.message}/>
                }
            </AnimatePresence>
        </label>
    )
})

Input.displayName = 'Input'
