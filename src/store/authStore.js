import {create} from "zustand"

const useAuthStore = create((set) => ({
    loginId : null,
    isLoggedIn: false,
    login: (id) => set({loginId: id, isLoggedIn: true}),
    logut: () => set({loginId: null, isLoggedIn: false})
}))

export default useAuthStore;
