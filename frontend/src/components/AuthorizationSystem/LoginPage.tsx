import React, { useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import useStyles from './styles';
import { LoginFormValues } from './types';


const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const styles = useStyles();

    message.config({
        duration: 5
    })

    const onFinish = async (values: LoginFormValues) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/user_login', values);

            localStorage.setItem('userName', values.username);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            
            message.success('Успешный вход в систему');
            setTimeout(() => {
                navigate('/');
                message.destroy()
            }, 1500);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                message.error(error.response?.data.detail);
            } else {
                message.error("Произошла ошибка");
            }
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div style={styles.authorizationFormBlock}>
                <h2>Войти</h2>
                <Spin spinning={loading}>
                    <Form
                        name="login_form"
                        initialValues={{ remember: true }}
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

                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={loading}>
                                Войти
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;
