import React from 'react'
import CollegeCard from '../components/feeds/CollegeCard'
import styled from "styled-components";

const Container = styled.div`
    margin: 50px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width:767px) {
        grid-template-columns: 1fr;
    }
    
`
const CollegeLists = () => {
  return (
    <Container>
      <CollegeCard />
      <CollegeCard />
      <CollegeCard />
      <CollegeCard />
      <CollegeCard />
      <CollegeCard />
      <CollegeCard />
    </Container>
  )
}

export default CollegeLists
