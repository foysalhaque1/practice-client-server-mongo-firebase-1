import React from 'react';

const Signin = () => {
    return (
        <div className='flex justify-center'>

                <div className=" bg-base-100   shrink-0 shadow-2xl">
                    <div className="p-5">
                        <h1 className="text-5xl font-bold">Signin now!</h1>
                        <form className="grid grid-cols-1">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral w-[30%] mt-4">Signin</button>
                        </form>
                    </div>
                </div>
        </div>
            
    );
};

export default Signin;