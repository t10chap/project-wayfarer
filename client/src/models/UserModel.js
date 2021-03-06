import axios from 'axios';

class UserModel {

    static all(){
        let request = axios.get("https://localhost:4000/api/users")
        return request;
    }

    static getUser(email, password){
        let request = axios.post("http://localhost:4000/api/user/find", {email: email, password: password});
        return request;
    }

    static getProfile(email){
        console.log(email)
        let request = axios.post("http://localhost:4000/api/user/profile", {email: email})
        return request;
    }
    static editProfile(user){
        let request = axios.put("http://localhost:4000/api/user/update", {user})
        return request;
    }

    static createUser(newUser) {
        let request = axios.post("http://localhost:4000/api/user/create",
            newUser)
        return request;
    }


}

export default UserModel;
