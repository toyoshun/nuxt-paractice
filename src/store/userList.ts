import { mutationTree } from 'typed-vuex'

export type RootState = ReturnType<typeof state>
export type UserState = {
    list: [],
}

export const state = () => ({
    list: [] as string[]
})

export const mutations = mutationTree(state, {
    store(state, userList: UserState) {
        state.list = userList.list
    },
    pushName(state, name: string) {
        state.list.push(name);
    },
})
