import { useState,useEffect } from "react"
import { useParams } from "react-router"
import MenuCard from "./MenuCard"
import { Link } from "react-router"


export default function RestaurantMenu(){

      const {id} = useParams()
      const [Selected, setSelected] = useState(null)

      const [RestData, setRestData] = useState([])


      useEffect(()=>{
      
            async function fetchData(){
      
                  const proxyServer = "https://cors-anywhere.herokuapp.com/"
                  const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      
                  const response = await fetch(proxyServer+swiggyAPI);
                  const data = await response.json();
                  
                  const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
                  const filterData = tempData.filter((items)=> 'title' in items?.card?.card)

                  setRestData(filterData);
            }

            fetchData();

      },[])

      // console.log(RestData)

      return(
            <>

            <div className="w-[80%] mx-auto mb-20 mt-20">
                  <Link to={`/city/delhi/${id}/search`}>
                  <p className="w-full text-center py-3 bg-gray-200 text-xl rounded-2xl border">Search for Dishes</p>
                  </Link>
            </div>

            <div className="w-[80%] mt-10 ml-30 flex gap-6">
                  <button className={`text-xl py-1 px-4 border rounded-2xl w-[110px] ${Selected==='veg'?'bg-green-600':'bg-gray-300'}`} onClick={()=>setSelected(Selected==='veg'?null:'veg')}>Veg</button>
                  <button className={`text-xl py-1 px-4 border rounded-2xl  ${Selected==='nonveg'?'bg-red-600':'bg-gray-300'}`} onClick={()=>setSelected(Selected==='nonveg'?null:'nonveg')}>Non-veg</button>
            </div>

            <div className="flex justify-center">
            <div className="w-[80%] mx-atuo mt-5">
                  {
                        RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={Selected}/>)
                  }
            </div>
            </div>
            </>
      )
}