import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from './components/DashboardLayout';
import StatCards from './components/StatCards';
import SalesOverview from './components/SalesOverview';
import SalesByRegion from './components/SalesByRegion';
import RegisteredUsers from './components/RegisteredUsers';
import Integrations from './components/Integrations';

const App = () => {
  var [country, setCountry] = useState('GER');
  const [countries, setCountries] = useState([]);
  const [stats, setStats] = useState({});
  const [salesOverview, setSalesOverview] = useState({});
  const [salesRegion, setSalesRegion] = useState({});
  const [users, setUsers] = useState({});
  const [integrations, setIntegrations] = useState([]);
  // localStorage.setItem('contry', 'GER');
  // var currentContry = localStorage.getItem('contry');
  // country = currentContry;
  console.log('country',country);
  
  useEffect(() => {
    const savedCountry = localStorage.getItem('contry') || 'USA';
    setCountry(savedCountry);
    // Fetch data
    axios.get('/assets/countries.json').then((res) => setCountries(res.data.map((c) => ({ label: c.name, value: c.id }))));
    setTimeout(() => {
      axios.get('/assets/stats.json').then((res) => setStats(res.data[country]));
    }, 100);
    axios.get('/assets/salesOverview.json').then((res) => setSalesOverview(res.data[country]));
    setTimeout(() => {
      axios.get('/assets/salesRegion.json').then((res) => setSalesRegion(res.data[country]));

    }, 100);
    axios.get('/assets/users.json').then((res) => setUsers(res.data[country]));
    axios.get('/assets/integrations.json').then((res) => setIntegrations(res.data));
    
  }, [country]);
  
  return (
    <DashboardLayout country={country} setCountry={setCountry} countries={countries}>
      <StatCards stats={stats} />
     
      <SalesOverview data={salesOverview} />
      
      <SalesByRegion regions={salesRegion?.regions} sales={salesRegion?.sales} />
      <RegisteredUsers users={users} />
      
      <Integrations integrations={integrations} />
    </DashboardLayout>
  );
};

export default App;
