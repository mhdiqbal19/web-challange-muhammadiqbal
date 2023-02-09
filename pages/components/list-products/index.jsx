/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const ListProduct = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <div className="p-10">
          <h1 className="text-2xl font-medium mb-5">List Product</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {data
              .filter((_, index) => index < 6)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="grid bg-base-100 rounded-md shadow-xl"
                  data-theme="light"
                >
                  <figure>
                    <img src={item.thumbnail} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {item.title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                      <span>${item.price}</span>/
                      <span>Stock : {item.stock}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
