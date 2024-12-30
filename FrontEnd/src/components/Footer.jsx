import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-800 text-white py-10">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-2">College Address</h3>
              <p>6V4F+FPF, Thakur Rd, ठाकुर, Thakur</p>
              <p>Village, Kandivali East, Mumbai,</p>
              <p>Maharashtra 400101</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Contact Information</h3>
              <p>Phone: 022 2887 0627</p>
              <p>Email: ctchakraborty tcsc.edu.in</p>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">Licenses & Legal</h3>
              <p>© 2024 ABC College of Technology. All rights reserved.</p>
              <p>Licensed under XYZ Accreditation Board.</p>
              <p>
                <a href="#" class="text-blue-400 hover:text-blue-600">Privacy Policy</a> |
                <a href="#" class="text-blue-400 hover:text-blue-600">Terms of Service</a>
              </p>
            </div>
          </div>

          <div class="mt-8 flex justify-center space-x-6">
            <a href="https://www.facebook.com/pages/Thakur-College-of-Science-and-Commerce/360937107290972" class="text-white hover:text-gray-400">Facebook</a>
            <a href="https://x.com/tcscmumbai/status/1771499637020532966" class="text-white hover:text-gray-400">Twitter</a>
            <a href="https://www.instagram.com/tcscmumbai/?hl=en" class="text-white hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </footer>
      




    </>

  )
}

export default Footer
