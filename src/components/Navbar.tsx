import Link from "next/link"

const Navbar = () => {
  return (
    <div className="hidden lg:block ">
          <div className="container">
              <div className="flex w-fit gap-10 mx-auto py-4 font-medium text-blackish">
                  <Link className="navbar_link relative uppercase" href="#">home</Link>
                  <Link className="navbar_link relative uppercase" href="#">Categories</Link>
                  <Link className="navbar_link relative uppercase" href="#">Mens</Link>
                  <Link className="navbar_link relative uppercase" href="#">Women</Link>
                  <Link className="navbar_link relative uppercase" href="#">Teen</Link>
                  <Link className="navbar_link relative uppercase" href="#">Kids</Link>
                  <Link className="navbar_link relative uppercase" href="#">Jewellery</Link>
                  <Link className="navbar_link relative uppercase" href="#">More</Link>
              </div>
      </div>
    </div>
  )
}

export default Navbar
