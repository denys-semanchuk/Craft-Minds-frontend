import {ReactNode} from "react";
import {Provider} from 'mobx-react'
import {userStore} from "@/entities/user";
import {AuthProvider} from "@/app/withProviders/auth-povider";
import {AppProps, AppType} from "next/app";

// eslint-disable-next-line react/display-name
export const withProviders = (Component: AppType) => (props: AppProps) => {
    return <Provider userStore={userStore}>
        <AuthProvider>
            <Component {...props}/>
        </AuthProvider>
    </Provider>
}

