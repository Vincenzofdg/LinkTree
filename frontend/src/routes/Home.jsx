import {useContext, useEffect} from 'react'
import Context from '../context/Context';
import Menu from '../components/menu';
import DashBoard from '../components/Painel01';
import PalletMenu from '../components/Painel02';

import Phone from '../components/Phone';

function Home() {
     const { current, menus, global, setGlobal, setMenus } = useContext(Context);

     useEffect( ()=> console.log(global), [global]) 

     // useEffect(() => console.log(current), [])

     return (
          <>
               <Menu />              
               <div className='flex flex-row'>
                    { (menus[0] && !menus[1]) && <DashBoard state={current} /> }
                    <div className='h-screen flex-grow flex justify-center items-center'>
                         <Phone global={global} action={setMenus} />
                    </div>
                    { (!menus[0] && menus[1]) && <PalletMenu action={setGlobal} value={global.bgColor} /> }
               </div>
          </>
     );
}

export default Home;