import { useState } from 'react'
import './App.css';
import profil from'./components/a.png'
import { Navigation } from'./components/navigation.jsx'
import { Reseau } from './components/reseau.jsx'
import { Presentation } from './components/presentation.jsx'
import { Profil } from './components/profil.jsx'
import { Skill } from './components/skill.jsx'
import { Moi } from './components/moi.jsx'
import { Footer} from './components/footer.jsx'
import html from './components/html.png'
import css from './components/css.png'
import php from './components/php.png'
import javascript from './components/javascript.png'


function App() {
  return (
    <>
     <Navigation id='nav'/>
     <Description/>
     <Reseau/>
      <div className='flex gap-5 pt-5  md:pt-12 pb-5 items-center ml-4 md:ml-40'>
      <a href='#Contact'><button className=' button flex gap-2  border-1 rounded-xl p-2 md:p-2 md:px-10 text-blue-950 font-bold  bg-white ' >CONTACTER MOI <svg className='' xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg></button></a>
      <a href='https://drive.google.com/file/d/1wj8NEaPjJaPBknsqUSG1lt4v-wDRmsHz/view?usp=sharing'><button className=' button flex gap-2 border-1 rounded-xl p-2 md:p-2 md:px-10 text-white font-bold background-rgb(0,212,255)' >TELECHARGER CV  <svg  xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="M480-336 288-528l51-51 105 105v-342h72v342l105-105 51 51-192 192ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72h432v-72h72v72q0 29.7-21.16 50.85Q725.68-192 695.96-192H263.72Z"/></svg></button></a>
      </div>
      <Moi/>
      <Skill a={html} a1='html' b={css} b1='css' c={php} c1='PHP' d={javascript} d1='Javascript'/>
      <Footer/>
   
    </>
  )
}
function Description(){
  return (
  <div className=' flex flex-col md:flex-row-reverse gap-10 mt-10 '>
    <Profil src={profil}/>
    <Presentation/>
  </div> )
}
export default App
  