export function Presentation({id}){
    return(
    <div id={id} className='flex flex-col md:float-right gap-4 md:gap-6' >
      <div className='flex  pt-5 pl-5' >
       <h1>
        <p className='text-6xl md:ml-[-170px] md:text-7xl font-bold first-letter:text-7xl' data-aos="zoom-in-left" data-aos-duration="1000">Developpeur</p>
        <p className='text-6xl pt-2 md:text-7xl font-bold md:ml-8' data-aos="zoom-in-right" data-aos-duration="1000">Web Full-Stack 👋</p></h1>
      </div>
      <div >
      <p className='text-1xl pl-5 md:text-2xl md:font-sm text-center' data-aos="zoom-out-left" data-aos-duration="1000">Salut, je suis Francois ADJARO. Un passionné de développement Full-Stack  et de l informatique en General 📍
      . La volonté d'apprendre coule dans mes veines tout autant que la volonté de partager le savoir.</p>
      </div>
    </div>)
}