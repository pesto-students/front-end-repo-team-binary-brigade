import { useEffect, useState } from "react";
import DesktopMainLayout from "../components/Layout/DesktopMainLayout";
// import PostCard from "../components/feeds/PostCard";
import PostCardLoader from "../components/feeds/PostCardLoader";
import PostFilter from "../components/feeds/PostFilter";
import React from "react";
import { Card, Carousel } from "antd";
import styled from "styled-components";

const MainDiv = styled.div`
  margin: 0 20px;
  h1 {
    color: #6c63ff;
    font-size: 25px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const CollegeDetails = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <DesktopMainLayout>
      {/* <PostFilter /> */}
      {loader ? (
        <>
          <PostCardLoader />
          <PostCardLoader />
        </>
      ) : (
        <>
          <MainDiv>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
            >
              <Carousel autoplay>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="college"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="college"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="college"
                  />
                </div>
              </Carousel>
              <h1>Indian Institute of Technology Bombay (IIT Bombay)</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                itaque repudiandae officia obcaecati beatae inventore, explicabo
                modi velit odit, laudantium, sit ut. Soluta minima dignissimos
                nobis cupiditate beatae iste praesentium!
              </h3>
              <h2>
                Number Of Student - <span>3000</span>
              </h2>
              <h2>
                Number Of Faculty - <span>80</span>
              </h2>
              <h2>
                Number Of Stream - <span>20</span>
              </h2>
            </Card>
          </MainDiv>
        </>
      )}
    </DesktopMainLayout>
  );
};
export default CollegeDetails;
