import React, { createContext, useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile,onAuthStateChanged,signOut, GoogleAuthProvider, signInWithPopup,deleteUser,reauthenticateWithCredential,EmailAuthProvider} from "firebase/auth";
import app from '../firebase.config';


const Context=createContext();

const AuthContext = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading] = useState(true);
    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    //signup
    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    //login
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .catch(err=>{
            setLoading(false);
        })
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

    //reauth
    const reauth=(email,password)=>{
        const user = auth.currentUser;

        // TODO(you): prompt the user to re-provide their sign-in credentials
        const credential = EmailAuthProvider.credential(email,password);

       return reauthenticateWithCredential(user, credential)
       .then(() => {
        console.log("authenticated")
        }).catch((error) => {
            console.log(error);
        })
    }
    
    //delete account
    const deleteAccount=(email)=>{
        setLoading(true);
        const user = auth.currentUser;
        return deleteUser(user).then(() => {
            fetch(`http://localhost:5000/user/delete/${email}`,{
            method:'delete'
            })
            .then(res=>res.json())
            .then(data=>{
                setLoading(false);
            })
        }).catch((error) => {
        console.log(error);
        setLoading(false);
        })
    };




    useEffect(()=>{
        
        onAuthStateChanged(auth,userInfo=>{
            console.log(auth.currentUser);
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


    const value={user,setUser,register,login,setName,logOut,loading,google,getUser,reauth,deleteAccount};

    return <Context.Provider value={value}>{children}</Context.Provider>
};

export {AuthContext,Context};