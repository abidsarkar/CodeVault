import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id);
  return (
    <div className='flex flex-col justify-center p-4 gap-2 '>
      <input className='bg-white text-black' type="text"
      value={paste[0].title}
      disabled />
      <textarea className='bg-white' name="" id="" rows={15} disabled
      value={paste[0].content}
      ></textarea>
    </div>
  )
}

export default ViewPaste