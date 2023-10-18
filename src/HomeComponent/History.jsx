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
        <div className='container history-main'>
               <table className='table table-hover table-history'>
                  <thead>
                    <tr>
                      <th>Suggested Color</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  {data.length > 0 ?(

                    data.map((item) => 
                        
                          <tbody key={item._id}>
                            <tr>
                              <td>{item.color}</td>
                              <td>{item.date}</td>
                              <td>{item.time}</td>

                            </tr>
                          </tbody>
                    )

                    
            ):(<tr>
            <td colspan="3">Data History Not Exist</td>
            </tr>)}
            </table>


        </div>

    </div>
  )
}

export default History