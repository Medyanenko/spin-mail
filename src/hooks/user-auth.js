import { useSelector } from "react-redux";

export default function useAuth() {
    const {isLoggedIn, token} = useSelector(state => state.auth);
    const {name} = useSelector(state => state.labels);
    return{
        token,
        isAuth: isLoggedIn,
        name
    }
}