import { Link } from "react-router-dom"

const Notfound= () => {
    return (
        <div> 
            <p>404 Page Not Found</p>
            <Link to='/' className="btn btn-primary">Back to Shop</Link>
        </div>
    )
}
export default Notfound