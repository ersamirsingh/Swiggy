import { useState } from "react"
import RestInfo from "./RestInfo"

export default function MenuCard({menuItems,foodSelected}){



      const [isOpen, setIsOpen] = useState(true)
      

      if("categories" in menuItems){

            return(
                  <>
                  <div>
                        <p className="text-2xl font-bold">{menuItems?.title}</p>
                        <div>
                              {
                                    menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}/>)
                              }
                        </div>
                  </div>
                  </>
            )
      }

      if(!isOpen){
            return(
                  <>

                  <div className="w-full">
                        <div className="flex justify-between w-full">
                              <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                              <button className="text-xl font-bold mr-22" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'∧':'∨'}</button>
                        </div>
                  </div>
                  </>
            )
      }


      if(foodSelected==='veg'){

            return(
                  <>
      
                  <div className="w-full mt-4">
      
                        <div className="w-full">
                              <div className="flex justify-between w-full">
                                    <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                                    <button className="text-xl mr-22" onClick={()=>setIsOpen(!isOpen)}>{isOpen?' ∧':'∨'}</button>
                              </div>
                              
                        </div>
      
                        <div>
                              {
                                    menuItems?.itemCards?.filter((food)=> "isVeg" in food?.card?.info)?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}/>)
                              }
                        </div>
                  </div>
                  
                  </>
            )
      }

      if(foodSelected==='nonveg'){
            return(
                  <>
      
                  <div className="w-full mt-4">
      
                        <div className="w-full">
                              <div className="flex justify-between w-full">
                                    <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                                    <button className="text-xl mr-22" onClick={()=>setIsOpen(!isOpen)}>{isOpen?' ∧':'∨'}</button>
                              </div>
                              
                        </div>
      
                        <div>
                              {
                                    menuItems?.itemCards?.filter((food)=>!('isVeg' in food?.card?.info))?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}/>)
                              }
                        </div>
                  </div>
                  
                  </>
            )
      }

      return(
            <>

            <div className="w-full mt-4">

                  <div className="w-full">
                        <div className="flex justify-between w-full">
                              <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
                              <button className="text-xl mr-22" onClick={()=>setIsOpen(!isOpen)}>{isOpen?' ∧':'∨'}</button>
                        </div>
                        
                  </div>

                  <div>
                        {
                              menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}/>)
                        }
                  </div>
            </div>
            
            </>
      )
}