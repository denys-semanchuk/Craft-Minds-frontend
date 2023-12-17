import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {authenticateUser} from "@/shared/api";
import {jwtDecode} from "jwt-decode";

export class UserStore {
    user = null
    isAuth = false

    constructor() {
        makeAutoObservable(this, {
            user: observable,
            isAuth: observable,
            registerUser: action
        })
    }

    async registerUser(body: {}) {
        const {access_token} = await authenticateUser(body)
        runInAction(() => {
            this.user = jwtDecode(access_token);
            this.isAuth = true
        })
    }
}

export const userStore = new UserStore()