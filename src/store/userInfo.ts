import { mutationTree } from 'typed-vuex'

export type RootState = ReturnType<typeof state>
export type UserState = {
    id: string,
    name: string,
}

export const state = () => ({
    id: "",
    name: "",
})

export const mutations = mutationTree(state, {
    store(state, userInfo: UserState) {
        state.id = userInfo.id,
        state.name = userInfo.name;
    },
    setName(state, name: string) {
        state.name = name
    },
})
