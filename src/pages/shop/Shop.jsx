import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button ,Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/shopSlice";

const Shop = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    // fetchData();
    
    dispatch(getProducts())
  }, []);

  // const fetchData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProduct(json));
  // };
  // const [product, setProduct] = useState([]);

  const products = useSelector(state=> state.shop.products)
  const loading = useSelector(state=> state.shop.loading)
  console.log('products',products);

  return (
    <div>
      <h1 className="my-4">Shop</h1>
      {
        !loading
        ?
        <div className="container d-flex flex-wrap justify-content-between my-5">
        {products.map((item, index) => {
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
