import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

export default function Login({onLogin}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!username || !password ) {
            setError("pls fill all fields");
            return;

        }
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user =existingUsers.find((user) => user.username === username );
        if (!user) {
            setError("user already exist");
            return;
        }
        if (user.password !== password){
            setError("password is incorrect");
            return;
        
        }
        onLogin(user);
        navigate("/");
    };
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' value={username} onChange= {(e) => setUsername (e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange= {(e) => setPassword (e.target.value)} />

            {error && <p>{error}</p>}
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
