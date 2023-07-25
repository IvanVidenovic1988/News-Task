import { FC, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/redux/hooks";
import { setEmail, setError, setIsAuthenticated, setIsLoading, setPassword, setToken } from "./redux/login";

const MIN_LENGTH = 0
const MAX_LENGTH = 3

type FormErrors = {
    emailError: string;
    passwordError: string
}

const Login: FC = () => {

    const email = useAppSelector((state) => state.login.email)
    const password = useAppSelector((state) => state.login.password)
    const isLoading = useAppSelector((state) => state.login.isLoading)
    const error = useAppSelector((state) => state.login.error)

    const dispatch = useAppDispatch()

    const [formErrors, setFormErrors] = useState<FormErrors>({
        emailError: '',
        passwordError: ''
    })

    const [isFormValid, setIsFormValid] = useState(false);

    const updateFormErrors = () => {
        setFormErrors({
            emailError: email.length === 0 ? "Email is required" : "",
            passwordError:
                password.length === 0
                    ? "Password is required"
                    : password.length < MAX_LENGTH
                        ? "Password must be at least 3 characters long"
                        : "",
        });
    };

    useEffect(() => {
        // Skip validation on initial load
        if (email.length > 0 || password.length > 0) {
            setIsFormValid(validateForm());
            updateFormErrors();
        }
    }, [email, password]);


    const validateEmail = () => {
        if (email.length === MIN_LENGTH) {
            setFormErrors((formErrors) => ({ ...formErrors, emailError: "Email is required" }))
            return false;
        }

        return true;
    }

    const validatePassword = () => {
        if (password.length === MIN_LENGTH) {
            setFormErrors((formErrors) => ({ ...formErrors, passwordError: "Password is required" }))
            return false;
        } else if (password.length < MAX_LENGTH) {
            setFormErrors((formErrors) => ({ ...formErrors, passwordError: "Password must be at least 3 characters long" }))
            return false;
        }

        return true;
    }

    const validateForm = () => {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        return isEmailValid && isPasswordValid
    }

    const handleLogin = async (email: string, password: string) => {
        try {
            dispatch(setIsLoading(true));
            const response = await fetch('http://localhost:3001/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            const loginData = await response.json();
            console.log('loginData: ', loginData);
            const token = loginData.token

            if (response.ok) {
                dispatch(setToken(token));
                dispatch(setIsAuthenticated(true));
            } else {
                dispatch(setError(loginData.message));
            }
        } catch (error) {
            dispatch(setError(error));
        } finally {
            dispatch(setIsLoading(false));
        }
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateForm()) {
            handleLogin(email, password)
        }
    }

    return (
        <>

            {error &&
                <div className='server-error-container'>
                    <p className="font-bold text-white text-l">{error}</p>
                </div>
            }

            {isLoading && <p className="text-center">Loading...</p>}

            <div className="max-w-[450px] mx-auto mt-[200px]">

                <h1 className="pb-8 text-5xl font-bold text-gray-500">Login</h1>

                <form className="" onSubmit={handleSubmit}>

                    <div className="pb-6">
                        <label className="font-bold text-gray-500">Your email address *</label>
                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                            className={`input 
                            ${formErrors.emailError ? 'border-red-700' : ''}`
                            }
                        />
                        {formErrors.emailError &&
                            <p className='text-red-700'>{formErrors.emailError}</p>
                        }
                    </div>


                    <div>
                        <label className="pb-1 font-bold text-gray-500">Your password *</label>
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                            value={password}
                            className={`input 
                            ${formErrors.passwordError ? 'border-red-700' : ''}`
                            }
                        />
                        {formErrors.passwordError &&
                            <p className='text-red-700'>{formErrors.passwordError}</p>
                        }
                    </div>


                    <div className="flex justify-end pt-6">
                        <button
                            disabled={!isFormValid}
                            className={`${isFormValid ? "login-btn" : 'disabled-login-btn'}`}>
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Login;