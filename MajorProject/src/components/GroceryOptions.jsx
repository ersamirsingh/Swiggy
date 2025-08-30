import {GrocerGridCard} from '../utils/GroceryData'
import Grocerycard from './GroceryCard'


export default function GroceryOption(){



      return(
            <>
            <div className=" w-[80%] container mx-auto mt-20">
                  <h1 className='text-2xl font-bold'>Shop Groceries on instamart</h1>
                  <div className='flex flex-nowrap overflow-x-auto gap-4 container mx-auto mt-5'>
                        {
                              GrocerGridCard.map((foodData)=> <Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                        }     
                  </div>
            </div>
            </>
      )
}