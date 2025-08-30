import {imageGridCards} from '../utils/FoodData'
import Foodcard from './FoodCard'

export default function FoodOption(){




      return(
            <>
            <div className='max-w-[90%] mt-10 container mx-auto flex flex-wrap max-h-[420px] overflow-x-scroll overflow-y-hidden'>
                  {
                  imageGridCards.map((data) => <Foodcard key={data.id} foodData={data}></Foodcard>)
                  }
            </div>
            </>
      )
}