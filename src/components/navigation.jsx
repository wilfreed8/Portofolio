export function Navigation({id}){
    return(
        <div id={id} className=" flex   item-align  content-center border-none pt-4   md:font-bold md:border-1 md:text-xl md:pl-60 md:pt-6 " data-aos="zoom-in-left" data-aos-duration="1000">
            <ul typeof="none" className="flex   border-1 border-blue-500  rounded-2xl px- content-center  gap-2 md:gap-20 m-auto shadow-xs shadow-cyan-500 ">
                <a href="#Contact"><li>Acceuil</li></a>
                <a href='#Propos'><li >A propos</li></a>
                <a href='#Projet'><li>Projets</li></a> 
                <a href="3Contact"><li>Contact</li></a> 
            </ul>
        </div>
    )
    
}