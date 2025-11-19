import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <fieldset className="fieldset bg-base-100 border-base-300 w-96 rounded-box border p-10">
                <h2 className="font-semibold text-2xl text-center mb-5">Login Your Account</h2>

                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" />

                <button className="btn btn-primary mt-4">Login</button>

                <button className="btn bg-white text-black border-[#e5e5e5]">
                    <FcGoogle size={24} />
                    Login with Google
                </button>

                <p className='mt-3 text-center'>Don't have an account? <a href="/auth/register" className='text-secondary'>Register</a></p>
            </fieldset>
        </div>
    );
};

export default Login;