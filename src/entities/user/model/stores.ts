import {action, computed, makeAutoObservable, observable, runInAction} from "mobx";
import {authenticateUser, http} from "@/shared/api";
import {jwtDecode} from "jwt-decode";
import {User} from "@/entities/user/types";
import {AxiosError} from "axios";

export class UserStore {
    user: User | null = null
    isAuth = false
    isLoading = false
    isError = {}

    constructor() {
        makeAutoObservable(this, {
            user: observable,
            isAuth: observable,
            isError: observable,
            isLoading: observable,
            registerUser: action,
            name: computed
        })
    }

    get name() {
        return `${this.user?.firstName} ${this.user?.lastName}`
    }

    async registerUser(body: {}) {
        try {
            const {access_token} = await authenticateUser(body)
            sessionStorage.setItem('access_token', access_token)
            runInAction(() => {
                this.user = jwtDecode(access_token);
                this.isAuth = true
                this.isError = {}
            })
        } catch (e) {
            if (e instanceof AxiosError) {
                this.isError = {
                    show: true,
                    message: e.message
                }
            }
        }
    }

    async loginUser(body: {}) {
        try {

            const {access_token} = await authenticateUser(body, 'login')
            sessionStorage.setItem('access_token', access_token)
            runInAction(() => {
                this.user = jwtDecode(access_token);
                this.isAuth = true
                this.isError = {}
            })
        } catch (e) {
            if (e instanceof AxiosError) {
                this.isError = {
                    show: true,
                    message: e.message
                }
            }
        }
    }

    async authUserByToken() {
        this.isLoading = true
        try {
            const {data} = await http.get("/auth/check", {
                withCredentials: true
            })
            sessionStorage.setItem('access_token', data.access_token)
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