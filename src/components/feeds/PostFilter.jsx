import { useState } from 'react';
import { Button, Space } from 'antd';

const fltrBtns = [
    {
        label: 'Recent',
        value: 1
    },
    {
        label: 'Popular',
        value: 2
    },
    {
        label: 'My Post',
        value: 3
    },
    {
        label: 'Saved',
        value: 4
    }
]

const PostFilter = () => {
    const [val, setVal] = useState(1);

    return (
        <Space style={{ width: '100%', overflow: 'auto', padding: '10px 0' }} size={10}>
            {
                fltrBtns.map((e) =>
                    <Button
                        shape="round" key={e.value}
                        type={val === e.value ? 'primary' : 'default'}
                        onClick={() => setVal(e.value)}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: val !== e.value && '#E9E9EC',
                            border: 'none'
                        }}
                    >
                        {e.label}
                    </Button>
                )
            }
        </Space>
    )

}
export default PostFilter;