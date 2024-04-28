import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Context from '../context/Context';
import TextInput from '../components/login/input';
import { login as loginStructure } from '../structure';
import SaveOnLocalStorage from '../hooks/SaveOnLocalStorage';
import { mockedUser as adm } from '../structure';

function Login() {
     const [submit, setSubmit] = useState(false);
     const { user } = useContext(Context);
     const navigate = useNavigate();

     useEffect(() => {
          const canPass = !!(user.email) && (user.password).length >= 8;
          canPass && setSubmit(true);
     }, [user]);

     const handleClick = () => {
          const checkEmail = user.email === adm.email;
          const checkPassword = user.password === adm.password;

          if (checkEmail && checkPassword) {
               SaveOnLocalStorage(user);
               navigate('home');
               return;
          }

          window.alert('Ops wrong user name or password!');
          return;
     };

     return (
          <div className="flex justify-center items-center w-screen h-screen">
               <form className='bg-violet-400 p-4 flex flex-col justify-around items-center w-2/4 h-2/4 rounded-3xl'>
                    {
                         loginStructure.map((e, i) => (
                              <TextInput
                                   key={'login-' + i}
                                   content={e}
                              />
                         ))
                    }
                    <div className='w-2/3 h-auto flex justify-between'>
                         <label className='block text-gray-500 font-bold my-4'>
                              <input type='checkbox' className='leading-loose text-pink-600' />
                              <span className='py-2 text-sm text-gray-600 leading-snug'>Remember Me</span>
                         </label>
                         <label className='block text-gray-500 font-bold my-4'>
                              <a className='cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400'>Forgot Password?</a>
                         </label>
                    </div>

                    <button
                         className={submit ?
                              "mt-3 text-lg font-semibold bg-gray-800 w-9/12 text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                              :
                              "mt-3 text-lg font-semibold bg-gray-800 w-9/12 text-white rounded-lg px-6 py-3 block shadow-xl"
                         }
                         onClick={handleClick}
                         disabled={!submit}
                    >
                         Login
                    </button>

               </form>
          </div>
     );
}

export default Login;
