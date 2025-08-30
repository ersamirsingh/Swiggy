

export default function Genie(){


      return(
            <>
            <div className="ml-[15%] max-w-[60%] bg-gray-200 px-10 py-5 mt-5 mb-5 rounded-xl">
                  <div className="mt-[60px] bg-[#282c3f] rounded-xl pt-3 relative mx-auto items-center">
                        <img className="rounded-xl h-[220px]" src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_3072,e_sharpen:100/Genie_2_0_Assets/LandingPage/Genie_Masthead/small_unavailable_mh.png" alt="" />
                  </div>
                  <div className="p-7 flex gap-10 mt-10 bg-white rounded-2xl">
                        <img className="rounded-xl h-12 w-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/Genie_2_0_Assets/HDFC%20logo%20badge.png" alt="" />
                        <span>
                              <div className="text-2xl text-gray-600 font-bold">Extra 10% cashback</div>
                              <div className="text-gray-500">With swiggy HDFC card | above 10%</div>
                        </span>
                  </div>
                  <div className="p-7 gap-10 mt-10 bg-white rounded-2xl">
                        <p className="text-xl font-bold">Pick up or send anything</p>
                        <p className="text-gray-500">sit back, relax and let Genie do the rest.</p>
                        <input 
                        className="bg-gray-300 text-white text-center font-bold my-2 h-[3rem] w-[90%] hover:bg-gray-300 hover:text-black" 
                        placeholder="Set Pick up & Drop location" 
                        />
                  </div>
                  <div className="p-10 mt-10 bg-black rounded-2xl relative h-32 w-full text-white">
                        <p className="absolute top-[20px] left-[80px] text-gray-500 font-bold">company</p>
                        <p className="absolute bottom-[10px] left-[80px]">About us</p>
                        <p className="absolute bottom-[20px] right-[80px]">Instamart</p>
                  </div>
            </div>
            </>
      )
}