import React from 'react'
import vec1 from '../Components/Assets/Grou.png'
const Footer = () => {
  return (
    <div>
        <footer class="text-white bg-[#636363] border-t-4 border-yellow-400 ">
    <div class="container px-5 py-24 w-full flex md:items-center lg:items-start md:flex-row md:flex-nowrap  flex-col">
     
     
      <div class="w-64  left-32 relative flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <img src={vec1} alt="" />
        <p class="mt-2 text-md text-justify">Exercise and fit yourself <br/> This is Best Store For you</p>
      </div>

      <div class="flex-grow  space-2 flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium tracking-widest text-sm mb-3">Information</h2>
            <nav class="list-none mb-10">
                <li><a class="info">Home</a></li>
                <li><a class="info">About Us</a></li>
                <li><a class="info">Store</a></li></nav></div>
        
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class=" font-bold text-white text-sm mb-3">SUPPORT</h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-white hover:text-gray-800">Blog </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-800">Reviews </a>
            </li>
            <li>
              <a class="text-white hover:text-gray-800">Products</a>
            </li>
            
          </nav>
          
        </div> 
        
      </div>
      
      <div className='mx-7'>


<h2 class="title-font font-medium text-sm mb-3">NEWSLETTER</h2>
<p>Subscribe to our newsletter and amazing new updates</p>
<div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input type="text" id="footer-field" name="footer-field" className="relative h-12 w-64 bg-gray-100 bg-opacity-50 rounded-3xl border " />

                    <button className='absolute border-0 py-2 px-6 bottom-1 left-32 rounded-full  font-bold   bg-yellow-500 '>Subscribe</button>

            </div>
        </div>
 
</div>
    </div>
div
    <div class=" border-4 border-t-yellow-400">
      <div class="container justify-center mx-auto py-4 px-5 flex ">
        <p class=" text-sm text-center sm:text-left">@2023 GymMiniStore
        </p>
       
      </div>
    </div>
  </footer>
  </div>
    
  )
}

export default Footer