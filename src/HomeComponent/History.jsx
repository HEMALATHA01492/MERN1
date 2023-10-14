import React, { useEffect, useState } from 'react'
import TopNav from './TopNav'
import axios from 'axios';

function History({url}) {
    const [data,setData]=useState('');
    console.log(data)

    useEffect(() => {
        const token = window.localStorage.getItem("loggedInUser");
        const config = { headers: { authorization: JSON.parse(token) } };
        axios.get(`${url}/getHistory`, config)
        .then((res) => {
          setData(res.data);
          console.log(data)
        });
      }, []);
  return (
    <div>
        <TopNav />
        <div className='card'>
            {data.length > 0 ?(
                <ol>
                    {data.map((item) => 
                        <ul key={item._id}>
                          <li>Suggested Color: {item.color} ON {item.createdon}</li> 
                        </ul>
                    )
                    }</ol>
            ):(<div>
            <h4>Data History Not Exist</h4>
            </div>)}

        </div>

    </div>
  )
}

export default History