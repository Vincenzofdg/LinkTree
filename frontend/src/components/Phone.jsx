import Tree from './Tree';
import Edit from '../assets/edit.png'

function Cellphone({ global, action }) {

     const handleClick = () => action(prev => ([false, !prev[1]]));

     return (
          <div style={{backgroundColor: global.bgColor}} className={'w-[470px] h-[95%] rounded-3xl border-2 border-solid border-zinc-700 flex flex-col items-center relative'}>
               <div className='w-1/2 bg-zinc-700 h-4 mb-2 rounded-b-lg' />
                    <Tree />
               <img onClick={handleClick} className='w-[30px] h-[30px] absolute bottom-5 right-6 cursor-pointer' src={Edit} alt="Edit Logo" />
          </div>
     );
}

export default Cellphone;
