import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthProvider from '../../../contexts/AuthProvider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthProvider);
    const handleSignUP = event => {
        event.preventDefult();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="hero">
            <div className="hero-content grid md:grid-col-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="sign up" />

                        </div>
                    </form>
                    <p className='rext-center'>Already have an account?<Link className='text-orange-400 font-bold' to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;