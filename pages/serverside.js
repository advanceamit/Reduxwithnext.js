import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apidata } from './action/userAction'


const page1 = (props) => {
  const dispatch = useDispatch()
  dispatch(apidata(props.data))
  
  console.log(props);
  const storedata = useSelector(state => state.user.users)
  console.log(storedata);
    
 
  

  return (
      <>
          {storedata?.map((elem) => {
              return (
                  <>
                      <li>{elem.name}</li>
                      </>
              )
          })}
      </>
  )
}
export async function getServerSideProps(context) {
  
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    
    
      
  
    return {
      props: { data }// will be passed to the page component as props
    }
  }

export default page1