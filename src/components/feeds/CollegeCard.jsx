import React from "react";
import styled from "styled-components";
import { Card, Button } from "antd";
const { Meta } = Card;

const MainDiv = styled.div`
  .card {
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width:767px) {
        max-width: 350px;
    }
  }
  .button{
    display: flex;
    margin-top:20px ;
    gap: 15px;
    justify-content: center;
    
    .btn{
        text-transform:uppercase;
        font-weight:700;
    }
  }
`;

const CollegeCard = () => {
  return (
    <MainDiv>
      <Card
        hoverable
        className="card"
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          />
        }
      >
        <Meta title="Indian Institute of Technology Bombay (IIT Bombay)" />
        <div className="button">
          <Button className="btn" type="primary">View Posts</Button>
          <Button className="btn" >View Details</Button>
        </div>
      </Card>
    </MainDiv>
  );
};

export default CollegeCard;
