import React, {useState} from 'react'
import './login.css'
import {Link, useNavigate} from "react-router-dom"
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

import { auth } from "./firebase";

function Login() {
    const history = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const signIn = e => {
    e.preventDefault()

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }


const register = e => {
    e.preventDefault()

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth){
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }

        return (
            <div className='login'>
                <Link to='/' style={{textDecoration:"none"}}>
                    <div className="login__logo">
                        <StoreMallDirectoryIcon className="login__logoImage" fontSize="large"/>
                        <h2 className='"login__logoTitle'>eShop</h2>
                    </div>
                </Link>
        
                <div className='login__container'>
                    <h1>Sign-In</h1>
        
                    <form>
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
        
                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        
                        <button type='submit' className='login__signInButton' onClick={signIn}/>
        
        
                    </form>
        
        
                    <p>
                        this a test eshop ! nothing here is for sale.
                    </p>
        
                    <button className='login__registerButton' onClick={register}/>
        
                </div>
            </div>
        )
        

}


export default Login

