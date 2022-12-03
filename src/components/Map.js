import React from "react";
import "../css/Map.css"

const Map = ({ floorConfig, openShop }) => {

    return (
        <div className="bg">
            <span className="floorNo">
                Floor {floorConfig.floorNo}
            </span>

            <div className="map">
                {floorConfig.rows.map((row, i) => {
                    return (
                        <div className="shop-row" key={i}>
                            {row.map(shop => {
                                return (
                                    <div className="shop" key={shop.shopNo} onClick={() => openShop(shop)}>
                                        Shop {shop.shopNo}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Map;