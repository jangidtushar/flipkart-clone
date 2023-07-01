import { Box, InputBase, styled } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Searchcontainer = styled(Box)`
background:#fff;
width:38%;
border-radius: 2px;
margin-left:10px;
display:flex
`
const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`

const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
display:flex;
`

const Search = () => {

    const [text, setText] = useState('')

    const getText = (text) => {
        setText(text)
    }

    return (
        <Searchcontainer>
            <InputSearchBase
                placeholder='Search for products brands and more'
                onChange={(e) => getText(e.target.value)}
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </Searchcontainer>
    )
}

export default Search
