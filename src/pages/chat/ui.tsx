import React, {useEffect} from 'react'
import {Container} from "@/shared/ui/container";
import {isAuth} from "@/shared/utils/isAuth";
import {fetchChats} from "@/entities/conversation/api";
/*
* Get private chats
* Get group chats
* Create Mobx Store with chat's state
* List chats on the left
* Open the chat's room on onclick submit
*
* */
export const ChatPage = isAuth(() => {

    useEffect(() => {
        fetchChats("group").then((data) => console.log(data))
    }, []);
    return (
        <Container>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <div>
                        Tabs
                    </div>
                    <div>
                        Chats List
                    </div>
                </div>
                <div>
                    Chat room
                </div>
            </div>
        </Container>
    )
})
