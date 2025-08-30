const cityNames= ['Banglore', 'Gurgaon', 'Hyderabad', 'Delhi', 'Mumbai', 'Pune', 'Kolkata', 'Patna', 'Chennai', 'Ahmedabad', 'Chandigarh', 'Jaipur' ]

export default function Footer(){



      return(
            <>
            <div className="mt-20 mb-10 w-full">
                  <img className="w-[95%] mx-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="Header-Image"/>
                  
                  <h1 className="text-2xl font-bold mt-20 ml-32">Cities with Food delivery</h1>
                  <div className="flex flex-wrap max-w-[85%]  ml-24">
                        {
                        cityNames.map((city,index)=>(
                              <div 
                              className="h-14 w-64 flex border justify-center items-center ml-10 mt-10 rounded-2xl hover:bg-red-600 hover:cursor-pointer hover:text-white" 
                              key={index}
                              >
                                    {`order food online in `+city}
                              </div>
                        ))
                        }
                  </div>

                  <h1 className="text-2xl font-bold mt-20 ml-32">City with groceries delivery</h1>
                  <div className="flex flex-wrap max-w-[85%]  ml-24">
                        {
                              cityNames.map((city,index)=>(
                                    <div
                                    className="h-14 w-[280px] flex border justify-center items-center ml-8 mt-10 rounded-2xl hover:bg-red-600 hover:cursor-pointer hover:text-white"
                                    key={index}
                                    >
                                          {'Order groceries delivery in '+city}
                                    </div>
                              ))
                        }
                  </div>
            </div>
            </>
      )
}