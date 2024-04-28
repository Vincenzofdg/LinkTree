import {useContext} from 'react';
import Context from '../../context/Context';
import BackgroundColor from "./backgroundColor";
import Close from "../Close"

function PalletMenu({action, value}) {
     const {setMenus} = useContext(Context);

     const handleClose = () => setMenus(prev => ([prev[0], !prev[1]]))

     return (
          <div className="painel02_container">
               <Close action={handleClose} />
               <div className="painel02_content">
                    <BackgroundColor action={action} value={value}/>
               </div>
          </div>
     );
}

export default PalletMenu;
