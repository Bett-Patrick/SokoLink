import out6 from "../Assets/out6.jpg"

const Footer = () => {
  return (
    <div className="bg-green-700 h-fit py-10 text-white">
      <div className="flex justify-evenly gap-10 w-[80%] mx-auto">
        <aside className="grid p-2 items-center w-[20%]">
          <div className="flex items-center gap-2 mb-3">
            <img src={out6} alt="furniture_icon.png" className="w-10 h-10 rounded-full" />
            <h3 className="flex justify-center items-center font-bold">Furniture <span className="flex items-center pb-1 text-yellow-500 text-2xl">.</span></h3>
          </div>
          <p className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima in veritatis aliquam lab</p>
          <div className="flex gap-2 mt-5">
            <img src={out6} alt="fb_icon.png" className="w-8 h-8 rounded-full" />
            <img src={out6} alt="x_icon.png" className="w-8 h-8 rounded-full" />
            <img src={out6} alt="ig_icon.png" className="w-8 h-8 rounded-full" />
            <img src={out6} alt="tiktok_icon.png" className="w-8 h-8 rounded-full" />
            <img src={out6} alt="youtube_icon.png" className="w-8 h-8 rounded-full" />
          </div>
        </aside>

        <aside>
          <h3 className="font-bold mb-3">Company</h3>
          <div className="grid gap-2 opacity-70 place-items-start">
            <button className="">About Us</button>
            <button className="">Blogs</button>
            <button className="">Contact Us</button>
            <button className="">Help</button>
          </div>
        </aside>

        <aside>
          <h3 className="font-bold mb-3">Customer Services</h3>
          <div className="grid gap-2 opacity-70 place-items-start">
            <button className="">My Account</button>
            <button className="">Track Your Order</button>
            <button className="">Return</button>
            <button className="">FAQ</button>
          </div>
        </aside>

        <aside>
          <h3 className="font-bold mb-3">Our Information</h3>
          <div className="grid gap-2 opacity-70 place-items-start">
            <button className="">Privacy</button>
            <button className="">User Terms & Conditions</button>
            <button className="">Return Policy</button>
          </div>
        </aside>

        <aside>
          <h3 className="font-bold mb-3">Contact Info</h3>
          <div className="grid gap-2 opacity-70 place-items-start">
            <p className="">+254 712 345 678</p>
            <p className="">johndoe1234@gmail.com</p>
            <p className="">123 Nkr rd,</p>
            <p className="">4469</p>
          </div>
        </aside>
      </div>
      <hr className="h-2 text-white w-[80%] mx-auto opacity-30 my-5"/>
      <p className="flex justify-center items-center">Copyright @ 2025 <span className="text-yellow-500 ml-1"> SokoLink.</span>All Rights Reserved.</p>
    </div>
  )
}

export default Footer