import { useEffect, useState } from "react";
import Loginmodal from "../Login";
import { Outlet } from "react-router-dom";
// import Spinner from "../Spinner";


export default function PrivateRoute() {

    const [ok, setOk] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const authCheck = async () => {
            const res = await fetch("http://localhost:5000/api/auth/user-auth", {
                headers: {
                    'auth-token': token
                }
            });
            // console.log(res);
            if (res.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };

        authCheck();
    }, []);

    return ok ? <Outlet /> : <Loginmodal/>;
}