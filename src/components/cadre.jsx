export function Cadre({src,titre}){
     return(
        <div className=' relative cadre w-[80px] h-[80px] md:w-[150px] md:h-[150px] border-1  rounded-xl   md:mx-2  '>
            <img src={src} className='  w-full h-full rounded-xl'></img>
            <p className="font-mono  font-bold text-cyan-500 absolute center md:ml-10 mt-4">{titre}</p>
        </div>
     )
}