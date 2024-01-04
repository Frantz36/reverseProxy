
export class SessionManager {
    constructor() {
      this.userSessions = new Map();
    }
  
    loginUser(username, userInfo) {
      this.userSessions.set(username, userInfo);
    }
  
    getUserInfo(username) {
      return this.userSessions.get(username);
    }
  }