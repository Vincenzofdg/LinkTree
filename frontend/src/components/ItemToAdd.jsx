import { useContext } from "react";
import Context from "../context/Context";
import PropTypes from "prop-types";

import NewSpace from './TreeElements/NewSpace';

function Item({element}) {
     const { setMenus } = useContext(Context);
     const { shape, edited } = element;

     const handleClick = () => setMenus(prev => ([!prev[0], false]))

     return (
          <NewSpace
               dashboard={!edited && handleClick}
               shape={shape}
          />
     )
}

Item.propTypes = {
     element: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Item;
