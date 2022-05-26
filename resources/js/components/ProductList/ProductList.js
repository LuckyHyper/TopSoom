import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./ProductList.css";
import Search from "../SearchBar/Search";
import ScanButton from "../ScanButton/ScanButton";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProductList(props) {
    const [search, setSearch] = useState([]);
    const ProductsByName = async () => {
        return await axios
            .get(`/api/product?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
                console.log(res.data);
            })

            .catch((err) => console.log(err));
    };
    useEffect(() => {
        Aos.init();
    }, [props.reload4]);

    return (
        <div>
            <div data-aos="slide-down" data-aos-duration="1200">
                <Search setSearch={setSearch} ProductsByName={ProductsByName} />
            </div>
            <Box display="flex" flexWrap="wrap" justifyContent="center" mt={12}>
                {props.data != undefined &&
                    props.data.map((item, key) => {
                        /*  console.log(item);
                                    item.price.map((shop, key) => {
                                        let array = shop.price;
                                    }) */
                        return (
                            <Card
                                key = {item.barcode}
                                product_name = {item.product_name}
                                product_price = {item.price[0].price}
                                barcode = {item.barcode}
                                image = {item.image}
                                setShopNum = {props.setShopNum}
                                shopNum = {props.shopNum}
                                price = {item.price[0].price}
                            />
                        );
                    })}
            </Box>
            <ScanButton></ScanButton>
        </div>
    );
}
