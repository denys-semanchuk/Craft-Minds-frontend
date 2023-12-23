import {action, computed, makeAutoObservable, observable, runInAction} from "mobx";
import {authenticateUser, http} from "@/shared/api";
import {jwtDecode} from "jwt-decode";
import {User} from "@/entities/user/types";

export class UserStore {
    user: User | null = null
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this, {
            user: observable,
            isAuth: observable,
            isLoading: observable,
            registerUser: action,
            name: computed
        })
    }

    get name() {
        return `${this.user?.firstName} ${this.user?.lastName}`
    }

    async registerUser(body: {}) {
        const {access_token} = await authenticateUser(body)
        runInAction(() => {
            this.user = jwtDecode(access_token);
            this.isAuth = true
        })
    }

    async authUserByToken() {
        this.isLoading = true
        try {
            const {data} = await http.get("/auth/check", {
                withCredentials: true
            })
            const user = jwtDecode(data.access_token) as User
            runInAction(() => {
                this.user = user;
                this.isAuth = true;
                this.isLoading = false
            })
        } catch (e) {
            this.isLoading = false
        }
    }

}

export const userStore = new UserStore()