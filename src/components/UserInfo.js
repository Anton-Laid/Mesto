export default class UserInfo {
    constructor({ name, job, avatar }) {
        this._nameUser = document.querySelector(name);
        this._jobUser = document.querySelector(job);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._nameUser.textContent,
            profession: this._jobUser.textContent,
        }
    }

    setUserInfo(userData) {
        this._nameUser.textContent = userData.name;
        this._jobUser.textContent = userData.about;
    }

    getAvatar(avatar) {
        this._avatar.src = avatar.avatar;
    }
}
