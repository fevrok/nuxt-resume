export const state = () => ({
    resume: null,
})

export const mutations = {
    SET_RESUME(state, val) {
        state.resume = val
    }
}

export const actions = {
    async nuxtServerInit ({ commit }, { app, env }) {
        let resume = await fetch(
            env.ApiEndpoint + '/' + env.Username + '?locale=' + app.i18n.locale,
            {
                headers: {
                    'X-API-Key': env.ApiKey
                }
            }
        ).then(res => res.json())
        .catch ((e) => {
            console.log(e)
        })
        // console.log(resume)
        commit('SET_RESUME', resume)
    }
}