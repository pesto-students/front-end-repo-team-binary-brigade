/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EmailInput } from '../common/FormElement/FormInput';
import FormButton from '../common/FormElement/FormButton';
import { SendOtpService } from '../../app/services/user.service';
import { errorHandler } from '../../helper/handler';

const SendOtpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    await SendOtpService({
      email: values.email
    }).then(async (res) => {
      message.success(res.data.message);
      navigate('/otpverify');
    }).catch((err) => {
      message.error(errorHandler(err));
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <Form name="email-form" onFinish={onFinish}>
      <EmailInput />
      <FormButton label={'Send OTP'} loading={loading} />
    </Form>
  );
};

export default SendOtpForm;
