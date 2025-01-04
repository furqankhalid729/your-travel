import React from 'react'
import CareerTab from '../../Components/User/Career/CareerTab';
import CareerForm from '../../Components/User/Career/CareerForm';
import UserLayout from "../../Layout/UserLayout";
const Career = () => {
  return (
    <div>
      <CareerTab />
      <CareerForm />
    </div>
  )
}
Career.layout = page => <UserLayout children={page} title="Career" />
export default Career