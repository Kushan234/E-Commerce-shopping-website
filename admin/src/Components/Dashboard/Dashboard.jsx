import React, { useEffect, useState } from 'react'
import chart from '../../assets/charts.png'
import group from '../../assets/group.png'
import items from '../../assets/items.png'
import './Dashboard.css'


export const Dashboard = () => {

  const [userCount, setUserCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('http://localhost:4000/user-count');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUserCount(data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };
    const fetchItemCount = async () => {
      try {
        const response = await fetch('http://localhost:4000/allproducts');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        setItemCount(products.length); // Set the number of items
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItemCount();
    fetchUserCount();
  }, []);



  return (
   
    <div className="dashboard">
     
    <div className="dashboard-admin">
    <h1>Dashboard</h1>
    
        <div className="dashboard-top">
            <div className="weekly-sales1">
            <h3>No Of Items</h3>
            <img src={items} alt="" />
            <p>{itemCount}</p>
            </div>

            <div className="weekly-sales2">
            <h3>Users</h3>
            <img src={group} alt="" />
            <p>{userCount}</p>
            </div>
        </div>
    </div>
    </div>
  )
}
