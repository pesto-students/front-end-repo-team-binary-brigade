/* eslint-disable no-unused-vars */
import { Avatar, Space, Typography, Card } from "antd";
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Title, Text } = Typography;


const UserListItem = () => {
    return (
        <Link to={'/'} style={{ width: '100%' }}>
            <Card size='small' loading={false} hoverable>
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" size={33} style={{ fontSize: 18 }}>D</Avatar>}
                    title="Dillip Kumar Sahu"
                    description="Joined in 23/04/2019"
                />
            </Card>
        </Link>
    )
}
export default UserListItem;