import {useLoaderData} from "react-router-dom";
import {SimpleGrid} from '@chakra-ui/react';
import Category from '../components/Category'

export default function () {
    const categories = useLoaderData();

    return (<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(170px, 1fr))'>{
            categories.map((category) => (
                <Category category={category}/>
            ))
        }</SimpleGrid>
    )
}
