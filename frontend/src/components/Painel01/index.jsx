import {useContext, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import Context from '../../context/Context';

import Menu from './menu';
import Close from "../Close";

import Format from './subPages/Format';
import Text from './subPages/Text';
import Link from './subPages/Link';

function DashBoard({state}) {
     const {setMenus, setElements, elements} = useContext(Context);
     const [toUpdate, setToUpdate] = useState('');
     const current = elements[elements.length - 1];

     useEffect(() => {
          const elementToUpdate = elements[state - 1];
          setToUpdate(elementToUpdate);
     }, [])

     useEffect(() => {
          const newArray = [...elements];
          newArray[state - 1] = toUpdate
          setElements(newArray)
     }, [toUpdate])

     const handleClose = () => setMenus(prev => ([!prev[0], prev[1]]))


     const handleMultiplesPages = () => {
          if (current.page > 1) {
               if (current === 2) return <Text />
               return <Link />
          }

          return <Format current={current} action={setToUpdate} />
     }
     
     return (
          <div className="painel01_container">
               <div className='painel01_upper'>
                    <Menu current={current} action={setToUpdate} />
                    <Close action={handleClose} />
               </div>
               <div className={`painel01_content ${current.page !== 1 ? "rounded-2xl" : "rounded-b-2xl rounded-tr-2xl" }`}>
                    {
                         handleMultiplesPages()
                    }
               </div>
          </div>
     );
}

DashBoard.propTypes = {
     state: PropTypes.number.isRequired,
};


export default DashBoard;
