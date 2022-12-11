import styles from '../index.module.css'
import { Link } from "react-router-dom";
import { Card, CardFooter, Heading, Button, CardBody, Image, Stack, Text, Divider } from '@chakra-ui/react';

export default function (props) {
    const { product } = props

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    className={styles.product_image}
                    src={product.thumbnail}
                    alt={product.title}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{product.title}</Heading>
                    <Text color='blue.600' fontSize='2xl'>${product.price}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    <Link to={`${product.id}`}>Buy</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
