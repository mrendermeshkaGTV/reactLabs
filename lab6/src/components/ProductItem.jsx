import styles from '../index.module.css';
import { Card, CardFooter, Heading, Button, CardBody, Image, Stack, Text, Grid, GridItem } from '@chakra-ui/react';

export default function (props) {
    const { product } = props

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Grid
                h={{ base: '100%', sm: '200px' }}
                templateColumns='repeat(2, 1fr)'
                gap={4}
            >
                {
                    product.images.map((image) => (
                        <GridItem>
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                minW="100px"
                                src={image}
                                alt={`${product.title}-${image}`}
                                className={styles.product_image}
                            />
                        </GridItem>
                    ))
                }
            </Grid>

            <Stack>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{product.title}</Heading>
                        <Text py='2'>{product.description}</Text>
                        <Text py='2'>Rating: {product.rating}/5</Text>
                        <Text py='2'>In stock: {product.stock}</Text>
                        <Text color='blue.600' fontSize='2xl'>${product.price}</Text>
                    </Stack>

                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Buy
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}
