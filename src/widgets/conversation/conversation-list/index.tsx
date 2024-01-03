import React, {useEffect} from 'react'
import {inject, observer} from "mobx-react";
import {ConversationItem, ConversationStore} from "@/entities/conversation";

import styles from './styles.module.scss'
import {FullPageLoader} from "@/shared/ui/full-page-loader";

export const ConversationList = inject('conversationStore')(observer((props: ConversationListProps) => {
    const conversationStore = props.conversationStore!
    if(conversationStore.isLoading) return <div>Loading...</div>
    return (
        <ul>
            {conversationStore.conversations.map((conversation) =>
                <ConversationItem key={conversation.id} {...conversation}/>)}
        </ul>
    )
}))

interface ConversationListProps {
    conversationStore?: ConversationStore
}