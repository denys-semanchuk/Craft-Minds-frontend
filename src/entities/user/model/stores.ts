import {action, computed, makeAutoObservable, observable, runInAction} from "mobx";
import {authenticateUser, http} from "@/shared/api";
import {jwtDecode} from "jwt-decode";
import {User} from "@/entities/user/types";
import {AxiosError} from "axios";

export class UserStore {
    user: User | null = null
    isAuth = false
    isLoading = false
    isError = {show: false, message: ""};
    isAuthFinished = false

    constructor() {
        makeAutoObservable(this, {
            user: observable,
            isAuth: observable,
            isError: observable,
            isLoading: observable,
            isAuthFinished: observable,
            registerUser: action,
            setIsAuthFinished: action,
            name: computed,
        })
    }

    get name() {
        return `${this.user?.firstName} ${this.user?.lastName}`
    }

    setIsAuthFinished() {
        this.isAuthFinished = true
    }

    async registerUser(body: {}) {
        try {
            const {access_token} = await authenticateUser(body);
            this.handleAuthenticationSuccess(access_token);
        } catch (e) {
            this.handleAuthenticationError(e);
        }
    }


    async loginUser(body: {}) {
        try {
            const {access_token} = await authenticateUser(body, 'login');
            this.handleAuthenticationSuccess(access_token);
        } catch (e) {
            this.handleAuthenticationError(e);
        }
    }

    private handleAuthenticationSuccess(access_token: string) {
        sessionStorage.setItem('access_token', access_token);
        const user = jwtDecode(access_token) as User;
        runInAction(() => {
            this.user = user;
            this.isAuth = true;
            this.isError = {show: false, message: ""};
        });
    }


    private handleAuthenticationError(error: any) {
        if (error instanceof AxiosError) {
            runInAction(() => {
                this.isError = {
                    show: true,
                    message: error.message || "An error occurred",
                };
            });
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
            })
        } catch (e) {
            this.isLoading = false
        } finally {
            runInAction(() => {
                this.isAuthFinished = true
                this.isLoading = false
            })
        }
    }

}

export const userStore = new UserStore()