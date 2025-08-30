


export default function GroceryCard({foodData}){


      return(
            <>
            <div className="flex-none">
                  <a href={foodData?.action?.link}>
                        <img className="w-40 h-[200px] object-cover rounded-md shadow-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} alt="" />
                  </a>
                  <h2 className="text-center">{foodData?.action?.text}</h2>
            </div>
            </>
      )
}