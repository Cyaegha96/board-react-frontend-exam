import {create} from "zustand"

const useAuthStore = create((set) => ({
    token: null,
    loginId : null,
    isLoggedIn: false,
    login: (token, id) => {
          set({loginId: id,token:token, isLoggedIn: true});
        sessionStorage.setItem("loginId", id);
        sessionStorage.setItem("token", token);
    },
    checkLogin: () => {
        const token = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("loginId");
        if(token !== null){
            set({loginId: id,token:token, isLoggedIn: true});
        }
    }
    ,logout: () => {
        set({loginId: null, isLoggedIn: false, token:null})
        sessionStorage.removeItem("loginId");
        sessionStorage.removeItem("token")
        
    }
}))

export default useAuthStore;
