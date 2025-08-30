

export default function Shimmer(){


      return(
            <>
            <div className="max-w-[90%] max-h-[180px] mt-16 ml-20 mx-auto flex flex-wrap justify-center gap-4 overflow-hidden">
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
                  <div>
                        <div className="h-[140px] w-[160px] bg-gray-200 rounded-4xl"></div>
                        <div className="h-[15px] w-[160px] bg-gray-200 rounded-2xl mt-4"></div>
                  </div>
            </div>

            <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5 justify-center">

                  {Array.from({ length: 36 }).map((_, index) => (
                        <div key={index} className="max-w-[280px] mb-2">
                        
                              <div className="w-70 h-45 rounded-xl bg-gray-300"></div>
                              <div className="w-[95%] mx-auto mt-3">
                                    <div className="w-full h-4 bg-gray-300"></div>
                                    <div className="w-full h-5 bg-gray-300 mt-2"></div>
                                    <div className="w-full h-5 text-gray-300 mt-2"></div>
                              </div>
                        
                        </div>
                  ))}
            </div>
            </>
      )
}