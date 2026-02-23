// User Authentication System

class UserAuth {
    constructor() {
        this.users = [];
        this.currentUser = null;
    }


    // Register a new user with username email and password
    registerUser(username, email, password) {
        const user = {
            id: this.users.length + 1,
            username: username,
            email: email,
            password: password,
            createdAt: new Date(),
            isActive: true
        };
        this.users.push(user);
        return user;
    }

    // Login user using username and plain password
    loginUser(username, password) {
        const user = this.users.find(u => u.username === username);
        if (user && user.password === password) {
            this.currentUser = user;
            return true;
        }
        return false;
    }

    // Get user profile using your userId
    getUserProfile(userId) {
        return this.users.find(u => u.id === userId);
    }

    // Update user email
    updateEmail(userId, newEmail) {
        const user = this.users.find(u => u.id === userId);
        if (user) {
            user.email = newEmail;
            return true;
        }
        return false;
    }

    // Delete user account using yuour id
    deleteUser(userId) {
        const index = this.users.findIndex(u => u.id === userId);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Export the class
module.exports = UserAuth;