import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from "@mui/material"
import { getProducts } from "../../redux/actions/productActions.js"
import { useDispatch, useSelector } from "react-redux"
import Slide from './Slide'
import MidSilde from './MidSilde'
import MidSection from './MidSection'

const Container = styled(Box)`
padding:10px 10px;
background:#F2F2F2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts) // this is taken from redux strore get products useEffect get produts unsder is different from it  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <MidSilde products={products} title="Deal of the day" timer={true} />
        <MidSection/>
        <Slide products={products} title="Discount for You" timer={false}  />
        <Slide products={products} title="Suggesting Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season top picks" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </Container>
    </>
  )
}

export default Home
