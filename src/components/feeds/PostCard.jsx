import {
  Avatar,
  Card,
  Space,
  Tooltip,
  Typography,
  Dropdown,
  Image,
} from "antd";
import {
  MoreOutlined,
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  ShareAltOutlined,
  BookOutlined,
  BookFilled,
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { primaryColor } from "../../app/config/theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import Img from "../../json/error-load-img.json";
import styled from "styled-components";
import { Modal } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const { Title, Text } = Typography;

const Div = styled.div`
  margin-bottom: -20px;
  /* margin-left: 20px; */
  display: flex;
  gap: 20px;
  p {
    font-weight: 600;
  }
  .common {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
`;
const MODAL = styled.div`
  .likes {
    display: flex;
    gap: 20px;
  }
`;

const items = [
  {
    key: "1",
    label: "Edit",
    icon: <EditOutlined />,
  },
  {
    key: "2",
    label: <Text type="danger">Delete</Text>,
    icon: <DeleteOutlined />,
  },
  {
    key: "3",
    label: <Text type="danger">Report</Text>,
    icon: <InfoCircleOutlined />,
  },
];

const PostCard = ({ like = false }) => {
  const [showCaption, setShowCaption] = useState(true);
  const [isModalLikeOpen, setIsModalLikeOpen] = useState(false);
  const [modalCommentOpen, setIsModalCommentOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const [showLike, setShowLike] = useState(false);

  const showModalLike = () => {
    setIsModalLikeOpen(true);
  };
  const showModalComments = () => {
    setIsModalCommentOpen(true);
  };

  const showModalShare = () => {
    setShareModalOpen(true);
  };
  const handleOk = () => {
    setIsModalLikeOpen(false);
    setIsModalCommentOpen(false);
    setShareModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalLikeOpen(false);
    setIsModalCommentOpen(false);
    setShareModalOpen(false);
  };

  return (
    <Card
      style={{
        width: "100%",
        marginTop: 10,
      }}
      size="small"
      actions={[
        <Tooltip placement="bottom" title={"Like"}>
          {like ? (
            <LikeFilled style={{ fontSize: 20, color: primaryColor }} />
          ) : (
            <LikeOutlined style={{ fontSize: 20 }} />
          )}
        </Tooltip>,
        <Tooltip placement="bottom" title={"Comment"}>
          <CommentOutlined style={{ fontSize: 20 }} />
        </Tooltip>,
        <Tooltip placement="bottom" title={"Share"}>
          <ShareAltOutlined style={{ fontSize: 20 }} onClick={showModalShare} />
        </Tooltip>,
        <Tooltip placement="bottom" title={"Save"}>
          <BookOutlined style={{ fontSize: 20 }} />
          {/* <BookFilled /> */}
        </Tooltip>,
      ]}
    >
      {/* headers */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Space size={10}>
          <Avatar size={43} style={{ fontSize: 23 }}>
            A
          </Avatar>
          <div>
            <Title level={5} style={{ fontSize: 15, padding: 0, margin: 0 }}>
              <Link to="/" style={{ color: primaryColor }}>
                Dillip
              </Link>
            </Title>
            <Text type="secondary" style={{ fontSize: 10 }}>
              1d ago
            </Text>
          </div>
        </Space>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
        >
          <MoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Dropdown>
      </div>
      {/* caption */}
      <div
        style={{
          margin: "15px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          className={showCaption && "caption"}
          style={{ width: showCaption && "86%" }}
        >
          Ready to take your education to the next level? Experience the
          convenience and flexibility of online learning where knowledge has no
          boundaries Explore
        </p>
        {showCaption && (
          <span
            style={{ color: primaryColor, cursor: "pointer" }}
            onClick={() => setShowCaption(!showCaption)}
          >
            see more
          </span>
        )}
      </div>
      {/* image */}
      <Image
        width={"100%"}
        src="./images/feed/demo_post.jpeg"
        fallback={Img.errImg}
      />
      <Div>
        <div className="like common" onClick={showModalLike}>
          <LikeFilled style={{ fontSize: 15, color: primaryColor }} />
          <p>100k</p>
        </div>
        <div className="comment common" onClick={showModalComments}>
          <CommentOutlined
            style={{ fontSize: 15, color: primaryColor, marginLeft: 20 }}
          />
          <p>58</p>
        </div>
      </Div>
      <MODAL>
        <Modal
          title="View Likes"
          open={isModalLikeOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div className="avatar">
              <AccountCircleIcon
                style={{ fontSize: 40, color: primaryColor }}
              />
            </div>
            <div style={{ fontSize: 20, color: primaryColor }}>Bulu Sahoo</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div className="avatar">
              <AccountCircleIcon
                style={{ fontSize: 40, color: primaryColor }}
              />
            </div>
            <div style={{ fontSize: 20, color: primaryColor }}>Bulu Sahoo</div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div className="avatar">
              <AccountCircleIcon
                style={{ fontSize: 40, color: primaryColor }}
              />
            </div>
            <div style={{ fontSize: 20, color: primaryColor }}>Bulu Sahoo</div>
          </div>
        </Modal>
      </MODAL>
      <MODAL>
        <Modal
          title="View Comments"
          open={modalCommentOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div className="avatar">
              <AccountCircleIcon
                style={{ fontSize: 40, color: primaryColor }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: 15, color: primaryColor, margin: 0 }}>
                Bulu Sahoo
              </p>
              <p style={{ fontSize: 15, margin: 0 }}>show comment here</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div className="avatar">
              <AccountCircleIcon
                style={{ fontSize: 40, color: primaryColor }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: 15, color: primaryColor, margin: 0 }}>
                Bulu Sahoo
              </p>
              <p style={{ fontSize: 15, margin: 0 }}>show comment here</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div className="avatar">
              <AccountCircleIcon
                style={{ fontSize: 40, color: primaryColor }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: 15, color: primaryColor, margin: 0 }}>
                Bulu Sahoo
              </p>
              <p style={{ fontSize: 15, margin: 0 }}>show comment here</p>
            </div>
          </div>
        </Modal>
      </MODAL>
      <MODAL>
        <Modal
          title="Share Post Link"
          open={shareModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ display: "flex", marginTop: "20px" }}>
            <input
              type="text"
              style={{ padding: "7px", maxWidth: "200px" }}
              value="https://example.com"
              readonly
            />
            <button style={{ backgroundColor: primaryColor, border: "none" }}>
              <ContentCopyIcon style={{ color: "white" }} />
            </button>
          </div>
          <div style={{marginTop:"20px", display:"flex", gap:"20px"}}>
            <EmailIcon  style={{color:primaryColor, fontSize: 50}}/>
            <WhatsAppIcon  style={{color:primaryColor, fontSize: 50}}/>
          </div>
        </Modal>
      </MODAL>
    </Card>
  );
};
export default PostCard;
