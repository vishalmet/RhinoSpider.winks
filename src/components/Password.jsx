import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer';
import Logo from "../assets/Icons/logo.png"
import PasswordIcon from "../assets/Icons/password.png"
import axios from 'axios';

const Password = ({ onNext }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const storedEmail = sessionStorage.getItem('userEmail');
        if (!storedEmail) {
            setError('Email not found. Please go back and enter your email.');
            return;
        }
        setEmail(storedEmail);
    }, []);

    const validatePasswords = () => {
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        return true;
    };

    const handleSignup = async () => {
        if (!validatePasswords()) return;
        if (!email) {
            setError('Email not found. Please go back and enter your email.');
            return;
        }
    
        setIsLoading(true);
        try {
            console.log('Attempting signup with:', { email, password });
    
            const response = await axios.post('https://rhinospiderapi.vercel.app/api/auth/signup', {
                email,
                password
            });
    
            console.log('Signup response:', response.data); 
    
            sessionStorage.removeItem('userEmail');
            setError('');
            onNext(); 
            
        } catch (error) {
            console.error('Signup Error:', error.response || error); 
            
            if (error.response) {
                if (error.response.status === 400) {
                    setError('Email already registered');
                } else if (error.response.status === 500) {
                    setError('Server error. Please try again');
                } else {
                    setError(error.response.data.message || 'Signup failed');
                }
            } else {
                setError('Network error. Please check your connection');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (error) setError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (error) setError('');
    };

    // Handle enter key press
    const handleKeyPress = async (e) => {
        if (e.key === 'Enter' && !isLoading) {
            // If on password field, move to confirm password
            if (document.activeElement === document.querySelector('input[placeholder="Create New Password"]')) {
                document.querySelector('input[placeholder="Confirm Password"]').focus();
            } 
            // If on confirm password field, submit
            else if (document.activeElement === document.querySelector('input[placeholder="Confirm Password"]')) {
                await handleSignup();
            }
        }
    };

    // Add event listeners for both input fields
    useEffect(() => {
        const passwordInput = document.querySelector('input[placeholder="Create New Password"]');
        const confirmInput = document.querySelector('input[placeholder="Confirm Password"]');

        if (passwordInput && confirmInput) {
            passwordInput.addEventListener('keypress', handleKeyPress);
            confirmInput.addEventListener('keypress', handleKeyPress);
        }

        return () => {
            if (passwordInput && confirmInput) {
                passwordInput.removeEventListener('keypress', handleKeyPress);
                confirmInput.removeEventListener('keypress', handleKeyPress);
            }
        };
    }, [password, confirmPassword, isLoading]); // Dependencies include both password states and loading state

    return (
        <div className='bg-custom-bg3 bg-cover bg-center h-screen w-screen flex justify-center items-center p-4 sm:p-10 rounded font-semibold '>
            <div className="w-[220px] sm:w-[380px] relative">
                <img src={Logo} className='w-16 sm:w-24 h-auto absolute top-[-20px] right-0' alt="RhinoSpider" />
                <p className='text-base sm:text-3xl'>Password</p>
                <div className='border-2 border-white rounded-[20px] p-2 sm:p-3 flex items-center gap-2 glow-container font-medium mt-1 sm:mt-3'>
                    <img src={PasswordIcon} className='w-5 h-auto' alt="Password" />
                    <input
                        type="password"
                        placeholder='Create New Password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='text-sm sm:text-xl bg-transparent outline-none w-full'
                    />
                </div>
                <div className='border-2 border-white rounded-[20px] p-2 sm:p-3 flex items-center gap-2 glow-container font-medium mt-3'>
                    <img src={PasswordIcon} className='w-5 h-auto' alt="Password" />
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className='text-sm sm:text-xl bg-transparent outline-none w-full'
                    />
                </div>
                {error && (
                    <p className='text-red-500 text-sm mt-2 px-3'>
                        {error}
                    </p>
                )}
                <motion.button
                    whileTap={{scale:0.9}} 
                    className={`bg-white text-black text-sm sm:text-base p-2 sm:p-3 mt-2 sm:mt-5 rounded-full mx-auto w-full glow-button ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    onClick={handleSignup}
                    disabled={isLoading}
                >
                    {isLoading ? 'Creating Account...' : 'Next'}
                </motion.button>
                <Footer />
                <p className='font-medium text-center pt-1 sm:pt-5'>Powered by winks.fun</p>
            </div>
        </div>
    );
};

export default Password;