const state = {
    menuData: window.sessionStorage.getItem('m_treeData') ? JSON.parse(window.sessionStorage.getItem('m_treeData')) : null
}
const  mutations = {
    getSession(state, data) {
        state.menuData = data
        sessionStorage.setItem('m_treeData', JSON.stringify(data))
    }
};
const actions = {
    menuData(context, payload) {
        context.commit('getSession', payload)
    },
};
export default {
    state,
    mutations,
    actions,
}