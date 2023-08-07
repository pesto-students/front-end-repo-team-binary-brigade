import { useEffect, useState } from "react";
import DesktopMainLayout from "../components/Layout/DesktopMainLayout";
import PostCard from "../components/feeds/PostCard";
import PostCardLoader from "../components/Loaders/PostCardLoader";
import PostFilter from "../components/feeds/PostFilter";
import { GetPostService } from "../app/services/post.service";
import { message } from "antd";
import { errorHandler } from "../helper/handler";
import { useLocation } from "react-router-dom";
import { GetUserService } from "../app/services/user.service";

const UserPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const college_id = queryParams.get('college_id');
    const type = queryParams.get('type');
    const [loader, setLoader] = useState(true);
    const [posts, setPosts] = useState([]);
    const [collegemates, setCollegemates] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000)
        // getPosts();
    }, [type, college_id])

    const items = Array(10).fill({
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
        name: "Dillip Kumar Sahu",
        date: "23/04/2019"
    });



    const getPosts = async () => {
        await GetPostService({
            college_id,
            filter: type || 'recent',
            skip: 0,
            limit: 10,
            // user_id
        }).then(async (res) => {
            setPosts(res.data);
        }).catch((err) => {
            message.error(errorHandler(err));
        }).finally(() => {
            setLoader(false);
            getCollegemates();
        })
    }

    const getCollegemates = async () => {
        await GetUserService({
            college_id,
            skip: 0,
            limit: 10,
        }).then(async (res) => {
            setCollegemates(res.data);
        }).catch((err) => {
            message.error(errorHandler(err));
        }).finally(() => {
            setLoader(false);
        })
    }


    return (
        <DesktopMainLayout rightSideListData={items} rightSideListTitle="Your Collegemates">
            <PostFilter college_id={college_id} type={type} />
            {
                loader ?
                    (
                        <>
                            <PostCardLoader />
                            <PostCardLoader />
                        </>
                    ) : (
                        <>
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                            <PostCard />
                        </>
                    )
            }
        </DesktopMainLayout>
    )
}
export default UserPage;