import {Cadre} from './cadre.jsx'
export function Scroll({a,a1,b,b1,c,c1,d,d1}){
    return(
        <div className='  overflow-hidden flex md:ml-50 w-full md:w-2/3 content-center  center gap-7  py-10 px-0' >
      <Cadre src={a} titre={a1} />
      <Cadre src={b} titre={b1}/>
      <Cadre src={c} titre={c1}/>
      <Cadre src={d} titre={d1}/>
      </div>
    )
}
