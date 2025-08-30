import { dineoutRestaurants } from "../utils/DineData";
import DineCards from '../components/DineCards'



export default function DineOptions(){



      return(
            <>
            <div className="w-[100%] p-[120px] mt-20">
                  <p className="text-3xl font-bold">Discover best restaurant in Dineout</p>
                  <div className="flex gap-4 mt-7 h-[450px] rounded-4xl overflow-x-auto overflow-y-hidden ">
                        {
                              dineoutRestaurants.map((restData)=><DineCards key={restData.info.id} restData={restData}></DineCards>)
                        }
                  </div>
            </div>
            </>
      )
}