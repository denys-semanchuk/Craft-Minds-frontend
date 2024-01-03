import React from 'react'
import {Input} from "@/shared/ui/form/input";
import {FormProvider, useForm} from 'react-hook-form'
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";

import styles from './styles.module.scss'
import {SubmitBtn} from "@/shared/ui/form/submit-btn";
import {emailValidator, passwordValidator} from "@/shared/utils";
import {userStore} from "@/entities/user";
import Link from "next/link";
import {useRouter} from "next/navigation";

export const LoginForm = () => {
    const methods = useForm()
    const router = useRouter()
    const onSubmit = methods.handleSubmit(data => {
        userStore.loginUser(data)
        router.push('/')
    })

    return (
        <FormProvider {...methods}>
            <form noValidate onSubmit={(e) => e.preventDefault()} className={styles.registerForm}>
                <Input {...emailValidator} icon={<MdEmail/>}/>
                <Input {...passwordValidator} icon={<RiLockPasswordFill/>} type="password" placeholder="Password"
                       name="password"/>
                <SubmitBtn onClick={onSubmit}>
                    Login
                </SubmitBtn>
                <p>Don&apos;t have an account yet? <Link href='/register'>Create an account</Link></p>
            </form>
        </FormProvider>
    )
}
