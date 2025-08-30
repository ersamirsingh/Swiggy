


export default function DineCard({ restData }) {


      return (
            <>
            <div className="w-[300px] rounded-lg shadow-md bg-white mx-2 my-4 flex-shrink-0">
            <a target="_blank" href={restData.cta.link}>
                        <div className="relative">
                              <img className="w-full h-48 object-cover overflow-hidden rounded-t-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/" +restData?.info?.mediaFiles[0]?.url} alt="Restaurant" />
                              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                              <p className="absolute bottom-2 left-2 text-xl text-white z-10">{restData.info.name}</p>
                              <p className="absolute bottom-2 right-2 text-xl text-white z-10">{restData?.info?.rating?.value}</p>
                        </div>

                        <div className="p-4">
                              <div className="text-black/60">
                                    {restData?.info?.cuisines[0] + " * " + restData?.info?.cuisines[1]}</div>
                              <div className="text-black/60">{restData?.info?.locationInfo?.formattedAddress}</div>
                              <div className="flex justify-between text-black/60 mt-1">
                                    <span>{restData?.info?.costForTwo}</span>
                                    <span>{restData?.info?.locationInfo?.distanceString}</span>
                              </div>

                              {restData?.info?.offerInfoV3?.vendorOffer?.title && (
                                    <div className="flex justify-center mt-10 w-full">
                                          <div className="bg-green-600 text-white px-4 py-2 rounded-md text-sm text-center w-full ">{restData?.info?.offerInfoV3?.vendorOffer?.title + " " + restData?.info?.offerInfoV3?.vendorOffer?.subtitle}</div>
                                    </div>
                              )}
                        </div>
                  </a>
            </div>
            </>

      )

}