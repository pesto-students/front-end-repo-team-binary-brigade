import { Form, Input, Select } from 'antd';

const FormField = ({ name, rules, placeholder, type = 'text', options }) => {
    return (
        <Form.Item name={name} rules={rules}>
            {type === 'password' ? (
                <Input.Password placeholder={placeholder} size="large" />
            ) : type === 'select' ? (
                <Select placeholder={placeholder} size="large">
                    {options?.map(option => (
                        <Select.Option key={option.value} value={option.value}>
                            {option.label}
                        </Select.Option>
                    ))}
                </Select>
            ) : (
                <Input placeholder={placeholder} size="large" type={type} className={type === 'number' ? 'input-number' : ''} />
            )}
        </Form.Item>
    );
};

export default FormField;
