import React from 'react';
import img from "../../../assets/images/underline1.png";


const Menu = () => {
    return (
        <div className='bg-amber-100 pt-6'>

            <div className='mt-20 ml-16 '>
                <div>
                    <p className='text-xl italic my-2 text-red-600 font-semibold'>Food Item</p>
                    <h1 className='text-3xl my-2 font-bold'>OUR MENU</h1>
                    <img className='w-60 mt-2 mb-6 opacity-60' src={img} alt="" />
                </div>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                </div>
            </div>
        </div>
    );
};

export default Menu;