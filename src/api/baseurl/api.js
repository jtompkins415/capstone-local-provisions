import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API for Local Provisions DB, mostly user registration, authentication, update, and delete */


class LocalProvisionsUserAPI {
    static token;

    static async request(endpoint, data={}, method='get'){
        console.debug('API Call: ', endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${LocalProvisionsUserAPI.token}` };
        const params = (method === "get")
            ? data
            : {};

        try {
        return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
        }
    }


    /** Get current user */

    static async getCurrUser(username){
         let res = this.request(`user/${username}`)
         return res.user
    }

    /** Get login token from username and password  */

    static async userLogin(data){
        let res = await this.request('user/token', data, 'get')
        this.token = res.token;
        return res.token
    }

    /** Sign up user and return authentication token  */

    static async userSignup(data){
        let res = await this.request('user/register', data, 'post');
        this.token = res.token
        return res.token
    }

    /** Delete user and return confirmation message */
    static async userDelete(username){
        let res = await this.request(`user/${username}`,{}, 'delete')
        return res.deleted
    }
}

export default LocalProvisionsUserAPI;