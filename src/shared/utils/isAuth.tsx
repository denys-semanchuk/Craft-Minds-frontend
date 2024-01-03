import {inject} from "mobx-react";
import {useEffect} from "react";
import {useRouter} from 'next/navigation'
import {ReactComponentLike} from "prop-types";

export const isAuth = (Component: ReactComponentLike) => {
    return inject("userStore")(function IsAuth(props: any) {
        const userStore = props.userStore!
        const router = useRouter()

        useEffect(() => {
            if (!userStore.isAuth && userStore.isAuthFinished) {
                router.push('/')
            }
        }, []);

        if (!userStore.isAuth) return null
        return <Component {...props}/>
    })
}