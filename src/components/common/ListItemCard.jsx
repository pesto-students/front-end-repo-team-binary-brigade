/* eslint-disable no-unused-vars */
import { Avatar, Card } from "antd";
import { Link, useLocation } from 'react-router-dom';

const { Meta } = Card;


const ListItemCard = ({ item }) => {
    const location = useLocation();
    return location.pathname.match('/college/') ? (
        <Link to={`/college/${item?._id}`} style={{ width: '100%' }}>
            <Card
                size='small'
                hoverable
            // cover={
            //     <img
            //         alt="example"
            //         src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            //     />
            // }
            >
                <Meta
                    avatar={<Avatar src={item?.avatar} size={50} style={{ fontSize: 30 }}>D</Avatar>}
                    title={item?.name}
                // description={<small>Joined in {item?.date}</small>}
                />
            </Card>
        </Link>
    ) : (
        <Card
            size='small'
        >
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" size={33} style={{ fontSize: 18 }}>D</Avatar>}
                title={item?.name}
                description={<small>Joined in {item?.date}</small>}
            />
        </Card>
    )
}
export default ListItemCard;