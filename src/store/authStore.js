import {create} from "zustand"

const useAuthStore = create((set) => ({
    loginId : null,
    isLoggedIn: false,
    login: (id) => {
          set({loginId: id, isLoggedIn: true});
        sessionStorage.setItem("loginId", id);
    },
    checkLogin: () => {
        const id = sessionStorage.getItem("loginId");
        if(id !== null){
            set({loginId: id, isLoggedIn: true});    
        }
    }
    ,logout: () => {
        set({loginId: null, isLoggedIn: false})
        sessionStorage.removeItem("loginId");
        
    }
}))

export default useAuthStore;
