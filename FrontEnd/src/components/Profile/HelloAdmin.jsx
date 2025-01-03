import { useEffect } from 'react'
import React from 'react'
import AdminContext from '../../contexts/admin/AdminContext'
import { useContext } from 'react'

const HelloAdmin = () => {
    const context = useContext(AdminContext);
      setTimeout(() => {
        context.fetchAdmin();
    }, [])
    
  return (
    <div className='text-white text-3xl font-bold'>Hello {context.admin.name}</div>
  )
}

export default HelloAdmin;