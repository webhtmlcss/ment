const LIST_LIST = 'LIST_LIST';
const state = {
    list: []
};
const  mutations = {
    getList(state, data) {
        state.list = data;
    }
};
const actions = {
    list(context, payload) {
        context.commit('getList', payload)
    },
};
export default {
    state,
    mutations,
    actions,
}