// User Authentication System

class UserAuth {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }

    //logout using your userId
    logout(userId) {
         const index = this.users.findIndex(u => u.id === userId);
        this.users[index] = null;
        return true;
    }


}

// Export the class
module.exports = UserAuth;