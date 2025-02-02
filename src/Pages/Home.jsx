import out6 from '../Assets/out6.jpg'

const Home = () => {
  return (
    <div className="">
      <div className='flex bg-slate-200'>
        <section className='pl-5 pt-5'>
          <h3 className="bg-white font-bold inline p-2 rounded-3xl">The Best Online Furniture Store</h3>
          <h1 className="mt-5 text-5xl">Your One-Stop Shop</h1>
          <h1 className='text-5xl mt-3 mb-3'>for <span className="text-green-700">Quality Furnitures</span></h1>
          <p className='mb-5 opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam necessitatibus, adipis, laboriosam odio. Cumque, explicabo!</p>
          <button className="mr-10 bg-green-700 py-2 px-5 rounded-3xl text-white">Shop Now</button>
          <button className="mb-10 border-b-2">View All Products</button> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia libero ea mollitia quasi nemo nulla minus veritatis inventore, velit enim laboriosam maiores impedit deleniti, beatae eaque ab atque dolores debitis.</p>
        </section>
        <section className=''>
          {/* <img src="https://images.pexels.com/photos/2883048/pexels-photo-2883048.jpeg?auto=compress&cs=tinysrgb&w=600" alt="homepage.jpg" className='w-500 h-180'/> */}
          <img src={out6} alt="" className='w-300 h-100'/>
        </section>
      </div>

      {/* categories section */}
      <section className='flex flex-col justify-center items-center mt-10 mb-10'>
          <h3 className='font-bold '>Categories</h3>
          <p className='text-3xl'>Featured <span className='text-green-700'>Categories</span></p>

          <div className='flex flex-row mt-10 gap-10 mb-10'>
            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>

            <div className=''>
              <div className=''>
                <img src={out6} alt="category_icon.jpg" className='rounded-full h-30 w-30 bg-slate-200' />
              </div>
              <div className=''>
                <p className='font-bold'>Sofas</p>
                <p className='font-light'>300 products</p>
              </div>
            </div>
          </div>
      </section>

      {/* Products Section */}
      <section className='bg-slate-200 p-5'>
          <h3 className='font-bold '>Products</h3>
          <div className='flex flex-row justify-between items-center mb-10'>
            <p className='text-3xl'>Featured <span className='text-green-700'>Products</span></p>
            <button className='bg-green-700 mr-30 rounded-4xl p-3 text-white'>View All Products</button>
          </div>

          <div className='flex gap-5'>
            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>
          </div>
      </section>

      {/* Best Seller Products Section */}
      <section className='bg-slate-200 p-5 mt-15 text-center'>
          <h3 className='opacity-70'>Best Seller</h3>
          <div className='relative flex flex-row justify-center items-center mb-10'>
            <p className='text-3xl'><span className='text-green-700'>Best Seller</span> Products</p>
            <button className='absolute right-0 bg-green-700 rounded-4xl px-8 py-2 text-white'>View All Products</button>
          </div>
          
          <div className='flex gap-5'>
            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>

            <div className='bg-white w-60 rounded-md'>
              <div>
                <img src={out6} alt="product.jpg" className='w-60 h-50 rounded-t-md'/>
              </div>
              <div className='pl-2 pb-3'>
                <p className='text-green-700'>Sofa</p>
                <p>mahogany</p>
                <p>3 Seater</p>
                <p className='mt-3'><span className='font-bold'>Kes 20,000</span></p>
              </div>
            </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className='my-15 text-center'>
        <div className='grid justify-center items-center ml-auto'>
          <p className='opacity-70 text-xl'>Testimonials</p>
          <p className='text-4xl'>Testimonials from</p>
          <p className='text-green-700 text-4xl font-bold'>Our Loyal Customers</p>
        </div>

        <div className='flex justify-center items-center gap-10 mt-10'>
          <img src={out6} alt="testimonial.jpg" className='w-30 h-30 rounded-full' />
          <img src={out6} alt="testimonial.jpg" className='w-30 h-30 rounded-full' />
          <img src={out6} alt="testimonial.jpg" className='w-40 h-40 rounded-full' />
          <img src={out6} alt="testimonial.jpg" className='w-30 h-30 rounded-full' />
          <img src={out6} alt="testimonial.jpg" className='w-30 h-30 rounded-full' />
        </div>

        <p className='flex w-200 ml-auto mr-auto items-center justify-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro reiciendis dolorum labore eos iure cumque ex in, beatae ullam repellendus illum neque nam voluptatibus inventore, hic, voluptatum tenetur doloribus necessitatibus!</p>
      </section>

      {/* Blogs & News Section */}
      <section className='bg-slate-200 p-10 w-[90%] mx-auto'>
        <p className='font-bold'>News & Blogs</p>
        <div className='flex justify-between items-center mb-10'>
          <p className='text-3xl'>Our Latest <span className='text-green-700'>News & Blogs</span></p>
          <button className='bg-green-700 mr-30 rounded-4xl p-3 text-white'>View All</button>
        </div>
        
        <div className='flex justify-center items-center gap-7'>
          <div className='rounded-md mb-5'>
            <img src={out6} alt="blog.jpg" className='rounded-t-md w-80 h-60' />
            <div className='flex items-center my-2 px-1 font-light'>
              <p>John Doe</p>
              <div className='rounded-full w-3 h-3 mx-5 bg-green-700'></div>
              <p>2 Feb 2025</p>
            </div>
            <p className='font-bold mb-1 ml-1'>How Escrow Works</p>
            <button className='text-sm text-green-700 ml-1 border-b-1 border-b-green-700'>Read More</button>
          </div>

          <div className='rounded-md mb-5'>
            <img src={out6} alt="blog.jpg" className='rounded-t-md w-80 h-60' />
            <div className='flex items-center my-2 px-1 font-light'>
              <p>John Doe</p>
              <div className='rounded-full w-3 h-3 mx-5 bg-green-700'></div>
              <p>2 Feb 2025</p>
            </div>
            <p className='font-bold mb-1 ml-1'>How Escrow Works</p>
            <button className='text-sm text-green-700 ml-1 border-b-1 border-b-green-700'>Read More</button>
          </div>

          <div className='rounded-md mb-5'>
            <img src={out6} alt="blog.jpg" className='rounded-t-md w-80 h-60' />
            <div className='flex items-center my-2 px-1 font-light'>
              <p>John Doe</p>
              <div className='rounded-full w-3 h-3 mx-5 bg-green-700'></div>
              <p>2 Feb 2025</p>
            </div>
            <p className='font-bold mb-1 ml-1'>How Escrow Works</p>
            <button className='text-sm text-green-700 ml-1 border-b-1 border-b-green-700'>Read More</button>
          </div>
        </div>         
      </section>

      {/* FAQs Section */}
      <section className='grid text-center mt-15'>
        <p className='font-bold text-4xl mb-2'>FAQs</p>
        <div className='relative flex justify-center items-center'>
          <h1 className='text-3xl'>Frequently Asked  <span className='text-green-700'>Questions</span></h1>
          <button className='absolute right-0 bg-green-700 mr-8 rounded-4xl px-10 py-2 text-white'>View All</button>
        </div>
        <h3 className='mb-10 opacity-70 mt-2'>Need help? Browse our FAQs for quick answers to your questions.</h3>

        <div className='grid gap-5'>
          <div className='flex justify-between items-center mx-auto w-[80%] min-h-20 max-h-30 bg-slate-200 p-3 rounded-md'>
            <p className='mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          </div>

          <div className='flex justify-between items-center mx-auto w-[80%] min-h-20 max-h-30 bg-slate-200 p-3 rounded-md'>
            <p className='mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          </div>

          <div className='flex justify-between items-center mx-auto w-[80%] min-h-20 max-h-30 bg-slate-200 p-3 rounded-md'>
            <p className='mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          </div>

          <div className='flex justify-between items-center mx-auto w-[80%] min-h-20 max-h-30 bg-slate-200 p-3 rounded-md'>
            <p className='mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          </div>

          <div className='flex justify-between items-center mx-auto w-[80%] min-h-20 max-h-30 bg-slate-200 p-3 rounded-md'>
            <p className='mr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center w-[70%] mx-auto mt-10 gap-20'>
        <div className=' flex justify-center items-center gap-5 border p-2 min-w-[30%] border-green-700 rounded-md'>
          < img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          <div>
            <h1>24 x 7 Support</h1>
            <h1>We support online all days</h1>
          </div>
        </div>

        <div className=' flex justify-center items-center gap-5 border p-2 min-w-[30%] border-green-700 rounded-md'>
          < img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          <div>
            <h1>24 x 7 Support</h1>
            <h1>We support online all days</h1>
          </div>
        </div>

        <div className=' flex justify-center items-center gap-5 border p-2 min-w-[30%] border-green-700 rounded-md'>
          < img src={out6} alt="arrow icon.jpg" className='w-10 h-10' />
          <div>
            <h1>24 x 7 Support</h1>
            <h1>We support online all days</h1>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='flex flex-col justify-center items-center py-5 pb-10 mx-auto mt-15 bg-slate-200'>
        <h1 className='opacity-[70%]'>Our Newsletter</h1>
        <h1 className='text-4xl my-3'>Subscribe to Our Newsletter to</h1>
        <h1 className='text-4xl'>Get <span className='text-green-700'>Updates on Our Latest Offers</span></h1>
        <p className='opacity-70 mt-2'>Get 25% off on your first order just by subscribing to our newsletter</p>

        <div className='flex gap-20 mt-10'>
          <input type="text" placeholder='Enter Email Address' className='bg-white w-70 h-10 py-3 px-5 rounded-4xl' />
          <button className='bg-yellow-500 rounded-4xl font-bold px-8'>Subscribe</button>
        </div>
      </section>

    </div>
  )
}

export default Home