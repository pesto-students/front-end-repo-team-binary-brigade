import { useState } from "react";

import { Button, Card, Typography } from "antd";
import { primaryColor } from "../../app/config/theme";
import { CloudUploadOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Title } = Typography;

const CreatePostButtonCard = () => {
  const [upload, setUpload] = useState(false);

  const showModalUpload = () => {
    setUpload(true);
  };
  const handleOk = () => {
    setUpload(false);
  };

  const handleCancel = () => {
    setUpload(false);
  };
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Card
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <center>
        <Title level={4} style={{ padding: 0, margin: 0 }}>
          Upload your post
        </Title>
        <Button
          type="primary"
          ghost
          size="large"
          style={{ width: "100%", marginTop: 20 }}
          onClick={showModalUpload}
        >
          <CloudUploadOutlined /> Upload
        </Button>
        <Modal
          title="Create Post"
          open={upload}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ marginTop: "20px" }}>
            <TextArea
              showCount
              maxLength={100}
              style={{ height: 120, marginBottom: 24 }}
              onChange={onChange}
              placeholder="Share Your Thought"
            />
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </div>
        </Modal>
      </center>
    </Card>
  );
};
export default CreatePostButtonCard;
