import React, {useEffect} from 'react'
import {Container} from "@/shared/ui/container";
import {isAuth} from "@/shared/utils/isAuth";
import {ConversationList} from "@/widgets/conversation/conversation-list";
import {inject, observer} from "mobx-react";
import {ConversationStore} from "@/entities/conversation";
/*
* Get private chats
* Get group chats
* Create Mobx Store with chat's state
* List chats on the left
* Open the chat's room on onclick submit
*
* */
export const ChatPage = inject('conversationStore')(isAuth((props: any) => {
    const conversationStore = props.conversationStore! as ConversationStore
    if (conversationStore._conversations.length === 0) {
        conversationStore.fetchConversations('group')
    }


    return (
        <Container>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <div>
                        Tabs
                    </div>
                    <ConversationList/>
                </div>
                <div>
                    Chat room
                </div>
            </div>
        </Container>
    )
}))