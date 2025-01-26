export function Button({text,...props}){
    return (
        <button className=' button  border-1 rounded-xl p-2 px-10 text-blue-950 font-bold  bg-white ' >
            <p>{text} </p>
        </button>
    )
}