import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

     const {googleSignIn, setLoggedUser,setIsLoading}=useAuth();
     const location=useLocation();
      const navigate=useNavigate();
     const Redirect_URL=location.state?.from || '/home'
     console.log(Redirect_URL);

     const googleSignInHandling=()=>{
               googleSignIn()
               .then((result) => {
          
                const user = result.user;
                console.log(user);
                setLoggedUser(user);
                 navigate(Redirect_URL,{replace:true});
                
                
              }).catch((error) => {
                
                console.log("Error Occoured");
              })
              .finally(()=>setIsLoading(false));
     }
    return (
        <div>
            <h1>This is Logging Page</h1>
             <button onClick={googleSignInHandling} className="btn btn-primary">Google LogIn</button>
        </div>
    );
};

export default Login;