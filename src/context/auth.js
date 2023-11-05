import { useState, useEffect, useContext, createContext } from "react";
import jwt_decode from "jwt-decode"; // Import jwt_decode


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" }); 
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const authtoken = localStorage.getItem('token'); // Get the authentication token

    if (authtoken) {
        try {
            const decodedToken = jwt_decode(authtoken);
            setAuth({ user: decodedToken.user, token: authtoken }); // Set user and token
            console.log(auth);
            // setUserName(decodedToken.user.name);
            // setUserEmail(decodedToken.user.email);
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };