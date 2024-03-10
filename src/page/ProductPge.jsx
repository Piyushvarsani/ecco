import { useEffect, useState } from "react";
import SingleProduct from "../component/SingleProduct";

function ProductPge() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchDataApi() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDataApi();
  }, []);

  console.log(allProducts.products);

  return (
    <section className="pb-12">
      <div className="flex h-48 items-center justify-center border-2 border-solid">
        <h2 className="text-7xl">Shop</h2>
      </div>
      <div className="flex grid-cols-3 items-start justify-center py-3">
        <div className="w-[30%] border-2 border-solid pl-6 rounded-md p-6">
          <div className="mb-9 flex justify-between">
            <span className="font-sarif text-3xl">Filter</span>{" "}
            <button className="text-slate-400 underline">clear</button>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="mr-2">
              min
            </label>
            <input
              type="number"
              name=""
              id=""
              className="w-16 rounded-md border border-solid border-slate-300 mr-2"
              min="0"
            />
            <label htmlFor="" className="mr-2">
              max
            </label>
            <input
              type="number"
              name=""
              id=""
              className="w-16 rounded-md border border-solid border-slate-300 mr-2"
              max="2000"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              name="men"
              id="men"
              className="rounded-md mr-2"
            />
            <label htmlFor="men">men</label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              name="women"
              id="women"
              className="rounded-md mr-2"
            />
            <label htmlFor="women">women</label>
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              name="electronic"
              id="electronic"
              className="rounded-md mr-2"
            />
            <label htmlFor="electronic">electronic</label>
          </div>
        </div>
        <div className="grid h-max w-[70%] grid-cols-3 gap-5 px-6">
          {allProducts.products && allProducts.products.length > 0
            ? allProducts.products.map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default ProductPge;
