import React, { useEffect, useState } from 'react';
import { Form, Checkbox, message } from 'antd';
import { EmailInput, PasswordInput } from '../common/FormElement/FormInput';
import FormButton from '../common/FormElement/FormButton';
import { LinkButton } from '../common/Elements';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateReduxService } from '../../app/redux/slices/authReducer';
import { useNavigate } from 'react-router-dom';
import { errorHandler } from '../../helper/handler';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.authReducer);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem('loginEmail');
        const storedPassword = localStorage.getItem('loginPassword');
        if (storedEmail && storedPassword) {
            setEmail(storedEmail);
            setPassword(storedPassword);
        }
    }, []);

    const onFinish = async (values) => {
        if (rememberPassword) {
            localStorage.setItem('loginEmail', values.email);
            localStorage.setItem('loginPassword', values.password);
        } else {
            localStorage.removeItem('loginEmail');
            localStorage.removeItem('loginPassword');
        }

        await dispatch(authenticateReduxService({
            email: values.email,
            password: values.password
        }))
    };


    useEffect(() => {
        if (data) {
            navigate(`/feed?college_id=${data.user.college_id}`);
        }
        else {
            message.error(errorHandler(error));
        }

        return () => { };
    }, [error, data, navigate])



    return (
        <div>
            <Form name="login-form" onFinish={onFinish} initialValues={{ email, password }}>
                <EmailInput email={email} />
                <PasswordInput password={password} />


                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: '15px' }}>
                    <Checkbox onChange={(e) => setRememberPassword(e.target.checked)}>
                        Remember Password
                    </Checkbox>
                    <LinkButton label={'Forgot Password'} path='/forgotpassword' />
                </div>


                <FormButton label='Log in' loading={loading} />

                <div style={{ textAlign: 'center' }}>
                    Don't have Account? &nbsp;
                    <LinkButton label={'Create Account'} path='/signup' />
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;
