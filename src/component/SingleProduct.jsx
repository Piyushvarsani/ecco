function SingleProduct({ product }) {
  const { title, thumbnail, rating, price } = product;
  console.log(product);
  return (
    <div className="border-2 w-96 shadow-md rounded-xl overflow-hidden">
      <img
        src={thumbnail}
        alt=""
        className="object-cover w-full h-80 rounded-xl mb-2"
      />
      <div className="px-4 mb-6">
        <h3 className="mb-2 font-medium">{title}</h3>
        <div className="flex justify-between">
          <span>{price} $</span>
          <span>{rating} ⭐️</span>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
