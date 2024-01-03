import {IConversation} from "@/entities/conversation/types";
import {action, computed, makeAutoObservable, observable} from "mobx";
import {fetchChats} from "@/entities/conversation/api";

export class ConversationStore {
    _conversations: IConversation[] = []
    isLoading: boolean = false

    constructor() {
        makeAutoObservable(this, {
            _conversations: observable,
            isLoading: observable,
            addConversations: action,
        })
    }

    addConversations(conversations: IConversation[]) {
        const newConversations = [...this._conversations, ...conversations]
        this._conversations = newConversations
    }

    async fetchConversations(type: string) {
        this.isLoading = true
        try {
            const conversations = await fetchChats(type)
            this.addConversations(conversations)
        } catch (e) {
            console.log(e)
        } finally {
            this.isLoading = false

        }
    }

    get conversations() {
        return this._conversations
    }
}

export const conversationStore = new ConversationStore()