import html from './html.png'
import css from './css.png'
import php from './php.png'
import javascript from './javascript.png'
import { Scroll } from './scroll.jsx'
export function Skill({}){
    return(
        <div className='mt-20 pb-15 mx-5 rounded-2xl border-1 border-blue-950 rounded-1xl shadow-md shadow-cyan-500' data-aos="zoom-in" data-aos-duration="1000">
      <h1 className='md:text-3xl pt-10 font-bold center'> SKILLS</h1>
      <Scroll a={html} a1='html' b={css} b1='css' c={php} c1='PHP' d={javascript} d1='Javascript'/>
     </div>
    )
}