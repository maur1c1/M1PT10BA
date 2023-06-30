import React from 'react';
import ContactUs from './components/ContactUs/ContactUs';
import CopyData from './components/CopyData/CopyData';
import InfoEnviada from './components/InfoEnviada/InfoEnviada';
import './home.css';

export const Home = ()=> {
   return (
      <div className='homeBg'>
         <ContactUs />
         <div className='dataDg'>
            <CopyData />
            <InfoEnviada />
         </div>
      </div>
   );
}
