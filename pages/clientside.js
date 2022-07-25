import react, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apidata } from './action/userAction'
function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const dispatch=useDispatch()

  useEffect(() => {
    (async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data =  await res.json()
      dispatch(apidata(data))
    })()

  

  }, [])
  const dat = useSelector((state => state.user.users))

  useEffect(() => {
    
   setData(dat)

  

  }, [])
  
  
  

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>{dat.map((elem) => {
        return <>{ elem.id}</>
      })}</h1>
      
    </div>
  )
}
export default  Profile