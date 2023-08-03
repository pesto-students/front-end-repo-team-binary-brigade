
import { Card, Skeleton } from 'antd';
const { Meta } = Card;

const ListCardLoader = () => {

    return (
        <Card size='small'>
            <Meta
                avatar={<Skeleton.Avatar active size='large' />}
                title={<Skeleton.Button active size='small' style={{ height: '16px', width: '140px' }} />}
                description={<Skeleton.Button active size='small' style={{ height: '12px', width: '140px' }} />}
            />
        </Card>
    )
}
export default ListCardLoader;