import React from "react";
import "./Login.css"; // Подключение внешнего CSS

const Login = () => {
    return (
        <div className="container" style={{ marginTop: "5%" }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Login</h1>
                </div>

                <div className="signup-text1" style={{ textAlign: "left" }}>
                    Are you a new member?{" "}
                    <span>
                        <a href="../Login/Login.html" style={{ color: "#2190FF" }}>
                            Sign Up Here
                        </a>
                    </span>
                </div>

                <br />

                <div className="signup-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="form-control"
                                placeholder="Введите ваше имя"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Введите ваш номер телефона"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="btn-group">
                            <button
                                type="submit"
                                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                            >
                                Отправить
                            </button>
                            <button
                                type="reset"
                                className="btn btn-danger mb-2 waves-effect waves-light"
                            >
                                Сбросить
                            </button>
                        </div>
                    </form>
                </div>

                <br />

                <div className="signup-text1" style={{ textAlign: "left" }}>
                    Forgot password?
                </div>
            </div>
        </div>
    );
};

export default Login;
