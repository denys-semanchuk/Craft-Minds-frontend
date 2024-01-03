import React from 'react'
import {Logo} from "./logo";
import {Container} from "@/shared/ui/container";
import {UserProfile} from "./user-profile";
import styles from './styles.module.scss'
import {ChatButton} from "./chat-button";
import {inject, observer} from "mobx-react";
import {UserStore} from "@/entities/user";
import Link from "next/link";
import {paths} from "@/shared/routing";
import {FaCircleUser} from "react-icons/fa6";

export const Header = inject('userStore')(observer((props: { userStore?: UserStore }) => {
    const userStore = props.userStore!
    return (
        <header>
            <Container>
                <div className={styles.inner}>
                    <Logo/>
                    {!userStore.isAuth && <div>
                        <Link href={paths.login}>Sign in</Link>
                    </div>}
                    {userStore.isAuth && <UserProfile name={userStore.name}/>}
                    {userStore.isAuth && <ChatButton/>}
                </div>
            </Container>
        </header>
    )
}))
