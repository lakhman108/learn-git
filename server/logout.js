// User Authentication System

class UserAuth {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }

    //logout using your userId
    logout(userId) {
         const i = this.users.findIndex(u => u.id === userId);
         if(i === null || i === undefined) {
            return;
         }
        this.users[i] = null;
        return true;
    }


}

// Export the class
module.exports = UserAuth;