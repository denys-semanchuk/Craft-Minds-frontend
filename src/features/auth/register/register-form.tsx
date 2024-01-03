import React from 'react'
import {Input} from "@/shared/ui/form/input/ui";

import {FaCircleUser} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

import {SubmitBtn} from "@/shared/ui/form/submit-btn";
import {FormProvider, useForm} from "react-hook-form";
import {emailValidator, fNameValidator, lNameValidator, passwordValidator} from "@/shared/utils";

import styles from './styles.module.scss'
import {inject} from "mobx-react";
import {UserStore} from "@/entities/user";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {paths} from "@/shared/routing";

interface RegisterFormProps {
    userStore: UserStore
}

export const RegisterForm = inject('userStore')(({userStore}: RegisterFormProps) => {
    const methods = useForm()
    const router = useRouter()
    const handleSubmit = methods.handleSubmit(async (data) => {
        await userStore.registerUser(data)
        router.replace('/')
    })
    return (
        <FormProvider {...methods}>
            <form className={styles.registerForm} onSubmit={(e) => e.preventDefault()} noValidate>
                <Input {...fNameValidator} icon={<FaCircleUser/>}/>
                <Input {...lNameValidator} icon={<FaCircleUser/>}/>
                <Input {...emailValidator} icon={<MdEmail/>}/>
                <Input {...passwordValidator} icon={<RiLockPasswordFill/>}/>
                <SubmitBtn onClick={handleSubmit}>
                    Register
                </SubmitBtn>
                <p>Already have an account? <Link href={paths.login}>Sign in</Link></p>
            </form>
        </FormProvider>
    )
})
