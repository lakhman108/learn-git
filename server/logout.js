// User Authentication System

class UserAuth {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }

    //logout using your userId
    //added check for verified id
    logout(userId) {
         const index = this.users.findIndex(u => u.id === userId);
         console.log(index);
         if(index === null || iindex === undefined) {
            return;
         }
        this.users[i] = null;
        return true;
    }


}

// Export the class
module.exports = UserAuth;