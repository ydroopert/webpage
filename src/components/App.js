import './App.css';
import Header from './Header/Header'
import AboutMe from './Body/About_Me/AboutMe';
import Experience from './Body/Experience/Experience';
import Skills from './Body/Skills/Skills';
import { useState } from 'react';
import Contact from './Body/Contact/Contact';
function App() {
  const [language,setLanguage] = useState('en')
  function handleChange(){
      (language==='en')?setLanguage('tw'):setLanguage('en')
  }
  return (
    <div className="App">
      <Header lan={language} switch={handleChange}/>
      <AboutMe lan={language}/>
      <Experience lan={language}/>
      <Skills lan={language}/>
      <Contact lan={language}/>
    </div>
  );
}

export default App;
