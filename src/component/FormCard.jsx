import React from 'react'

const FormCard = ({name, email, quote}) => {
  return (
    <div className=' bg-[#17B8A6] text-white w-[270px] h-[274px] flex flex-col py-4 items-center'>
      <h2 className=' font-semibold text-[25px] mb-5'>{name}</h2>
      <h2 className=' text-[10px] text-blue-600 font-bold'>Contact</h2>
      <h3 className=' text-[14px]'>{email}</h3>
      <div className=' w-[80%] text-center mx-auto text-[11px] mt-5 '>
        {quote}
      </div>
    </div>
  )
}

export default FormCard