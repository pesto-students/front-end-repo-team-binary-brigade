
import { Card, Skeleton, Space } from 'antd';


const CollegeDetailsLoader = () => {

    return (
        <>
            <Card
                cover={
                    <Skeleton.Image active style={{ height: '300px' }} className='w-100' />
                }
            >
                <div style={{ margin: '15px 0', width: '100%' }}>
                    <Skeleton.Button active size='small' style={{ height: '20px' }} className='w-100' />
                </div>
                <div style={{ margin: '30px 0', width: '100%' }}>
                    <Skeleton.Button active size='small' style={{ height: '10px' }} className='w-100' />
                    <Skeleton.Button active size='small' style={{ height: '10px' }} className='w-100' />
                    <Skeleton.Button active size='small' style={{ height: '10px' }} className='w-100' />
                    <Skeleton.Button active size='small' style={{ height: '10px' }} className='w-100' />
                    <Skeleton.Button active size='small' style={{ height: '10px' }} className='w-100' />
                </div>
                <Space size={10} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 7 }}>
                        <Skeleton.Button active size='small' style={{ height: '15px', width: '140px' }} />
                        <Skeleton.Button active size='small' style={{ height: '13px', width: '10px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 7 }}>
                        <Skeleton.Button active size='small' style={{ height: '15px', width: '140px' }} />
                        <Skeleton.Button active size='small' style={{ height: '13px', width: '10px' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 7 }}>
                        <Skeleton.Button active size='small' style={{ height: '15px', width: '140px' }} />
                        <Skeleton.Button active size='small' style={{ height: '13px', width: '10px' }} />
                    </div>
                </Space>

            </Card>
        </>
    )
}
export default CollegeDetailsLoader;