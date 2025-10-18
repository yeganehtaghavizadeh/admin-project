import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null)

  useEffect(() =>{
    axios.get("https://eapi.vizitonline.com/manager/employees/attendance/list/").then((Response)=>{
      setData(Response.data);
      setLoading(false);
    })
    .catch((err) => {
      setError("Error receiving data from the server.");
      setLoading(false)
    })
  },[])

 return (
    <div className="container">
      <header className="header">
        <h1>پنل مدیریت</h1>
        <button className="add-btn">افزودن کارمند +</button>
      </header>

      <section className="card">
        <h2>تاریخچه ورود و خروج کاربران</h2>
        <table>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام کامل</th>
              <th>نوع عملیات</th>
              <th>زمان</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) =>(
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.employee_fullname}</td>
              <td>{item.action_type_display}</td>
              {/* <td>{item.action_type_displaye}</td> */}
              <td>{new Date(item.timestamp).toLocaleString("fa-IR")}</td>
              <td>{item.is_manual_display}</td>
            </tr>))}
            
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App
