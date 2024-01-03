import React, {useEffect} from "react";
import {observer, inject} from "mobx-react";
import {UserStore} from "@/entities/user";
import {useRouter} from "next/navigation";

export const AuthProvider = inject('userStore')(observer(({children, userStore}: {
    children: React.ReactNode,
    userStore?: UserStore
}) => {
    useEffect(() => {
        userStore!.authUserByToken()
    }, [])

    if (userStore!.isLoading) return <h1>Loading...</h1>
    return <div>
        {children}
    </div>
}))