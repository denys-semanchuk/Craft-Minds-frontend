import {inject} from "mobx-react";
import {UserStore} from "@/entities/user";
import {useEffect} from "react";
import {useRouter} from 'next/navigation'

export const isAuth = (Component: any) => {
    return inject("userStore")(function IsAuth(props: any) {
        const userStore = props.userStore! as UserStore
        const isAuthenticated = userStore.isAuth
        const router = useRouter()

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/')
            }
        }, []);

        if (!isAuthenticated) return null
        return <Component {...props}/>
    })
}