import PropTypes from "prop-types";
import { menuPainel01 as structure } from "../../structure";

function Menu({current, action}) {

     const btn = (item, i) => {
          const id = i + 1;

          const css = `${current.page === id && "bg-black bg-opacity-20"} painel01_menu_btn`;

          const handleClick = () => action(prev => ({...prev, page: id}))
          
          return <button key={item} onClick={handleClick} className={css}>{item}</button>
     }

     return (
          <div className='painel01_menu'>
               { structure.map((item, i) => btn(item, i)) }
          </div>
     );
}

Menu.propTypes = {
     // current: PropTypes.object,
     action: PropTypes.func,
};


export default Menu;
