import {protectedHttp} from "@/shared/api";

export const fetchChats = async (type: string) => {
    return (await protectedHttp.get(`/api/chats/my/${type}`)).data
}