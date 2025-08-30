import { useSelector } from "react-redux"
import { Link } from "react-router"

export default function RestHeader(){

      const counter = useSelector(state => state.cartSlice.count)

      return(
            <div className="container mx-auto py-4 px-8 bg-gray-200 text-2xl flex justify-between items-center">
                  <div>
                        <p className="text-orange-600 font-bold">Swiggy</p>
                  </div>

                  
                  <div className="flex gap-14">
                        <p>Swiggy Corporate</p>
                        <p>Search</p>
                        <p>Offer</p>
                        <p>help</p>

                        <Link to={'/checkout'}>
                              <p className="font-bold">Cart {`(${counter})`}</p>
                        </Link>
                  </div>
            </div>
      )
}