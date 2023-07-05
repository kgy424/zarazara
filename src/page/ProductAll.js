import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

function ProductAll() {
  const [productlist, setProductlist] = useState([]);
  const [query, setQuery] = useSearchParams();
  // 비동기(async와 await는 짝지로 사용!)
  const getProducts = async () => {
    const searchQuary = query.get("q") || "";
    const url = `https://my-json-server.typicode.com/kgy424/zara
    /products?q=${searchQuary}`;
    let reponsive = await fetch(url); //객체로 받음
    let data = await reponsive.json(); //json형식으로 받음 (배열)
    console.log(reponsive, data);
    setProductlist(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]); //useEffect : useState로 값을 바꾸면 계속 data에 새로운 값이 들어오니까 계속 재실행됨, 이걸 막아주기 위해서 useEffect사용

  return (
    <div>
      <div className="container productAll">
        <div className="row">
          {productlist.map((item) => {
            //map 은 별도의 함수를 만든다
            return (
              <div key={item.id} className="col-md-3 col-12">
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductAll;
