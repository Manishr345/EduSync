import { useEffect } from 'react'
import React from 'react'
import AdminContext from '../contexts/admin/AdminContext'
import { useContext } from 'react'

const HelloAdmin = () => {
    const context = useContext(AdminContext);
    useEffect(() => {
      context.fetchAdmin()
    
      
    }, [])
    
  return (
    <div>{context.name}</div>
  )
}

export default HelloAdmin;