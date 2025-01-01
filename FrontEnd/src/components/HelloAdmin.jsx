import { useEffect } from 'react'
import React from 'react'
import AdminContext from '../contexts/admin/AdminContext'
import { useContext } from 'react'

const HelloAdmin = () => {
    const context = useContext(AdminContext);
    useEffect(() => {
      setTimeout(() => {
        context.fetchAdmin()
      }, 500);
    }, [])
    
  return (
    <div className='text-white text-3xl font-bold'>Hello {context.admin.name}</div>
  )
}

export default HelloAdmin;