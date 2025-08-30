import React from "react"
import { Link } from "react-router"

export default function Header(){


      return(
            <>
            <header className='bg-[#ff5200]'>
                  <div className='flex justify-around container px-4 py-8 font-bold mx-auto'>

                         <img className='h-12 w-40' src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />

                        <div className='text-white text-base flex gap-15 items-center'>
                              <a target='_blank' href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                              <a target='_blank' href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                              <a className="border border-white px-4 py-3 rounded-2xl bg-transparent" target='_blank' href="">Get the App</a>
                              <a className="border bg-black px-8 py-3 rounded-2xl" target='_blank' href="">Sign in</a>
                        </div>
                  </div>

                  <div className="relative pt-16 pb-8">

                        <img className="absolute h-110 w-60 top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                        <img className="absolute h-110 w-60 top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

                        <div className="text-white text-5xl font-bold max-w-[60%] container mx-auto flex justify-center text-center">
                              Order food and Groceries. Discover best restaurant. Swiggy it!
                        </div>

                        <div className="mt-16 flex ml-116 gap-12">
                              <input className="bg-white h-14 w-58 border border-white rounded-2xl text-center" type="text" placeholder="Enter your delivery location" />
                              <input className="bg-white h-14 w-76 border border-white rounded-2xl text-center" type="text" placeholder="Search for restaurant, items or more" />
                        </div>

                  </div>

                  <div className="flex flex-wrap container justify-center gap-10">
                        <Link to="/restaurant">
                              <img className="h-76 w-61" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="" />
                        </Link>
                        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                              <img className="h-76 w-61" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png" alt="" />
                        </a>
                        <a href="https://www.swiggy.com/dineout">
                              <img className="h-76 w-61" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png" alt="" />
                        </a>
                        <Link to={'/genie'}>
                              <img className="h-76 w-61" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png" alt="" />
                        </Link>
                  </div>
            </header>
            </>
      )
}