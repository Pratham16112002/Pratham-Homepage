import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelDog from '../voxel-keyboard'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <title>Pratham Dhiman - Homepage</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        <VoxelDog />
        {children}
      </Container>
    </Box>
  )
}

export default Main
