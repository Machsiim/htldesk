import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            user: {
                username: "",
                guid: "",
                isLoggedIn: false
            }
        }
    },
    mutations: {
        authenticate(state, userdata) {
            if (!userdata) {
                state.user = { name: "", guid: "", isLoggedIn: false };
                return;
            }
            state.user.name = userdata.username;
            state.user.guid = userdata.userGuid;
            state.user.isLoggedIn = true;
        }
    }
});
