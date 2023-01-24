import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            user: {
                username: "",
                guid: "",
                isLoggedIn: false
            },
            file: {
                guid: "",
                path: "",
            }
        }
    },
    mutations: {
        authenticate(state, userdata) {
            if (!userdata) {
                state.user = { username: "", guid: "", isLoggedIn: false };
                return;
            }
            state.user.username = userdata.username;
            state.user.guid = userdata.userGuid;
            state.user.isLoggedIn = true;
        },
        changeFile(state, file, path) {
            state.file.guid = file;
            state.file.path = path;
        },
    }
});
