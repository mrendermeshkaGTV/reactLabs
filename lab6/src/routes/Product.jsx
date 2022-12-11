import {Container} from '@chakra-ui/react';
import {useLoaderData} from "react-router-dom";
import ProductItem from '../components/ProductItem'

export default function () {
    const product = useLoaderData();
    const Container = styled.div`
      display: flex;
      justify-content: center;
      background-color: #282c34;
      color: white;
      font-family: Consolas, sans-serif!important;
    `
    return (<Container>{
            <ProductItem product={product}/>
        }</Container>
    )
}
