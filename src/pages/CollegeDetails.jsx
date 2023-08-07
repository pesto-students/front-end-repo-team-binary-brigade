import { useEffect, useState } from "react";
import DesktopMainLayout from "../components/Layout/DesktopMainLayout";
import React from "react";
import { Card, Descriptions, message } from "antd";
import { styled } from "styled-components";
import CollegeDetailsLoader from "../components/Loaders/CollegeDetailsLoader";
import { getCollegeReduxService } from "../app/redux/slices/collegeReducer";
import { useDispatch, useSelector } from "react-redux";
import { GetCollegeDetailsService } from "../app/services/college.service";
import { useParams } from "react-router-dom";
import { errorHandler } from "../helper/handler";

const CollegeDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector(state => state.collegeReducer)
  const [details, setDetails] = useState(null);
  const [loader, setLoader] = useState(true);

  const MainDiv = styled.div`
  margin: 0 20px;
  h1 {
    color: #6c63ff;
    padding:0;
    margin:0;
  }
  p {
    padding:0;
    margin:0;
    text-align: justify;
    margin-top: 15px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;


  useEffect(() => {
    dispatch(getCollegeReduxService({
      skip: 0,
      limit: 10,
    }));
    // getCollegeDetail();
  }, []);

  const getCollegeDetail = async () => {
    await GetCollegeDetailsService(id).then((res) => {
      setDetails(res.data);
    }).catch((err) => {
      message.error(errorHandler(err));
    }).finally(() => {
      setLoader(false);
    })
  }

  const items = Array(10).fill({
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
    name: "Dillip Kumar Sahu",
    date: "23/04/2019"
  });



  return (
    <DesktopMainLayout rightSideListData={data} loading={loading} rightSideListTitle="Other colleges" >
      <div style={{ margin: '20px 0' }} />
      {loader ? (
        <CollegeDetailsLoader />
      ) : (
        <MainDiv>
          <Card
            cover={
              <img
                alt="example"
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              />
            }
          >
            <h1>Indian Institute of Technology Bombay (IIT Bombay)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              itaque repudiandae officia obcaecati beatae inventore, explicabo
              modi velit odit, laudantium, sit ut. Soluta minima dignissimos
              nobis cupiditate beatae iste praesentium!
            </p>
            <Descriptions
              size='small'
              layout='vertical'
              style={{ marginTop: 20 }}
              labelStyle={{ color: '#000', fontWeight: 'bold' }}
            >
              <Descriptions.Item label="Number Of Student">5000</Descriptions.Item>
              <Descriptions.Item label="Number Of Faculty">200</Descriptions.Item>
              <Descriptions.Item label="Number Of Stream">12</Descriptions.Item>
            </Descriptions>
          </Card>
        </MainDiv>
      )}
    </DesktopMainLayout>
  );
};
export default CollegeDetails;
