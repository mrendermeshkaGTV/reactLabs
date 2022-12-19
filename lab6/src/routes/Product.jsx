import {Container} from '@chakra-ui/react';
import {useLoaderData} from "react-router-dom";
import ProductItem from '../components/ProductItem'

export default function () {
    const product = useLoaderData();
    const Container = styled.div`
      display: flex;
      justify-content: space-around;
      background-color: #282c34;
      color: #ffffff;
      font-family: Consolas, sans-serif!important;
    `
    return (<Container>{<ProductItem product={product}/>}</Container>)
}
