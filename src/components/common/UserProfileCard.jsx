import { Avatar, Button, Card, Typography } from "antd";
import { primaryColor } from "../../app/config/theme";
import { LogoutOutlined, EditFilled } from "@ant-design/icons";
import { Modal, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message } from "antd";

const { Title, Text } = Typography;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const UserProfileCard = ({ visible, onSave }) => {
  const [upload, setUpload] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const onFinish = (values) => {
    // Perform save/update logic here
    onSave(values);
  };
  const showModalUpload = () => {
    setUpload(true);
  };
  const handleOk = () => {
    setUpload(false);
  };

  const handleCancel = () => {
    setUpload(false);
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <center>
        <Avatar
          src="https://xsgames.co/randomusers/avatar.phpl?g=pixel&key=100"
          size={70}
          style={{ fontSize: 40, marginBottom: 10 }}
        ></Avatar>
        <Title level={4} style={{ padding: 0, margin: 0 }}>
          Dillip Kumar Sahu
        </Title>
        <Text>dillipkumar@gmail.com</Text>

        <Title level={5} style={{ color: primaryColor, letterSpacing: 2 }}>
          Government College Of Engineering, Keonjhar
        </Title>

        <Button
          type="primary"
          size="large"
          style={{ width: "100%", marginTop: 20 }}
          onClick={showModalUpload}
        >
          <EditFilled /> Update Profile
        </Button>
        <Button type="link" danger style={{ width: "100%", marginTop: 15 }}>
          <LogoutOutlined />
          Logout
        </Button>
      </center>
      <Modal
        title="Edit Profile"
        open={upload}
        onCancel={handleCancel}
        okText="Update"
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="profilePic"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
            style={{textAlign:"center"}}
          >
            <Upload
              name="avatar"
              listType="picture-circle"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};
export default UserProfileCard;
