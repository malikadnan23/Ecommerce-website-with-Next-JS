const products = [
  {
    id: 1,
    img: "/jacket-1.jpg",
    title: "Men's Winter Jacket",
    desc: "Warm, stylish jacket for everyday winter comfort.",
    rating: 4.8,
    price: 99.99,
  },
  {
    id: 2,
    img: "/party-wear-1.jpg",
    title: "Women's Party Dress",
    desc: "Elegant dress perfect for parties and special occasions.",
    rating: 4.6,
    price: 79.99,
  },
  {
    id: 3,
    img: "/shirt-1.jpg",
    title: "Casual Cotton Shirt",
    desc: "Soft cotton shirt for daily casual and office wear.",
    rating: 4.9,
    price: 49.99,
  },
  {
    id: 4,
    img: "/watch-1.jpg",
    title: "Classic Leather Watch",
    desc: "Elegant leather watch with timeless everyday style.",
    rating: 4.7,
    price: 59.99,
  },
  {
    id: 5,
    img: "/watch-2.jpg",
    title: "Luxury Gold Watch",
    desc: "Premium gold watch with a sophisticated modern design.",
    rating: 4.5,
    price: 149.99,
  },
  {
    id: 6,
    img: "/skirt-1.jpg",
    title: "Women's Casual Skirt",
    desc: "Comfortable skirt for casual outings and everyday fashion.",
    rating: 4.8,
    price: 39.99,
  },
  {
    id: 7,
    img: "/sports-1.jpg",
    title: "Sports Running Shoes",
    desc: "Lightweight running shoes for comfort and performance.",
    rating: 4.6,
    price: 69.99,
  },
];

const NewProduct = () => {
  return (
    <div>
          <div className="container pt-16 ">
              <h2 className="font-medium text-2xl mb-10">New Products</h2>
              <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                   {products.map((product,index) => (
        <div className="px-4 max-w-[400px] border border-gray-200 rounded-xl" key={product.id}>
                       <img className="w-full h-auto" src={product.img} alt={product.title} />
        
                       <div className="py-2 space-y-2" >
                         <h3 className="text-accent font-semibold text-xl">{product.title}</h3>
                      <p className="text-gray-500 max-w-[170px]">{product.desc}</p>
        </div>
                       
         <p>⭐ {product.rating}</p>
        
                       <div className="flex gap-4 font-bold pb-2">
                         
                         <p>${product.price}</p>
                         <del className="text-gray-500 font-medium">${parseInt(product.price) + 40}.00</del>
        </div>
        </div>
))}
    </div>
             
            
      </div>
    </div>
  )
}

export default NewProduct
