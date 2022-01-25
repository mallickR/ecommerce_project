
import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import Newsletter from '../Contact_Page/Newsletter';
import Footer from '../Foot/Footer';
import { Spinner } from 'react-bootstrap';
import './ProductPage.css'

function ProductPage() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);

            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="demo d-flex justify-content-center">
                    {/* <h1>Loading....</h1> */}
                   
                    <Spinner animation="border" variant="danger" />
                    <Spinner animation="border" variant="warning" />
                    <Spinner animation="border" variant="info" />
                </div>

                <div className="col-md-3">
                    <Skeleton height={350} />

                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />

                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />

                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />

                </div>






            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>

                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <div className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}> Men </div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}> WOMEN </div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>JEWELLERY</div>
                    <div className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>ELECTRONIC</div>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div class="card h-100 text-center p-4" key={product.id}>
                                        <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0, 12)}....</h5>
                                            <p class="card-text lead fw-bold">Rs. {product.price}</p>
                                            <NavLink to={`/product/${product.id}`} className=" shop btn btn-outline-primary">Shop now</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )




                    })
                }

            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">CATEGORIES TO BAG</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
            <Newsletter />
            <Footer />

        </div>
    )
}

export default ProductPage

