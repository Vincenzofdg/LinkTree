import { useState } from "react";
import PropTypes from "prop-types";
import Context from "./Context";

function Provider({ children }) {
     const [user, setUser] = useState({ email: '', password: ''});
     const [information, setInformation] = useState({})
     const [current, setCurrent] = useState(1)


     const [dashboardOn, setDashboardOn] = useState(false);
     const [menus, setMenus] = useState([false, false]);
     const [background, setBackground] = useState({open: false, content: ''});
     

     const [global, setGlobal] = useState({})
     const [elements, setElements] = useState([
          {
               id: 1, 
               type: 'profile',
               edited: true,
               page: 1,
               shape: 1
          },
          {
               id: 2, 
               edited: true,
               shape: 1
          },
          {
               id: 3, 
               edited: true,
               shape: 1
          },
          {
               id: 4, 
               edited: true,
               shape: 1
          },
          {
               id: 5, 
               edited: false,
               shape: 1
          }
     ]);

     const contextConteiner = {
          user, setUser,
          elements, setElements,
          menus, setMenus,
          dashboardOn, setDashboardOn,
          current, setCurrent,
          information, setInformation,
          background, setBackground,
          global, setGlobal
     };

     return (
          <Context.Provider
               value={contextConteiner}
          >
               {children}
          </Context.Provider>
     );
}

Provider.propTypes = {
     children: PropTypes.node.isRequired,
};

export default Provider;