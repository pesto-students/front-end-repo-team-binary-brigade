import { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const fltrBtns = [
    {
        label: 'Recent',
        value: 0
    },
    {
        label: 'Popular',
        value: 1
    },
    {
        label: 'My Post',
        value: 2
    },
    {
        label: 'Saved',
        value: 3
    }
]

const PostFilter = ({ college_id, type }) => {
    const [val, setVal] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/feed?college_id=${college_id}&type=${fltrBtns[val].label.toLocaleLowerCase()}`)
    }, [college_id, navigate, val])

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