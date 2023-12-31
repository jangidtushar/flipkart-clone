import { Box, Typography, styled } from "@mui/material";

import { navData } from "../../constants/data";


const Component=styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0px 130px',
justifyContent:'space-between',
overflow:'overlay',
[theme.breakpoints.down('lg')]:{
  margin:0
}
}));

const Container=styled(Box)`
padding: 12px 8px;
`

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`

const Navbar = () => {
  return (
    <Box style={{background:'#fff'}} >
    <Component>
      {navData.map((data) => (
        <Container>
            <img src={data.url} alt={data.text} style={{width:64}} />
            <Text>
                {data.text}
            </Text>
        </Container>
      ))}
    </Component>
    </Box>
  );
};
export default Navbar;
