export const state = () => ({
    resume: null
})

export const mutations = {
    SET_RESUME(state, val) {
        state.resume = val
    }
}

export const actions = {
    async nuxtServerInit ({ dispatch, commit }, { env }) {
        let resume = await fetch(
            'https://www.fevrok.com/api/v1/resume/' + env.Username,
            {
                headers: {
                'X-API-Key': env.ApiKey
                }
            }
        ).then(res => res.json())
        commit('SET_RESUME', resume)
    }
}