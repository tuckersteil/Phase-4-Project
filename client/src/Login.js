import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            <h1>Last Minute Tee Times</h1>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin}/>
                <p>-------------------------------</p>
                <p>
                    Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                        Sign Up
                    </button>
                </p>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <p>-------------------------------</p>
                <p>
                    Already have an account? &nbsp;
                    <button color="secondary" onClick={() => setShowLogin(true)}>
                        Log In
                    </button>
                </p>
            </> 
            )}
        </div>
    )
}
export default Login;