import { useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import useStyles from './styles';
import { getServerUrl } from '../../common/services';
import { RegistrationFormValues } from './types';


const RegisterPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const styles = useStyles();

    message.config({
        duration: 5
    });

    const onFinish = async (values: RegistrationFormValues) => {
        if (values.password !== values.passwordRepeat) {
            message.error('Пароли не совпадают');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${getServerUrl()}/auth/sign-up/`, {
                username: values.username,
                password: values.password,
                passwordRepeat: values.passwordRepeat
            });

            localStorage.setItem('accessToken', response.data.token);
            localStorage.setItem('username', values.username);

            message.success('Регистрация прошла успешно');
            setTimeout(() => {
                navigate('/');
            }, 500);
        } catch (error) {
            if (!axios.isAxiosError(error)) {
                message.error("Произошла ошибка");
            } else {
                const errorMessage = error.response?.data.message;
                if (!errorMessage) {
                    message.error("Произошла ошибка");
                } else {
                    message.error(errorMessage);
                }
            }
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div style={styles.authorizationFormBlock}>
                <h2>Регистрация</h2>
                <Spin spinning={loading}>
                    <Form
                        name="register_form"
                        onFinish={onFinish}
                        style={styles.authorizationForm}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Пожалуйста, введите ваше имя пользователя!' }]}
                        >
                            <Input placeholder="Логин" disabled={loading} />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
                        >
                            <Input.Password placeholder="Пароль" disabled={loading} />
                        </Form.Item>

                        <Form.Item
                            name="passwordRepeat"
                            rules={[{ required: true, message: 'Пожалуйста, повторите ваш пароль!' }]}
                        >
                            <Input.Password placeholder="Повторите пароль" disabled={loading} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={loading}>
                                Регистрация
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
                <Link to={'/login'}>
                    <div className="header__link header__link__cursor-style text-large">
                        Войти
                    </div>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default RegisterPage;
