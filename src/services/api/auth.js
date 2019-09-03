import axios from 'axios'

export default {
    async login() {
        try {
            const response = await axios.post('', {});
            return response.data
        }
        catch (error) {
            return Promise.reject();
        }
    }
}
