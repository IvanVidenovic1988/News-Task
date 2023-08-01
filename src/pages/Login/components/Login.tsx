import { FC, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import { handleLogin } from "../redux/login";
import Input from "../../../components/Input";
import Button from "../../../components/Button";


const MIN_LENGTH = 3

type FormErrors = {
    emailError: string;
    passwordError: string
}

const Login: FC = () => {

    // const email = useAppSelector((state) => state.login.email)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    : password.length < MIN_LENGTH
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
        if (email.length === 0) {
            setFormErrors((formErrors) => ({ ...formErrors, emailError: "Email is required" }))
            return false;
        }

        return true;
    }

    const validatePassword = () => {
        if (password.length === MIN_LENGTH) {
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validateForm()) {
            dispatch(handleLogin(email, password))
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

                    <Input
                        label="Your email address *"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={formErrors.emailError}
                    />

                    <Input
                        label="Your email address *"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={formErrors.passwordError}
                    />

                    <div className="flex justify-end pt-6">
                        <Button
                            disabled={!isFormValid}
                            text="Login"
                            className={isFormValid ? "login-btn" : 'disabled-login-btn'}
                        />
                    </div>

                </form>
            </div>
        </>
    );
}

export default Login;