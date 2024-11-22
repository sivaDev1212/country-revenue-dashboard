import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { Avatar } from 'primereact/avatar';

const DashboardLayout = ({ children, country, setCountry, countries }) => {
  const [visible, setVisible] = useState(true);
  const [curContry, setCurContry] = useState({});
  
  var currentContry= ''; 
  // localStorage.setItem('contry', 'USA');
 const changeLang = (cnt)=>{
    localStorage.setItem('contry', cnt);
    currentContry= localStorage.getItem('contry');
    setCountry(cnt);
    setCurContry(countries.filter(ele=> ele.value == currentContry))
  
 }

//  var ownCuntry =curContry[0]
//  console.log('currrrrrrr',curContry[0]);
 
  return (
    <div className="p-grid">
      {/* Sidebar */}
      {/* <button onClick={() => setVisible(true)}>Open Sidebar</button> */}
      <Sidebar visible={visible} onHide={() => setVisible(false)} className="p-sidebar-sm">
        <ul className="p-list-none">
          <li><i className="pi pi-home"></i></li>
          <li><i className="pi pi-chart-line"></i></li>
          <li><i className="pi pi-user"></i></li>
        </ul>
      </Sidebar>

      {/* Top Bar */}
      <div className="p-col">
        <Menubar
          start={<div>
            <button
              className="p-button p-button-text p-mr-3"
              onClick={() => setVisible(!visible)}
            >
              <i className="pi pi-bars"></i>
            </button>
            <h3>Dashboard</h3>
          </div>}
          end={
            <div className="p-d-flex p-ai-center">
              <Dropdown
                value={country}
                options={countries}
                onChange={(e) => changeLang(e.value)}
                placeholder="Select Country"
                className="p-mr-3"
              />
              <Avatar icon="pi pi-user" shape="circle" />
            </div>
          }
        />
        {/* Main Content */}
        <div className="p-m-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
