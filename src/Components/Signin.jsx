import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const Signin = () => {
    const { signIn } = use(AuthContext)
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password).then(res => {
            console.log(res.user);
            const userInfo = {
                email,
                lastSignInTime: res.user?.metadata?.lastSignInTime
            };
            fetch('http://localhost:2000/users',{
                method:'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userInfo)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                })

        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='flex justify-center'>

            <div className=" bg-base-100   shrink-0 shadow-2xl">
                <div className="p-7">
                    <h1 className="text-5xl my-7 font-bold">Signin now!</h1>
                    <form onSubmit={handleSignIn} className="grid grid-cols-1">
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" name='password' placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral w-[30%] mt-4">Signin</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signin;