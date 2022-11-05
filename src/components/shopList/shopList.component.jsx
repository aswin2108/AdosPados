import React from "react";

import './shopList.styles.css';

const ShopList=()=>{
    return(
        <div className="shop-card-container">
           <div className="shopCard">
            <span className="shopName">Dinesh Store</span>
            <p className="shopDes">Get all types of stationaries and snacks at your door step. <a
            href="https://wa.me/enter the desired phone number"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a></p>
            
           </div>
           <div className="shopCard">
            <span className="shopName">P.K Store</span>
            <p className="shopDes">Get fresh vegetables, fruits and grains at your door step. <a
            href="https://wa.me/enter the desired phone number"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a></p>
           </div>
        </div>
    )
}
export default ShopList;