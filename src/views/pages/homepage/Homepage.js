/* eslint-disable */
import React, { useEffect, useState } from 'react';
// import  {getHomePgeData}  from 'src/views/api/api';
import OdooContentComponent from './OdooContentComponent';

const Homepage = () => {
  const [homePageData, setHomePageData] = useState('');

  const loadHomePageData = async () => {
    try {
      // const response = await getHomePgeData();
      // console.log(response.data, "html home page");
      setHomePageData(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    loadHomePageData();
  }, []);

  return (
    <div>
      <h1>Odoo Content</h1>
      <OdooContentComponent content={homePageData} />
    </div>
  );
};

export default Homepage;
