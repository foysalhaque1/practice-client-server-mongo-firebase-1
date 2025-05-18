import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const SignUp = () => {
    const { createUser } = use(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email,password,...restInfo} = Object.fromEntries(formData.entries())
        // const email = formData.get('email');
        // const password = formData.get('password');
        console.log({ email, password,...restInfo })
        createUser(email,password)
        .then(data=>{
            console.log(data.user);
           const userInfo={...restInfo};
            fetch('http://localhost:2000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(userInfo)
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className='flex justify-center ' >

            <div className=" bg-base-100   shrink-0 shadow-2xl mb-7">
                <div className="p-10">
                    <h1 className="text-5xl font-bold my-6">SignUp now!</h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1">
                        <label className="label">name</label>
                        <input type="text" name='name' className="input" placeholder="name" />
                        <label className="label">address</label>
                        <input type="text" name='address' className="input" placeholder="address" />
                        <label className="label">phone no</label>
                        <input type="text" name='phone no' className="input" placeholder="phone no" />
                        <label className="label">photo</label>
                        <input type="text" name='photo' className="input" placeholder="photo" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral w-[30%] mt-4">Signup</button>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default SignUp;