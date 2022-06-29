import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button ,Spinner} from "react-bootstrap";

const Shop = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  const [product, setProduct] = useState([]);
  console.log(product);
  return (
    <div>
      <h1 className="my-4">Shop</h1>
      {
        product.length > 0 
        ?
        <div className="container d-flex flex-wrap justify-content-between my-5">
        {product.map((item, index) => {
          return (
            <Link to={`/shop/${item.id}`} key={index} className="vol-3">
              <Card style={{ width: "18rem" }} className="d-flex col-3">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Text>{item.price}$</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Link>
          );
        })}
      </div>
      :
      <Spinner animation="border" />

      }

    </div>
  );
};
export default Shop;
