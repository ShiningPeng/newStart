import { observable, action } from 'mbox';

class Auth {
    @observable isLogin = false; // 没有和页面 绑定

    @action
    login() {
        this.isLogin = true;
    }

    logout() {
        this.isLogin = false;
    }
}

export default new Auth();
