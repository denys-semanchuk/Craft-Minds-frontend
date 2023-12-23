import React from 'react'
import {Logo} from "./logo";
import {Container} from "@/shared/ui/container";
import {ProfileThumbnail} from "./profile";
import styles from './styles.module.scss'
import {ChatButton} from "./chat-button";
import {inject, observer} from "mobx-react";
import {UserStore} from "@/entities/user";
import Link from "next/link";
import {paths} from "@/shared/routing";

export const Header = inject('userStore')(observer((props: { userStore?: UserStore }) => {
    const userStore = props.userStore!
    return (
        <header>
            <Container>
                <div className={styles.inner}>
                    <Logo/>
                    {!userStore.isAuth && <div>
                        <Link href={paths.register} style={{paddingRight: 15}}>register</Link>
                        <Link href={paths.login}>login</Link>
                    </div>}
                    {userStore.isAuth && <ProfileThumbnail name={userStore.name}/>}
                    {userStore.isAuth && <ChatButton/>}
                </div>
            </Container>
        </header>
    )
}))
