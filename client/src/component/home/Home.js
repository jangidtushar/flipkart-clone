//components import
import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { useEffect } from "react";
import {getProducts} from "../../redux/actions/productActions"
import {useDispatch, useSelector} from "react-redux"
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state=> state.getProducts)

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <Slide products={products} title="Discount for you" timer={false} />
        <MidSection/>
        <Slide products={products} title="Suggestion Items" timer={false} />
        <Slide products={products} title="Top Selections" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending offers" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </Component>
    </>
  );
};

export default Home;

// ********************************* Check this is the main file in the home component that take all navbaar banner and etc**********************
