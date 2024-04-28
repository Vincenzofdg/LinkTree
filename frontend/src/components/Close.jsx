import PropTypes from "prop-types";

function Close({action}) {
     return (
          <div onClick={action} className="w-auto h-auto cursor-pointer flex justify-center ">
               <div className="relative w-1 h-4 bg-black transform rotate-45 right-0" />
               <div className="relative w-1 h-4 bg-black transform -rotate-45 right-1" />
          </div>
     );
}

Close.propTypes = {
     action: PropTypes.func.isRequired,
};

export default Close;
