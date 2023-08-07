import React, { useEffect } from 'react'
import CollegeCard from '../components/feeds/CollegeCard'
import DesktopMainLayout from '../components/Layout/DesktopMainLayout';
import { Row, message } from 'antd';
import { getCollegeReduxService } from '../app/redux/slices/collegeReducer';
import { errorHandler } from '../helper/handler';
import { useDispatch, useSelector } from 'react-redux';

const CollegeLists = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.collegeReducer)

  useEffect(() => {
    dispatch(getCollegeReduxService({
      skip: 0,
      limit: 10,
    }));
  }, []);


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
