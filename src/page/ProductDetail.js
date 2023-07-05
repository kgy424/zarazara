import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kgy424/zara
    /products/${id}`;
    let respons = await fetch(url);
    let data = await respons.json(); //json형식으로 바꿈
    //async와 await fetch()는 짝지
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []); //의존성배열이 비어있으면 컴퍼넌트가 실행될 때 함수가 한 번만 실행됨

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7 d-flex justify-content-end">
          <img src={product?.img} />
        </div>
        <div className="col-5 ps-5 pt-3">
          <div className="fw-bolder">{product?.title}</div>
          <div className="text-secondary pt-2">{product?.price}</div>
          <div className="pt-2">
            {product?.choice ? "Conscioud Choice" : ""}
          </div>
          <select class="form-select mt-4" aria-label="Default select example">
            <option selected>Size</option>
            {product?.size.length > 0 &&
              product?.size.map((item) => {
                return <option value={item}>{item}</option>;
              })}
          </select>
          <button className="btn btn-outline-warning mt-3">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
