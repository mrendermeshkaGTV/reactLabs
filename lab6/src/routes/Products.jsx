import * as React from "react";
import { useLoaderData, Link, Route, Routes, useSearchParams } from "react-router-dom";
import { SimpleGrid, FormControl, Input, Button } from '@chakra-ui/react';
import Product from '../components/Product'

export default function () {
    const products = useLoaderData().products;

    let [searchParams, setSearchParams] = useSearchParams();

    let q = searchParams.get("q");

    let [productData, setProductData] = React.useState(null);

    React.useEffect(() => {
        let abortController = new AbortController();

        async function getProduct() {
            let response = await fetch(`https://dummyjson.com/products/search?q=${q}`, {
                signal: abortController.signal,
            });
            if (!abortController.signal.aborted) {
                let data = await response.json();
                setProductData(data.products);
                console.log(productData)
            }
        }

        if (q) {
            getProduct();
        }

        return () => {
            abortController.abort();
        };
    }, [q]);

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let newProduct = formData.get("q");
        if (!newProduct) {
            setProductData(null)
            return;
        }
        setSearchParams({ q: newProduct });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <Input defaultValue={q ?? undefined} type="text" name="q" />
                </label>
                <Button type="submit">Search</Button>
            </form>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>{
                productData ?
                    productData.map((product) => (
                        <Product product={product} />
                    )) :
                    products.map((product) => (
                        <Product product={product} />
                    ))
            }</SimpleGrid>
        </>
    )
}
