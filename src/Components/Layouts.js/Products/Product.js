import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch } from  'react-redux';
import { addCart, delCart } from '../../../Redux/action/Index';
// import Newsletter from '../Contact_Page/Newsletter';
import Footer from '../Foot/Footer';


function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn,setCartBtn] = useState("Add to cart");
    const dispatch = useDispatch();

    const handleCart = (product)=>{
        if(cartBtn === "Add to cart"){
            dispatch(addCart(product))
            setCartBtn("Remove from cart")
        }else{
            dispatch(delCart(product))
            setCartBtn("Add to cart")

        }


    }

   

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
               <div className="col-md-6">
                   <Skeleton height={400}/>
               </div>
               <div className="col-md-6" style ={{lineheight:2}}>
                   <Skeleton height={50} width ={300}/>
                   <Skeleton height={75}/>
                   <Skeleton height={25} width ={150}/>
                   <Skeleton height={50}/>

                   
                   <Skeleton height={150}/>
                   <Skeleton height={50} width={100}/>
                   <Skeleton height={50} width={100} style={{marginLeft:6}}/>
               </div>

            </>
        )
    }


    const ShowProducts = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />

                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        Rs. {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                   
                     <button className="btn btn-outline-dark px-4 py-2" 
                    onClick ={()=>handleCart(product)}>
                       {cartBtn}
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to cart
                    </NavLink>


                </div>

            </>
        )
    }
    return (
        // <div>
        <>
         <div className="container  py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>

            </div>
            <Footer/>
            {/* <Newsletter/> */}

        </>
           

        // </div>
    )
}

export default Product
