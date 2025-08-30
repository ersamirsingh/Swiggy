import { Link } from "react-router"


export default function RestaurantCard({restInfo}){

    // console.log(restInfo);

    return (
        <>

        <Link to={'/city/delhi/'+restInfo?.info?.id}>
            <div className="max-w-[280px] mb-2 transition transform hover:scale-95 duration-100">
                <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
                <div className="w-[95%] mx-auto mt-3">
                    <div className="font-bold text-xl h-14">{restInfo?.info.name}</div>

                    <div className="flex gap-2 items-center">
                        <span className="text-lg">{restInfo?.info?.avgRating}</span>
                        <span className="font-semibold">{restInfo?.info?.sla?.slaString}</span>
                    </div>

                    <div className="h-7 text-gray-600 mt-1 overflow-hidden">{restInfo?.info?.cuisines?.join(" ")}</div>
                    <div className=" overflow-hidden">{restInfo?.info?.areaName}</div>
                </div>
            </div>
        </Link>
        </>
    )
}