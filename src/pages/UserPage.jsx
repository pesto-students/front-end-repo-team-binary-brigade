import { useEffect, useState } from "react";
import DesktopMainLayout from "../components/Layout/DesktopMainLayout";
import PostCard from "../components/feeds/PostCard";
import PostCardLoader from "../components/Loaders/PostCardLoader";
import PostFilter from "../components/feeds/PostFilter";

const UserPage = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 2000)
    }, [])

    const items = Array(10).fill({
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
        name: "Dillip Kumar Sahu",
        date: "23/04/2019"
    });


    return (
        <DesktopMainLayout rightSideListData={items} rightSideListTitle="Your Collegemates">
            <PostFilter />
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