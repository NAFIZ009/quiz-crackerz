import React, { createContext, useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../firebase.config';


const Context=createContext();

const AuthContext = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading] = useState(true);
    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    //signup
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    //login
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    //google login
    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    //set name and profile image
    const setName=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name
          });
    }
    //logout
    const logOut=()=>{
        setLoading(true);
        return signOut(auth).then();
    }
    //getting user information form db
    const getUser=(email)=>{
        // setLoading(true);
        // if(email){
            // setLoading(true);
            return fetch(`http://localhost:5000/user/info/${email}`)
        .then(res=>res.json())
                .then(data=>{
                    const {user} = data;
                    const [userInfo]=user;
                    setUser(user=>{
                        return {...user,...{userInfo}};
                    });
                })
        // }
        
    }


    useEffect(()=>{
        onAuthStateChanged(auth,userInfo=>{
                
            // if(userInfo){
                console.log(userInfo)
                setUser(userInfo);
                getUser(userInfo?.email)
                .then(()=>{
                    setLoading(false);
                });
                !userInfo&&setLoading(false);
                //setLoading(false);
                // setLoading(false);
 
            // }
            // setUser(userInfo);
            // setLoading(false);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const value={user,setUser,register,login,setName,logOut,loading,google,getUser};

    return <Context.Provider value={value}>{children}</Context.Provider>
};

export {AuthContext,Context};