import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;        
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        if (!formData.username && !formData.password) {
            setError("username and password are required.");
            return;
        }else if(!formData.username){
            setError("username are required.");
            return;
        }else if(!formData.password){
            setError("password are required.");
            return;
        }else{
            setError("");
        }
        setError("");
        navigate("/dashboard");
        // try {
        //     const response = await axios.post("https://example.com/api/login", formData);
        //     console.log("API Response:", response.data);
        // // Handle success, e.g., navigate to another page or store token
        // } catch (err) {
        //     console.error("API Error:", err);
        //     setError("Failed to login. Please check your credentials.");
        // }
    }


    return (
    <div className="login-outer">
        <div className="container">
            <input
                type="checkbox"
                id="flip"
                checked={isFlipped}
                onChange={() => setIsFlipped(!isFlipped)}
                style={{ display: "none" }}
            />
            <div className="cover">
                <div className="front">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygWcz51gyDexlstejSgZZ2LSxqF4rBz3wQ&s"
                        alt=""
                    />
                    <div className="text">
                        <span className="text-1">
                            Every new friend is a <br /> new adventure
                        </span>
                        <span className="text-2">Let's get connected</span>
                    </div>
                </div>
                <div className="back">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygWcz51gyDexlstejSgZZ2LSxqF4rBz3wQ&s"
                        alt=""
                    />
                    <div className="text">
                        <span className="text-1">
                            Complete miles of journey <br /> with one step
                        </span>
                        <span className="text-2">Let's get started</span>
                    </div>
                </div>
            </div>

            <div className="forms">
                <div className="form-content">
                    <div className={`login-form ${isFlipped ? "hidden" : ""}`}>
                        <div className="title">Login</div>
                        <form onSubmit={handleSubmit} >
                            <div className="input-boxes">
                                <div className="input-box">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Enter your username" name="username" onChange={handleInputChange} />
                                </div>
                                <div className="input-box">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Enter your password" name="password" onChange={handleInputChange} />
                                </div>
                                <div className="button input-box">
                                    <input type="submit" value="Submit" />
                                </div>
                                
                                {error && <div className="text error-text">{error}</div>}
                                <div className="text sign-up-text">
                                    Don't have an account?{" "}
                                    <label onClick={() => setIsFlipped(true)}>Signup now</label>
                                </div>
                            </div>
                            
                        </form>                        
                    </div>
                    
                    <div className={`signup-form ${isFlipped ? "" : "hidden"}`}>
                        <div className="title">Signup</div>
                        <form action="#">
                            <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Enter your password" required />
                            </div>
                            <div className="button input-box">
                                <input type="submit" value="Submit" />
                            </div>
                            <div className="text sign-up-text">
                                Already have an account?{" "}
                                <label onClick={() => setIsFlipped(false)}>Login now</label>
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

export default Login;
