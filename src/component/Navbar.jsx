import NavLinkSingle from "./NavLinkSingle";

function Navbar() {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   async function fetchDataApi() {
  //     const res = await fetch("https://dummyjson.com/products/categories");
  //     const data = await res.json();
  //     setCategories(data);
  //   }
  //   fetchDataApi();
  // }, []);

  return (
    <header className="bg-slate- flex h-20 items-center border-b-[2px] border-gray-200 text-white">
      <div className="flex w-[10%] items-center justify-center">
        <img
          src="https://img.icons8.com/?size=50&id=baTWeZAqG8lF&format=png"
          alt=""
        />
      </div>
      <nav className="w-[40%] pr-4 flex  items-center justify-between text-gray-800">
        <NavLinkSingle to={"product"}>All product</NavLinkSingle>
        <NavLinkSingle>electronics</NavLinkSingle>
        <NavLinkSingle>beauty</NavLinkSingle>
        <NavLinkSingle>groceries</NavLinkSingle>
        <NavLinkSingle>man</NavLinkSingle>
        <NavLinkSingle>children</NavLinkSingle>
        <NavLinkSingle>woman</NavLinkSingle>
      </nav>
      <div className="ml-7 flex h-11 w-[50%] justify-around overflow-hidden rounded-lg">
        <div className="mr-4 flex w-[70%] flex-1 items-center bg-slate-200">
          <img
            className="mx-3 h-4 w-4 bg-slate-200"
            src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
            alt=""
          />
          <input
            type="search"
            className="h-full w-[50%] flex-1 bg-slate-200 px-2 text-gray-800"
            placeholder="search for product, brand and more.."
          />
        </div>
        <div className="flex w-[30%] items-center justify-center gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt=""
            className="h-7"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2550/2550224.png"
            alt=""
            className="h-7"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1656/1656850.png"
            alt=""
            className="h-7"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
