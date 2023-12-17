import {ReactNode} from "react";
import {Provider} from 'mobx-react'
import {userStore} from "@/entities/user";

export const WithProviders = ({children}: { children: ReactNode }) => {

    return <Provider userStore={userStore}>{children}</Provider>
}