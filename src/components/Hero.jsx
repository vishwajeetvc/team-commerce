import { hero } from "../assets/assets"
import Title from "./Title"

function Hero() {
  return (
    <div className=" flex-col md:flex md:flex-row justify-between items-center h-[600px] overflow-hidden">

      <div className="flex-1 justify-center flex my-10">
        <div className="flex flex-col justify-center">
          <Title label1={"OUR"} label2={"BESTSELLER"} reverse/>
          <h1 className="text-3xl my-2 md:text-5xl md:my-4">Fashion Brand</h1>
          <Title label1={"SHOP"} label2={"NOW"}/>
        </div>
      </div>

      <div className="md:w-[600px] flex-1">
        <img src={hero}/>
      </div>

    </div>
  )
}

export default Hero
