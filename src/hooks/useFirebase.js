import { getAuth, signInWithPopup,signOut, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../Pages/Login/Firebase/firebase.Init";

firebaseInitialization();

const useFirebase=()=>{
    const [loggedUser,setLoggedUser]=useState({});
    const [isLoading,setIsLoading]=useState(true)

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const googleSignIn=()=>{
          setIsLoading(true);
        
         return signInWithPopup(auth, provider)
         
        
      }

    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setLoggedUser(user);
            } else {
              setLoggedUser({});
            }
            setIsLoading(false);
          });
          

    },[]);



    const googleSignOut=()=>{
          setIsLoading(true);
        signOut(auth)
        .then(() => {
            setLoggedUser({});
            
          }).catch((error) => {
           
          })
          .finally(()=>setIsLoading(false));
          
        
    }

    return{
        loggedUser,
        googleSignIn,
        googleSignOut,
        isLoading
        
    }

}

export default useFirebase;