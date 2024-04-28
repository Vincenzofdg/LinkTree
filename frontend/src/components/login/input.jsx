import { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context/Context';
// import Eye from '../../assets/eye.png'

const TextInput = ({ content }) => {
     const { setUser } = useContext(Context);
     const { type, placeholder } = content;

     const handleChange = ({ target: { value } }) => {
          const param = type.toLowerCase();
          setUser(prev => ({
               ...prev,
               [param]: value
          }));
     };

     return (
          <label className="flex flex-col w-2/4">
               <span className="block text-sm font-medium text-slate-900">{type}</span>
               <input
                    type={type === 'Email' ? 'email' : 'password'}
                    placeholder={placeholder}
                    onChange={handleChange}

                    className="mt-1 block w-full px-3 py-2 bg-white
                         border border-slate-300 rounded-md text-sm 
                         shadow-sm placeholder-slate-400
                         focus:outline-none 
                         focus:border-sky-500 
                         focus:ring-1 
                         focus:ring-sky-500
                         disabled:bg-slate-50 
                         disabled:text-slate-500 
                         disabled:border-slate-200 
                         disabled:shadow-none
                         invalid:border-red-500
                         invalid:text-red-600
                         focus:invalid:border-red-500 
                         focus:invalid:ring-red-500
                    "
               />
          </label>
     );
};

TextInput.propTypes = {
     content: PropTypes.shape({
          type: PropTypes.string.isRequired,
          placeholder: PropTypes.string.isRequired,
     })
};


export default TextInput;
