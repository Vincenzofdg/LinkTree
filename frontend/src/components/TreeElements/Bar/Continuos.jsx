import { useContext } from "react";
import Context from "../../../context/Context";

function Continuos() {
     const {information} = useContext(Context);

     const handleClick = () => {
          // setCurrent(prev => prev + 1)
          console.log(information)
     }

     return (
          <div className="w-4/6 flex justify-center items-center relative">
               <div>
                    <div className='bg-zinc-800 w-1 h-5' />
                    <div className='border-2 border-dotted border-zinc-800 w-1 h-8' />
               </div>
               <div 
                    className="w-[30px] h-[30px] cursor-pointer absolute right-0"
                    onClick={handleClick}
               >
                    <div className="w-full h-full relative flex justify-center">
                         <div className="bg-black w-1 h-5 absolute top-0 rounded-2xl" />
                         <div className="bg-black w-5 h-1 absolute top-2 rounded-2xl" />
                    </div>
               </div>
          </div>
     );
}

export default Continuos;
