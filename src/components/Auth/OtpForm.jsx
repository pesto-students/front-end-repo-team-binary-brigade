/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";
import { Form, message } from 'antd';
import FormButton from '../common/FormElement/FormButton';
import { VerifyOtpService } from '../../app/services/user.service';

const OtpForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    console.log('Combined OTP:', otp);

    await VerifyOtpService({
      otp
    }).then(async (res) => {
      message.success(res.data.message);
      // check otp verification type
      if (sessionStorage.getItem('otpType') === 'createAccount') {
        navigate("/login");
      }
      else {
        navigate("/resetPassword");
      }
    }).catch((err) => {
      message.error(err ? err?.toString() : 'Somthing went wrong!');
    }).finally(() => {
      setLoading(false);
    })
  };


  return (
    <Form name="otp-form" onFinish={onFinish}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" inputClassName='otp-input' />
      </div>

      <FormButton label={'Verify OTP'} loading={loading} />
    </Form>
  );
};

export default OtpForm;




