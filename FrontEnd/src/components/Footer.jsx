import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
            <div className='p-3 rounded-md text-center'>
              <h3 className="text-lg font-semibold mb-2">Institute Address</h3>
              <p>Crestwood Institute of Technology &nbsp;<span className='text-blue-400'>CIT</span>&nbsp;<br></br>
                Legacy Parkway
                Riverside Hills, NY 10118
                United States
              </p>
            </div>

            <div className='p-3 rounded-md text-center'>
              <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
              <p>Phone: 022 2887 0627</p>
              <p>Email: DavidMusk@crestwoodelite.edu</p>
            </div>

            <div className='p-3 rounded-md text-center'>
              <h3 className="text-lg font-semibold mb-2">Licenses & Legal</h3>
              <p>© 2025 Crestwood Institute of Technology. <br></br>All rights reserved.</p>
              <p>Licensed under EduSync Accreditation Board.</p>
              <p>
                <a href="#" className="text-blue-400 hover:text-blue-600">Privacy Policy</a> |
                <a href="#" className="text-blue-400 hover:text-blue-600">Terms of Service</a>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/pages/Thakur-College-of-Science-and-Commerce/360937107290972" className="text-white hover:text-gray-400">Facebook</a>
            <a href="https://x.com/tcscmumbai/status/1771499637020532966" className="text-white hover:text-gray-400">Twitter</a>
            <a href="https://www.instagram.com/tcscmumbai/?hl=en" className="text-white hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer
