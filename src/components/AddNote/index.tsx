import React from 'react';
import { Input } from 'antd';

const index = () => {
  return (
    <div className='bg-[#fff] w-full mt-5 h-auto rounded-lg  '>
      <div>
        <h1 className='text-[#141414] font-dmSans pl-5 font-semibold text-[16px] pt-3'>Note:</h1>
        <Input.TextArea 
          className='mt-1 border-none pl-5  placeholder-[#121212] font-dmSans font-normal text-[16px] ' 
          placeholder='Add a note' 
          rows={4} 
        />
      </div>
    </div>
  );
};

export default index;