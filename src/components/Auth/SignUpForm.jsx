/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import FormButton from "../common/FormElement/FormButton";
import { LinkButton } from "../common/Elements";
import FormField from "../common/FormElement/FormField";
import { CreateUserService } from "../../app/services/user.service";
import { errorHandler } from "../../helper/handler";

const colleges = [
  { _id: '615aeb50c45d1909c8e63b26', college_name: 'Indian Institute of Technology Bombay' },
  { _id: '615aeb50c45d1909c8e63b27', college_name: 'Indian Institute of Technology Delhi' },
  { _id: '615aeb50c45d1909c8e63b28', college_name: 'Indian Institute of Technology Madras' },
  { _id: '615aeb50c45d1909c8e63b29', college_name: 'Indian Institute of Technology Kanpur' },
  { _id: '615aeb50c45d1909c8e63b2a', college_name: 'Indian Institute of Technology Kharagpur' },
  { _id: '615aeb50c45d1909c8e63b2b', college_name: 'Indian Institute of Science Bangalore' },
  { _id: '615aeb50c45d1909c8e63b2c', college_name: 'Indian Institute of Technology Roorkee' },
  { _id: '615aeb50c45d1909c8e63b2d', college_name: 'Indian Institute of Technology Guwahati' },
  { _id: '615aeb50c45d1909c8e63b2e', college_name: 'Jawaharlal Nehru University' },
  { _id: '615aeb50c45d1909c8e63b2f', college_name: 'Banaras Hindu University' },
];


const fields = [
  {
    name: 'college_id',
    placeholder: 'Select College',
    rules: [{ required: true, message: 'Please your college!' }],
    type: "select",
    options: colleges
  },
  {
    name: 'name',
    placeholder: 'Name',
    rules: [{ required: true, message: 'Please enter your name!' }]
  },
  {
    name: 'email',
    placeholder: 'Email',
    rules: [
      { required: true, message: 'Please enter your email!' },
      { type: 'email', message: 'Please enter a valid email address!' },
    ]
  },
  {
    name: 'password',
    placeholder: 'Password',
    rules: [{ required: true, message: 'Please enter a password!' }],
    type: "password"
  },
  {
    name: 'repeatPassword',
    placeholder: 'Repeat Password',
    rules: [
      { required: true, message: 'Please repeat your password!' },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('The Password and Repeat Password should match!');
        },
      }),
    ],
    type: "password"
  }
]


const SignUpForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    if (values.password !== values.repeatPassword) {
      message.error("The password and repeat password do not match!");
      return;
    }

    await CreateUserService({
      email: values.email,
      name: values.name,
      password: values.password,
      college_id: values.college_id
    }).then(() => {
      message.success('Account created successfully!')
      sessionStorage.setItem('otpType', 'createAccount');
      navigate('/otpverify');
    }).catch((err) => {
      message.error(errorHandler(err));
    }).finally(() => {
      setLoading(false);
    })
  };

  return (
    <div>
      <Form name="signin-form" onFinish={onFinish}>
        {
          fields.map((field, i) => (
            <FormField
              key={i}
              name={field.name}
              rules={field.rules}
              placeholder={field.placeholder}
              type={field.type}
              options={field?.options?.map(college => ({ value: college._id, label: college.college_name }))}
            />
          ))
        }
        <FormButton label={"Create Now"} loading={loading} />
        <Form.Item>
          <div style={{ textAlign: "center" }}>
            Already have an Account? &nbsp;
            <LinkButton label={"Login"} path="/login" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
