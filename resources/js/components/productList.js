import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";
import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import { Box } from "@chakra-ui/react";
import axios from "axios";

export default function ProductList(props) {
    const [search, setSearch] = useState([]);
    const ProductsByName = async () => {
        
        return await axios
            .get(`/api/product?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
                console.log(res.data);
                console.log(props.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Navbar />
            <Search setSearch={setSearch} ProductsByName={ProductsByName} />
            <Box display="flex" flexWrap="wrap" justifyContent="center" mt={12}>
                { props.data != undefined &&
                                props.data.map((item, key) => {
                                    return (
                                        <Card product_name={item.product_name} barcode={item.barcode}/>
                                    )
                                })
                }
                
            </Box>

            <div style={{ marginBottom: 15 }}>
                <ScanButton></ScanButton>
            </div>
        </div>
    );
}

