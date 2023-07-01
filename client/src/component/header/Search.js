import { InputBase, Box,styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import {getProducts} from "../../redux/actions/productActions"
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"

const SearchContianer= styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`

const SearchIconWrapper=styled(Box)`
color:blue;
padding:5px;
display-flex;
`

const ListWrapper=styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px;
`

const Search = () => {

    const [text,setText]=useState('')

    const {products}=useSelector(state=> state.getProducts)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text)
    }

    return (
        <SearchContianer>
            <InputSearchBase 
            placeholder="search for brand product and more" 
            onChange={(e)=>getText(e.target.value)}
            value={text}
            />
            <SearchIconWrapper><SearchIcon/></SearchIconWrapper>
            {console.log(text)}
            {
                text &&
                <ListWrapper>
                    {products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLocaleLowerCase())).map(product=>(
                        <ListItem>
                            <Link 
                            to={`/product/${product.id}`}
                            onClick={()=>setText('')}
                            style={{textDecoration:'none' ,color:'inherit'}}
                             >
                            {product.title.longTitle}
                            </Link>
                        </ListItem>
                    ))
                    }
                </ListWrapper>
            }
        </SearchContianer>
    );
};

export default Search;