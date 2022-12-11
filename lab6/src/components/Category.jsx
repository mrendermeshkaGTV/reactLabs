import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, Heading, Button } from '@chakra-ui/react';

export default function (props) {
const {category} = props

    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{category}</Heading>
            </CardHeader>
            <CardFooter>
                <Button><Link to={`${category}/products`}>View Here</Link></Button>
            </CardFooter>
        </Card>
    )
}
