import { adjustBtn } from "../structure";

function RangeInput() {

     const btn = (e, i) => {
          return (
               <button 
                    key={e} 
                    className={`w-1/2 rounded-t-xl ${i == 1 && "bg-slate-400" }`
               }>
                    {e}
               </button>
          )
     }

     return (
          <div className='flex flex-col justify-around w-full h-20'>

               <div className='flex justify-between w-1/2 h-1/3'>
                    { adjustBtn.map((b, i) => btn(b, i)) }
               </div>

               <div className='bg-slate-400 flex-grow flex justify-center p-3 rounded-b-xl rounded-r-xl'>
                    <input className='flex-grow' type="range" />
               </div>
          </div>
     );
}

export default RangeInput;
