import React from 'react'
import CollegeCard from '../components/feeds/CollegeCard'
import DesktopMainLayout from '../components/Layout/DesktopMainLayout';
import { Row } from 'antd';

const CollegeLists = () => {
  return (
    <DesktopMainLayout sidelayout={false}>
      <Row>
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
      </Row>
    </DesktopMainLayout>
  )
}

export default CollegeLists
