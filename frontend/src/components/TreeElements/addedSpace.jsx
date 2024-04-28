import PropTypes from "prop-types";

function addedSpace({dashboard, shape}) {
     const baseCSS = `border-2 ${dashboard && "border-dashed"} border-zinc-700 cursor-pointer hover:bg-black hover:bg-opacity-30`

     const shapeCSS = {
          1: 'w-60 h-16',
          2: 'w-28 h-28 rounded-full',
          3: 'w-60 h-16 rounded-full'
     }

     return (
          <div 
               onClick={dashboard} 
               className={`${baseCSS} ${shapeCSS[shape]}`} 
          />
     );
}

addedSpace.propTypes = {
     dashboard: PropTypes.func.isRequired,
     shape: PropTypes.number
};

export default addedSpace;



