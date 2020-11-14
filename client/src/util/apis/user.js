const UserApi = {

    async getUser() {
        const res = await fetch('/api/users', {
            method: 'GET',
        });
        const user = await res.json();
        return user
    },

    async addGiftToUserGiftCollection(gift) {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(gift),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const newUser = await res.json();
        return newUser;
    },
};

export default UserApi;