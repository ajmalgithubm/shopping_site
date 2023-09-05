import React from 'react'
import style from './ProductList.module.css'
const ProductList = () => {
    const imageWidth = "150px"
    const titleWidth = "200px"
    return (
        <div className={style.mainContainer}>
            {/* product list container contain each product */}
            <div className={`card ${style.cardItem}`}>
                <div className={style.cartIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                </div>
                <img src="/shirt1.jpg" class="card-img-top" alt="Product Image" style={{ width: imageWidth, height: "auto", objectFit: "cover" , alignSelf:'center'}} />
                <div className={`card-body ${style.cardBody}`}> 
                    <p class="card-text pt-0" style={{wordWrap:"break-word", maxWidth:titleWidth, fontSize:'15px'}}>Adlor Trendy Cotton Round Neck Regular Fit T Shirt for Men-Elegant Blue</p>
                    <p class="text-muted">Men's Apparels</p>
                    <p class="card-text text-danger pt-0" style={{fontSize:"30px"}}>₹ 99.99</p>
                    <div class="btn-group mt-0 pt-0" role="group" id={style.buttonList}>
                        <button type="button" class="btn btn-outline-danger">M</button>
                        <button type="button" class="btn btn-outline-danger">L</button>
                        <button type="button" class="btn btn-outline-danger">XL</button>
                    </div>
                    <div class="mt-2">
                        <p class="card-text">Rating:
                            <span class="rating">
                                <i class="fa fa-star checked" style={{
                                    color: 'red'
                                }}></i>
                                <i class="fa fa-star checked"></i>
                                <i class="fa fa-star checked"></i>
                                <i class="fa fa-star chacked"></i>
                                <i class="fa fa-star"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default ProductList
