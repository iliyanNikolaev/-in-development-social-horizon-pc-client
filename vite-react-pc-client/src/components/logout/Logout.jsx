import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/authContext"
import { Navigate } from "react-router-dom"

export default function Logout() {
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        logoutHandler();
    }, []);

    return <Navigate to='/' />
}