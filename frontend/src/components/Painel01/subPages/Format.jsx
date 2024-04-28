import PropTypes from "prop-types";
import Shapes from "../shapes";
// import RangeInput from '../RangeInput';

function Format({current, action}) {

     const bar = () => <div className="bg-black w-1/2 h-1 rounded-full mt-2 mb-5 bg-opacity-50" />

     return (
          <>
               <Shapes current={current} action={action}/>
               {bar()}
          </>
     )
}

Format.propTypes = {
     action: PropTypes.func.isRequired,
     // current: PropTypes.object.isRequired
};

export default Format;
