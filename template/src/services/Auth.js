import Api from './Api'

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Controller - service at Authentication
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
export default {
    baseUrl: '/auth',

    login({
        data
    }) {
        return Api({}).post(`${this.baseUrl}/login`, data)
    },

    logout({}) {
        return Api({}).post(`${this.baseUrl}/logout`, {})
    }
}