const Testimonials = () => {
  return (
    
       <div className="container pt-16 pb-16 grid-cols-2">
              <h2 className="font-medium text-2xl mb-10">Testimonials</h2>
              <div className="grid lg:grid-cols-[300px_1fr] gap-6">
  <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
    <img
      className="inline-block rounded-full "
      src="/user.jpg"
      width={80}
      height={80}
      alt=""
    />
    <h2 className="text-gray-500 font-black text-[20px]">Malik</h2>
    <p>CEO and founder Invision</p>
    <img
      className="inline-block py-2"
      src="/next.svg"
      width={30}
      height={30}
      alt=""
    />
    <p className="max-w-[200px] text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>

  <div className="bg-[url('/banner-2.jpg')] bg-cover h-[500px] rounded-2xl grid place-items-center">
    <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
      <button className="bg-black text-white rounded-md p-2">
        25% Discount
      </button>

      <h2 className="font-extrabold text-2xl text-[#272727]">
        Summer Collection
      </h2>

      <p className="text-gray-500 text-[20px]">
        Starting @ $20 <b>Shop Now</b>
      </p>
    </div>
  </div>
</div>
    </div>
  )    
}

export default Testimonials
