import {ReactNode} from "react";
import {Provider} from 'mobx-react'
import {userStore} from "@/entities/user";
import {AuthProvider} from "@/app/providers/auth-povider";
import {AppProps, AppType} from "next/app";
import {conversationStore} from "@/entities/conversation";

// eslint-disable-next-line react/display-name
export const withProviders = (Component: AppType) => (props: AppProps) => {
    return <Provider userStore={userStore} conversationStore={conversationStore}>
        <AuthProvider>
            <Component {...props}/>
        </AuthProvider>
    </Provider>
}

