import { useContext, useEffect } from "react";
import Context from "../../context/Context";
import PropTypes from "prop-types";
import { shapes as structure } from "../../structure";

function Shapes({current, action}) {
     const {information, setInformation} = useContext(Context);

     useEffect(() => {
          action(prev => ({
               ...prev,
               shape: information.shape
          }))
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [information])


     const shapeForm = (shape, i) => {
          const diff = {
               rectangle: 'shapes_rectangle',
               circle: 'shapes_cicle',
               rounded: 'shapes_rounded'
          };
          
          const id = i + 1;
          const css = `${current.shape === id ? 'bg-slate-800' : 'bg-slate-200'} hover:bg-slate-800 ${diff[shape]}`
          const handleClick = () => setInformation(prev => ({...prev, shape: id}))

          return <div key={shape} onClick={handleClick} className={css} />
     }

     return (
          <div className="painel01_shapes">
               { structure.map((shape, i) => shapeForm(shape, i)) }
          </div>
     );
}

Shapes.propTypes = {
     action: PropTypes.func.isRequired,
     // current: PropTypes.object.isRequired
};

export default Shapes;
