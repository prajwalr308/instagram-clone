import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user';
import { logout } from '../../services/auth';
import './signout.css'

const SignoutBtn = () => {
    const [user,setUser] = useContext(UserContext).user;
    const signOut=()=>{
        logout();
        setUser(null);
    }
    return (
        <div>
            <button className="btn-grad" onClick={signOut} >signout</button>
        </div>
    )
}

export default SignoutBtn
