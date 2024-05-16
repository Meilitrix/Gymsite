
import React from 'react';
import Vec1 from '../Components/Assets/Grou.png';
import Vector1 from '../Components/Assets/Vector1.png';


import backgroundImage from '../Components/Assets/Backimg.png';

const Navbar = () => {
  return (
    <div className='bg-[#373737]' style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}>
      <nav className='relative navbar my-1 h-screen '>
        <header className="text-gray-600 body-font">
          <div className="relative container max-w-full flex flex-wrap p-5 flex-col md:flex-row">
            <a className="flex title-font font-medium items-center mb-4 md:mb-0">
              <div className='absolute overflow-hidden'>
                <img className='object-cover ml-3 text-xl w-[151px] h-[65px]' src={Vec1} alt="logo" />
              </div >
            </a>
            <nav className="ml-auto my-7 font-[700] text-[25px] flex flex-wrap text-base ">
              <a className="na">Home</a>
              <a className="na">Store</a>
              <a className="na">Blog</a>
            </nav>
            <div className='relative'>
              <input type="text" value={'Search'} className=' items-center h-[49px] w-[305px] p-2 opacity-30 rounded-full m-4  bg-gray-500 bg-opacity-47 border-0  text-base  ' />
              <div>
                <a><img className='absolute size-8 right-6 top-6' src="https://s3-alpha-sig.figma.com/img/b23c/9eb9/54eb32804fbfa78a847f2f858f2aa8f7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMy7xEiUs3Ujv2jzi8TYH5sT22uT2OINonQAOeRv12j643vKkXEpmjewzjiSSxACdUsGzGztEawULotOwuTLgeTWF-jxjJv-p0tWLQEUwQH-zEU8w65kdEM9c7a07NyDeMEjy9GEN2CrDmmVF-~7xpTz2G32Xzkp8PCnHvQJJlXO4llJIGzRgHexgTB32~ag78WqEOvB0yxLy1WTbsLwQ3YEmGRH07CneSb-dDDjCrfStDv9okPAi3e-iShadcYU2uQGHJK-9Vz4F7XH0f0Ef6JCc4m1feZIigbWC7xPAwI37hquRxl4hx69YuB8wfWm6lalz0c6vZesQbuLp~p0~A__" alt="" />
                </a>
              </div>
            </div>
            <button className="cart items-center bg-gray-500 bg-opacity-47 border-0 p-2 m-4  hover:bg-gray-200 rounded-full hover:text-yellow-500 ">
              <img src={Vector1} alt="" className="object-contain h-[44px] w-[45px]" />
              <span className="badge">3</span>
            </button>
            <div className='flex flex-col items-center mt-auto mx-48 my-auto '>
              <h1 className='maintext font-bold text-[128px] stroke-text mt-60  flex-auto items-center'>CHANGE</h1>
              <h1 className='maintext font-bold  text-[96px]  text-white'>YOUR LIFESTYLE</h1>

            </div>

          </div>

        </header>
      </nav>
      <div className="w-1225 h-183 rounded-lg p-6 mt-40">
        <div className=" mx-6 px-2 w-auto flex h-[183px] ">

          <div className="frontcard flex rounded-l-3xl border-r-8 border-yellow-500">
            <div className=' relative'>
              <img className='absolute w-[76.83px] h-[72.8px]  rotate-[90deg]' src="https://s3-alpha-sig.figma.com/img/c686/c980/6ad7ab7329d1649fef021f573ad3eba0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWpbqEtzcT1tOQ5mYD5FxPmIy2upk932YzSYncBmKiBFOob6iJLiUhMFyTqNIojy74FBbkkplkxOB9HWlU7Zjpvym5GsIYzJXca~Mz~Hp3DDtojiPo4bgJIH1Ii1Po4ELOnkSCvvrgSIkXzSbo4CjE4TQkrOA5oQfngU3wbwSGACw3DF3s1EfwaWACqJBNkEpGT1l2J6lgYLSfS4YiA~F1-Vnp80iSFtAea9aeN1jXX7xcuYCZsXy7TL0A-xECrhQyT2QJ38d6420Wq3iv-RSCJdlOwT7f4k236VFg4kQIgCDaAZoyARGBn~iUNxb4JcUqPxkj8i-ACy-ysiPG8Z3g__" alt="" />
              <img className='relative w-[76.83px] h-[72.8px] ' src="https://s3-alpha-sig.figma.com/img/c686/c980/6ad7ab7329d1649fef021f573ad3eba0?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWpbqEtzcT1tOQ5mYD5FxPmIy2upk932YzSYncBmKiBFOob6iJLiUhMFyTqNIojy74FBbkkplkxOB9HWlU7Zjpvym5GsIYzJXca~Mz~Hp3DDtojiPo4bgJIH1Ii1Po4ELOnkSCvvrgSIkXzSbo4CjE4TQkrOA5oQfngU3wbwSGACw3DF3s1EfwaWACqJBNkEpGT1l2J6lgYLSfS4YiA~F1-Vnp80iSFtAea9aeN1jXX7xcuYCZsXy7TL0A-xECrhQyT2QJ38d6420Wq3iv-RSCJdlOwT7f4k236VFg4kQIgCDaAZoyARGBn~iUNxb4JcUqPxkj8i-ACy-ysiPG8Z3g__" alt="" />
           </div>
            <h1 className='fct'> Quality Equipments</h1>
          </div>
          <div className="frontcard flex ">
            <img className='w-[88px] h-[83px] ' src="https://s3-alpha-sig.figma.com/img/27f8/fe44/f89e21262158a0a0a45a65eb09b1512c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dtg3UARg8M-xy~adhNAStVhxJGKxkA78vhz6ilDqDI8kXxieY1WwD8PWxWpFJinFHmG5Ale1VK96grZ252CN2e7syfZmQy-fqCtRQoPn39clTVMkED0SGgamRwtN~LAQRfos0ddFDSN12SrBSL23dzB1~GUIai9cgEXVKWF-IAc~eijP-ZinIdg-9tjpc~pVxvBpevQT9Q-EvWREqz2oZk2f-28RX9D66-9816aDRRXBj~sjRvHz6wXRddc6VQsq25JxR6C1ZaChn9ArxN5vg6-j4X0NJzOjU30qoQPPLuz8CCKNMXxzN-EKUaJHVoR9DiNml391HLlYZMI-ftH9jg__" alt="" />
            <h1 className='fct'>Weight Loss</h1></div>
          <div className=" frontcard rounded-r-3xl border-l-8 border-yellow-500 flex">
            <img className='w-[76px] h-[73px] ' src="https://s3-alpha-sig.figma.com/img/c4c2/4de5/2473a7c030fe62a8cab7dee5491c37db?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eoJ0hbVz5ex112kZIycPxC4JmCWuhry7N3blI6QEyY~ANGyKLMOd63PQ5Wx6G4OedpMPMK-yPvPosTCa0naDGKjUVcp2e5QrENLrgXksM3nOTqTW-VSF9krwjpbLBXu8hq7G-0zP-1GYjdJhW61XE9EeEjLSOTpARObPAFLzE8-MVSGhhyimyRr2xdcHiabdCnlKT2uB9v4OL53HWa5m8CHFvfkvxDbICxMN80K2TZBu-YGPNMjHCt5C5B7ZH1Vdnt2x9FL~DkPiJCeo8yRWHd3BBXrovosv63Yjq~va63Ujjxu4UObXTKzjlzMXx1SaevM1ExwzTXZc0QoovGrNrw__" alt="" />
            <h1 className='fct '>Diet Chart</h1></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

