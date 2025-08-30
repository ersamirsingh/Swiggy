import { useState } from "react"
import {addItems, incrementItems, decrementItems} from '../Store/CartSlicer'
import { useDispatch } from "react-redux"



export default function RestInfo({restData}){

      const [Count, setCount] = useState(0)
      const dispatch = useDispatch();

      function handleAddItems(){
            setCount(1)
            dispatch(addItems(restData))
      }

      function handleIncrementItems(){
            setCount(Count+1)
            dispatch(incrementItems(restData))
      }

      function handleDecrementItems(){
            setCount(Count-1)
            dispatch(decrementItems(restData))
      }


      return(
            <>
            <div className="flex justify-around w-full mb-2 pb-2">

                  <div className="w-[70%]">
                        <p className="mb-1 text-2xl text-gray-700 font-semibold">{restData?.name}</p>
                        <p className="text-xl">{'₹'+(('defaultPrice' in restData) ? restData?.defaultPrice/100:restData?.price/100)}</p>
                        <span className="text-green-400">{restData?.ratings?.aggregatedRating?.rating}</span>
                        <span>{'('+restData?.ratings?.aggregatedRating?.ratingCountV2+')'}</span>
                        <p>{restData?.description}</p>
                  </div>

                  <div className="w-[20%] relative">
                        <img className="h-36 w-full object-cover rounded-2xl" src={'https://media-assets.swiggy.com/swiggy/image/upload/'+restData?.imageId} alt="" />
                        {
                              (Count===0)?(<button className="absolute bottom-1 left-[88px] shadow-md border border-white rounded-2xl text-green-600 bg-white px-4 py-[6px]" onClick={()=>handleAddItems()}>ADD</button>):(
                                    <div className="absolute left-[88px] bottom-1 flex gap-4 text-2xl text-green-600 px-6 py-2 shadow-md bg-white rounded-2xl border-white">
                                          <button onClick={()=>handleDecrementItems()}>-</button>
                                          <span>{Count}</span>
                                          <button onClick={()=>handleIncrementItems()}>+</button>
                                    </div>
                              )
                        }
                        
                  </div>
            </div>
            <hr className="mt-4 mb-5" />
            </>
      )
}