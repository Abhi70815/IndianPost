import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const PostList = () => {
  const [data, setData] = useState([]);
  const [showData, setShow]= useState([]);
  const [msg, setMsg]=useState('');
  const [load, setLoad]= useState(false)
  const { state } = useLocation();
  // console.log(state)
  const pincode = state.input;
  const fetchData = async () => {
    setLoad(true);
    const res = await axios(`https://api.postalpincode.in/pincode/${pincode}`)
    const data = res.data[0];
   setShow(()=>[...data.PostOffice])
    console.log(data.PostOffice)
    setData(() => data.PostOffice);
    setMsg(data.Message);
    setLoad(false);
  }
  useEffect(() => {
    fetchData()

  }, [pincode])
  console.log(showData)

  const handleFilter=(e)=>{
   if(e.target.value===''){
    setShow(data)
    
   }
   else{

     setShow((prev)=>{
       return prev.filter((d)=>d.Name.toLowerCase().includes(e.target.value.toLowerCase()));
       
      })
    }
    }
 
  return (
    <div className='postlist'>
      <div >
        <p><b>Pincode:{pincode}</b> </p>
        <p><b>Message: </b>{msg} </p>
      </div>
      <div className="filter">🔎
        <input type="text" placeholder='Filter' onChange={handleFilter} />
      </div>

      <div className="postItems">

      {load ? <p>Loading...</p> : (showData.length>0 && showData.map((office, idx) => {
        return <div className="post" key={idx}>
          <p><b>Name: </b>{office.Name}</p>
          <p><b>Branch Type: </b>{office.BranchType}</p>
          <p><b>Delivery Status: </b>{office.DeliveryStatus}</p>
          <p><b>District: </b>{office.District}</p>
          <p><b>Division: </b>{office.Division}</p>
        </div>
      }))}
      </div>
    </div>
  )
}

export default PostList