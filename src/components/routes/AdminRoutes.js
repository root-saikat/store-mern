import { useEffect, useState } from "react";
// import Loginmodal from "../Login";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";


export default function AdminRoute() {

    const [ok, setOk] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const authCheck = async () => {
            const res = await fetch("http://localhost:5000/api/auth/admin-auth", {
                headers: {
                    'auth-token': token
                }
            });

            if (res.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };

        if (token) authCheck();
    }, []);

    return ok ? <Outlet /> : <Spinner path=""/>;
}