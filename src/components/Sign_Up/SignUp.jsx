import React from "react";
import "./Sign_Up.css"; // Подключение внешнего CSS

const SignUp = () => {
    return (
        <div className="container" style={{ marginTop: "5%" }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Регистрация</h1>
                </div>

                <div className="signup-text1" style={{ textAlign: "left" }}>
                    Уже зарегистрированы?{" "}
                    <span>
                        <a href="../Login/Login.html" style={{ color: "#2190FF" }}>
                            Войти
                        </a>
                    </span>
                </div>

                <div className="signup-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Имя</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="form-control"
                                placeholder="Введите ваше имя"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                className="form-control"
                                placeholder="Введите ваш номер телефона"
                                maxlength="10"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Электронная почта</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="form-control"
                                placeholder="Введите вашу электронную почту"
                                aria-describedby="helpId"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="form-control"
                                placeholder="Введите ваш пароль"
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
            </div>
        </div>
    );
};

export default SignUp;
