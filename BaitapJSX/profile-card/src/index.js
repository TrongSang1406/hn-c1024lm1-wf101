import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img
        className="avatar"
        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="avatar"
      />
      <div className="card--body">
        <div>
          <p className="text-header">Trong Sang</p>
          <p className="text-sub">
            HEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHE
          </p>
          <button className="btn third">FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
)