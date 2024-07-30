import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Navbar from '../Navbar/Navbar';

const signupSchema = Yup.object({
    name: Yup.string().required('User name is a required field'),
    email: Yup.string().email('Invalid email').required('Email is a required field'),
    password: Yup.string()
        .min(3, 'Too short!')
        .max(20, 'Too long')
        .required('Password is a required field')
});

const Register = () => {
    const navigate = useNavigate();

    const { values, handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: signupSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5000/api/user/register-user', {
                    name: values.name,
                    email: values.email,
                    password: values.password
                });
                localStorage.setItem('token', response.data.token);
                alert('Successfully registered');
                navigate('/task');
            } catch (error) {
                console.error('Error registering user:', error);
                alert('Error registering user');
            }
        }
    });

    return (
        <div>
            <Navbar />
            <div className="bg-image">
                <div className="container">
                    <div className="box">
                        <div className="signin-form">
                            <h2>Registration</h2>
                            <form className="mt-8" onSubmit={handleSubmit}>
                                <div className="space-y-5">
                                    <div className="input-group">
                                        <label htmlFor="name" className="text-base font-medium text-white">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            value={values.name}
                                        />
                                        {touched.name && errors.name ? (
                                            <p className="text-red-500 text-sm">{errors.name}</p>
                                        ) : null}
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="email" className="text-base font-medium text-white">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            value={values.email}
                                        />
                                        {touched.email && errors.email ? (
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        ) : null}
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="password" className="text-base font-medium text-white">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={values.password}
                                        />
                                        {touched.password && errors.password ? (
                                            <p className="text-red-500 text-sm">{errors.password}</p>
                                        ) : null}
                                    </div>
                                    <div className="btn">
                                        <button type="submit">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
