import React from 'react';
import './App.css';
import Adresse from './component/profile/Adresse';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/Profilephoto';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
     <Adresse/>
     <FullName/>
    </div>
  );
}

export default App;
