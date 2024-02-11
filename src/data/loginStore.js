import { action, makeObservable, observable } from "mobx";

class LoginStore {

    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            SetIsLogin: action
        })
    }


    SetIsLogin(data) {
        this.isLogin = data;
    }


}

export default new LoginStore()