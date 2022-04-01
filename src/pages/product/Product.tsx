import { useRef } from "react";
import { Routes, Route, Outlet, Link, useParams, useNavigate } from "react-router-dom";

const Product = () => {

    return (
        <Routes>
            <Route element={<Header/>}>
                <Route index element={<p> Search for a product above </p>}/>
                <Route path=":productid" element={ <ProductView/> } />
                <Route path="list" element={<ProductList/>}/>
            </Route>
        </Routes>       
    )
}

const Header = () => {
    return (
        <>
            <h3> Product Page</h3>
            <div> <Link to="/dashboard"> Dashboard </Link> </div>
            <div> <Link to="list"> Product List </Link> </div>
            <ProductSearch/>
            <Outlet/>                    
        </>
    )
}

const ProductView = () => {
    const params = useParams();
    return (
      <div>
          <p> You are now viewing product: { params.productid } </p>
      </div>
    )
}

const ProductSearch = () => {
    const searchInput = useRef<HTMLInputElement>(null);
    const nav = useNavigate();

    function submitSearch() {        
        if(searchInput.current !== null) {
            const searchValue = searchInput.current.value;            
            nav(searchValue.toString());
        }
    }

    return (                                       
        <div>
            <h5> Enter a product ID to view: </h5> 
            <input ref={searchInput} type="number" placeholder="product ID"/>
            <button type="button" onClick={submitSearch}> Go </button>
        </div>        
    )
}

const ProductList = () => {
    return (
        <div>
            <hr/>
            <div> <Link to="/product"> Back </Link> </div>
            <ol>
                <li> Product 1</li>
                <li> Product 2</li>
                <li> Product 3</li>
                <li> Product 4</li>
                <li> Product 5</li>
            </ol>
        </div>
    )
}
  

export default Product;