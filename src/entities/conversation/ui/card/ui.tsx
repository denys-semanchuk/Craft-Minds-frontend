import React from 'react'
import {IConversation} from "@/entities/conversation/types";
import Link from "next/link";
import {paths} from "@/shared/routing";
import Image from "next/image";
import {DefaultUserImg} from "@/shared/ui/default-user-img";

import styles from './styles.module.scss'

export const ConversationItem = ({conversationAvatar, conversationName, id}: IConversation) => {
    return (
        <li className={styles.li}>
            <Link className={styles.link} href={`${paths.chat}/${id}`}>
                {conversationAvatar ? <Image src={conversationAvatar} alt='' width={60} height={60}/> :
                    <DefaultUserImg width={40} height={40}/>}
                <p>{conversationName}</p>
            </Link>
        </li>
    )
}
