import React from "react";
import { Card, Button, Col } from "antd";
const { Meta } = Card;

const CollegeCard = () => {
  return (
    <Col lg={8} sm={12} xs={24} style={{ padding: '10px' }}>
      <Card
        hoverable
        className="card"
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          />
        }
        actions={[
          <Button type="primary">View Posts</Button>,
          <Button type="primary" ghost>View Details</Button>
        ]}
      >
        <Meta title="Indian Institute of Technology Bombay (IIT Bombay)" />
      </Card>
    </Col>
  );
};

export default CollegeCard;
