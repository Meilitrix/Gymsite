import React from 'react'

const Bmicalc = () => {
  return (
    <div>
      <section class="text-white body-font overflow-hidden bg-[#373737] w-full">
      <h1 className='font-averia text-[64px] font-[400] justify-center flex  text-white '>Calculate Your BMI
           </h1>   <div className='bg-yellow-400 h-2 flex mb-10 w-40 left-64 relative '></div>

        <div class=" mx-auto py-6 flex justify-center">

          <div className='picture relative '>
            <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src="https://s3-alpha-sig.figma.com/img/b2d6/6b1f/1f27822fda66f0151900e7ff5a133a45?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PhC~M6IpMRoRU8VSsVeWYHeqTEyOPbKo3aPz6rFCpCJFyFXxFzeNEz0pmZUlQ0-F3FoewjblVoG2GaB6pyh8ZtVo30f7HBb3oJaV2lDUjEGcXKuL6HQEM-Y3ct1oyyDB8RnT3SbtHIcvFWgnENrRf~KE5429cyQs4KAyL01im-oPAHCaANKU2oVWYJz~MtTeLk2VPwtnE9ftC4~7Y8HcGDLXyF6XpS-dVpNcNMY9uuMRO1afO3R1nTYrcrMQ61j3Y0pF~j4PiLj0EWHG5nJ1~Cmk~ARmLeEmFgDh0EVmpRdVpPOL2UcNcL32qJnPtNlTIbd7RZCFnSHPnslBYRWEWQ__" />
          </div>
          <div>
            
            <div class=" w-[411px] lg:pl-10 lg:py-6 m-6 ml-36 lg:mt-0">

              <h1 class="text-white text-3xl title-font font-[700] font-serif mb-1">Advanced Calculator</h1>

              <div class="relative inline-block text-left">

                <div>
                  <button type="button" class="inline-flex  justify-center  rounded-md bg-white my-4 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="gender-menu-button" aria-expanded="true" aria-haspopup="true">
                    Gender
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div className="mr-8 gap-4 flex">
                    <input type="text" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-500" placeholder="Age" />
                  
                    <input type="text" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-500" placeholder="Weight" />
                  </div>
                </div>
                <div className="mt-4">
                  <input type="text" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-yellow-500" placeholder="Height" />
                </div>

                <div className="flex mt-4">
                  <button className="ml-auto text-[#101820] bg-[#FEE715] border-0 py-4 px-8 hover:bg-amber-500 rounded-3xl">Calculate</button>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold">Result:</p>
                  <p className="text-xl">________</p>


                </div>



               


              </div>


            </div>

          </div>

        </div>

      </section>


    </div>
  )
}

export default Bmicalc
