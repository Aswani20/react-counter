import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const Product = () => {
  const urlParams = useParams();
  useEffect(() => {
    fetchproduct();
  }, []);
  const fetchproduct = () => {
    fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
      .then((res) => res.json())
      .then((json) => setProductDetails(json));
  };

  const [productDetails, setProductDetails] = useState({});

  return (
    <div>
      <div className="m-5">Product</div>
      <div className="d-flex justify-content-center m-5">
        <Card style={{ width: "18rem" }} className="d-flex col-3"> 
          <Card.Img variant="top" src={productDetails.image} />
          <hr/>
          <Card.Body>
            <Card.Title>{productDetails.title}</Card.Title>
            <hr/>
            <Card.Text>{productDetails.description}</Card.Text>
            <hr/>
            <Card.Text>{productDetails.category}</Card.Text>
            <Card.Text>{productDetails.price}$</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
