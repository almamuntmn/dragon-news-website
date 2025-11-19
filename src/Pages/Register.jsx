import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const Register = () => {
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { createUser, setUser, updateUserData } = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 3) {
            setError("Name must be at least 3 characters");
            return;
        } else {
            setError("");
        }
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError("Please provide a valid email");
            return;
        } else {
            setError("");
        }
        const password = form.password.value;
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }else{
            setError("");
        }
        console.log(name, photoUrl, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserData({ displayName: name, photoURL: photoUrl }).then(() => {
                    setUser({...user, displayName: name, photoURL: photoUrl});
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage, errorCode);
            });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form onSubmit={handleRegister} className="fieldset bg-base-100 border-base-300 w-96 rounded-box border p-10">
                <h2 className="font-semibold text-2xl text-center mb-5">Register Your Account</h2>

                <label className="label">Name</label>
                <input type="text" className="input" name='name' placeholder="Your Name" autoComplete="name" />

                <label className="label">Photo Url</label>
                <input type="text" className="input" name='photoUrl' placeholder="Your Photo Url" />

                <label className="label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" autoComplete="email" />

                <label className="label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" required autoComplete="new-password" />

                <button type='submit' className="btn btn-primary mt-4">Register</button>

                <button className="btn bg-white text-black border-[#e5e5e5]">
                    <FcGoogle size={24} />
                    Login with Google
                </button>

                <p className='mt-3 text-center'>Already have an account? <a href="/auth/login" className='text-secondary'>Login</a></p>

                {
                    error && <p className='text-red-500'>Please provide a valid name, email, and password</p>
                }

            </form>
        </div>
    );
};

export default Register;