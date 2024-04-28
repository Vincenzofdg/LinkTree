import { useContext } from "react";
import Context from "../context/Context";

import DefaultBar from './TreeElements/Bar/Default';
import ContinuosBar from './TreeElements/Bar/Continuos';
import ItemToCreate from './ItemToAdd';

import { limit } from '../structure';

function Tree() {
     const {menus, current, elements} = useContext(Context);
     return (
          <div className={`${menus[0] && "grow"} flex flex-col items-center`}>
               <DefaultBar />
               { elements.map((element, i) => {
                    if (element === undefined) return
                    const keyShape = 'level-' + element.id;
                    const currentElement = i + 1;

                    if (currentElement > limit) return;
                    if (currentElement === limit) return <ItemToCreate key={keyShape} edited={element} />

                    return (
                         <div key={keyShape} className="flex flex-col items-center">
                              <ItemToCreate element={element} />
                              <ContinuosBar />
                         </div>
                    )
               }) }
          </div>
     )
}

export default Tree;