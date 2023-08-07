/* eslint-disable no-unused-vars */
import { Space, Typography } from "antd";
import ListItemCard from "./ListItemCard";
import ListCardLoader from "../Loaders/ListCardLoader";
const { Title } = Typography;


const ListSection = ({ list, title, loading }) => {

    return (
        <div style={{ width: '100%', padding: '0 15px' }}>
            <Title level={4} style={{ textAlign: 'center' }}>{title}</Title>
            <Space size={10} direction='vertical' style={{ width: '100%' }}>
                {
                    loading ?
                        Array(10).fill(0).map(() => <ListCardLoader />)
                        :
                        list?.map((item, i) => <ListItemCard key={i} item={item} />)
                }
            </Space>
        </div>
    )
}
export default ListSection;