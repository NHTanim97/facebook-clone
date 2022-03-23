import React from 'react';
import fbIcon from '../Images/fb.svg'
const Fb = () => {
    return (
        <div className='
        bg-gray-100
         h-screen
        w-screen'>

        <div className='
        flex
        mx-auto
        items-center
        justify-center'>

            {/* --------phone top side part--web left side part------------*/}
           <div className='w-1/3 mx-4  my-24'>
                <img src={fbIcon} alt="" className='w-80' />
                <p className='mx-8 text-2xl'>Facebook helps you connect and share with the people in your life.</p>
           </div>



             {/* --------phone bottom side part--web right side part------------*/}
           <div className='
           flex
           flex-col 
           bg-white
           p-4
           pb-4
           rounded-xl
           w-1/3
           text-lg
           my-24
           relative
           shadow-lg'>
                <input className='px-4 h-12 my-2 border border-1 border-gray-200 outline-blue-300 outline-1 rounded-lg'
                type="email"
                name="email"
                id=""
                placeholder='Email address or phone number'/>
                <input className='px-4 h-12 my-2 border border-1 border-gray-200 outline-blue-300 outline-1 rounded-lg'
                type="password"
                name="password"
                id=""
                placeholder='Password' />
                <button className='bg-blue-600 hover:bg-blue-700 text-white py-3 my-2 rounded-md font-bold cursor-pointer'>Log In</button>
                <span className='text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline'>Forgotten password?</span>
                <hr className='my-2' />
                <button className='bg-green-500 hover:bg-green-600 text-white py-3 my-2 rounded-md font-bold cursor-pointer w-fit mx-auto px-2'>Create New Account</button>

                <span className='absolute text-sm -bottom-12'><span className='font-bold hover:underline cursor-pointer'>Create a Page</span> for a celebrity, brand or business.</span>
           </div>
           </div>

           <div>

           </div>
        </div>
    );
};

export default Fb;