import { logo } from "../assets/assets"

function Footer() {
  return (
  <div className="my-10">
    <div className="text-sm text-gray-500 md:flex mb-10 gap-5">
      <div className="flex-4 ">
        <div className="mb-4">
          <img className="w-[100px] " src={logo}/>
        </div>
        <p>Wikipedia is a free online encyclopedia that is written and maintained by a community of volunteers, known as Wikipedians.</p>
      </div>

      <div className="my-8 md:my-0 flex-1">
        <h2 className="font-bold pb-1">Company</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Delivery us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="my-8 md:my-0 pb-1 flex-2">
        <h2 className="font-bold">Get in Touch</h2>
        <ul>
          <li>+91 888287900</li>
          <li>vcnvim@gmail.com</li>
        </ul>
      </div>
    </div>
    <div className="text-center py-4 border-t-amber-500 border-t my-2 ">
      <p>Copyright (c) 2025 Author. All Rights Reserved.</p>
    </div>
  </div>
  )
}

export default Footer
