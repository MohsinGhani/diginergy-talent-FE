import React from 'react';
import CommonSwitch from '../shared/Switch';
import Image from 'next/image';
import supplierimg from '../../../public/assets/Upload-Picture (1).png';
import suppliersData from '../../shared/json/index.json';
import AddNote from '../AddNote';
import SuppliersNameTable from '../SuppliersNameTable/index'

const SuppliersIndex = () => {

  const handleSwitchChange = (id: number, checked: boolean) => {
    setData((prevData: any[]) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, status: checked ? "active" : "deactive" }
          : item
      )
    );
  };
  

  return (
    <div className=" px-4 sm:px-6 lg:px-36  pt-8 lg:w-auto bg-[#F8F8F8] h-auto">
      {suppliersData.SuppliersName.map((supplier) => (
        <div key={supplier.id} className="h-auto pb-4 rounded-lg bg-[#ffff] pt-4 pl-5 flex flex-col sm:flex-row items-center  mb-6">
          <div className=" sm:w-1/4 md:w-1/4 lg:w-1/6 ">
            <Image
              src={supplierimg}
              alt="Supplier Image"
              width={240}
              height={240}
            />
          </div>

          <div className="ml-0 sm:ml-4 w-full sm:w-2/2 md:w-3/4 lg:w-5/6 mt-4 sm:mt-0">
            <div className="flex items-center gap-5 ">
              <h1 className="font-semibold text-2xl font-dmSans text-[#141414]">{supplier.tittle}</h1>
              <div className="flex items-center gap-2">
  <CommonSwitch
    checked={supplier.status === "active"} 
    onChange={(checked) => handleSwitchChange(supplier.id, checked)} 
  />
  <p className="text-[#000000D9] font-dmSans font-normal text-base">
    {supplier.status.charAt(0).toUpperCase() + supplier.status.slice(1)} 
  </p>
</div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-4 sm:align-middle">
              <div>
                <h3 className="text-[#141414B2] font-normal font-dmSans text-[14px] leading-loose">Location</h3>
                <p className="text-[#121212] font-dmSans font-normal leading-7">{supplier.location}</p>
              </div>
              <div className='lg:ml-8'>
                <h3 className="text-[#141414B2] font-normal font-dmSans text-[14px] leading-loose">Founded in</h3>
                <p className="text-[#121212] font-dmSans font-normal leading-7">{supplier.foundedin}</p>
              </div>
              <div>
                <h3 className="text-[#141414B2] font-normal font-dmSans text-[14px] leading-loose">Website</h3>
                <p className="text-[#121212] font-dmSans font-normal leading-7">{supplier.Website}</p>
              </div>
              <div>
                <h3 className="text-[#141414B2] font-normal font-dmSans text-[14px] leading-loose">Email</h3>
                <p className="text-[#121212] font-dmSans font-normal leading-7">{supplier.email}</p>
              </div>
              <div>
                <h3 className="text-[#141414B2] font-normal font-dmSans text-[14px] leading-loose">Phone no</h3>
                <p className="text-[#121212] font-dmSans font-normal leading-7">{supplier.phonenumber}</p>
              </div>
              <div>
                <h3 className="text-[#141414B2] font-normal font-dmSans text-[14px] leading-loose">Address</h3>
                <p className="whitespace-nowrap text-[#121212] font-dmSans font-normal leading-7">{supplier.address}</p>
              </div>
            </div>
          </div>
       
        </div>
        
      ))}
             <AddNote/>
             <div className='mt-7'>
             <SuppliersNameTable/>

             </div>

    </div>
  );
};

export default SuppliersIndex;


