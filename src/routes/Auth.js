import { authService } from "fbase";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        //console.log(event.target.name);
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault(); //enter치면 새로고침을 발생하지 않게 하는 코드
        try {
            let data;
        if (newAccount) {
            // create newAccount
            data = await authService.createUserWithEmailAndPassword(email, password);
        } else {
            // log in
            data = await authService.signInWithEmailAndPassword(email, password);
        }
        console.log(data);
    } catch (error) {
        //console.log(error);
        setError(error.message);
    }
};
const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required
                value={email}
                onChange={onChange} 
                />
                <input 
                name="password" 
                type="password" 
                placeholder= "Password" 
                required
                value={password}
                onChange={onChange}
                />
                <input type="submit" value= {newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sing In" : "Create Account"}
            </span>
        <button>Comtinue with Google</button>
        <button>Comtinue with Github</button>
        </div>
    )
}

export default Auth;