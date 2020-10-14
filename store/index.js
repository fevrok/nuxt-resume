export const state = () => ({
    resume: null
})

export const mutations = {
    SET_RESUME(state, val) {
        state.resume = val
    }
}

export const actions = {
    async nuxtServerInit ({ dispatch, commit }, { store, app }) {
        let resume = await fetch(
            'https://www.fevrok.com/api/v1/resume/chadidi',
            {
                headers: {
                'X-API-Key': 'Vpu0RmRSTqHDPLVSpH4xEaonxeY0IgAGx1D9WEvg'
                }
            }
        ).then(res => res.json())
        commit('SET_RESUME', resume)
    }
}