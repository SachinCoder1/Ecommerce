import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// Importing MUI Icons
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const [text, settext] = useState("")
  const [open, setopen] = useState(true)
  const { products } = useSelector(state => state.getProducts)

  const handleChange = (input) => {
    settext(input)
  }
  return (
    <SearchCont>
      <input type="text" value={text} onClick={()=>setopen(true)} onChange={(e) => handleChange(e.target.value)} placeholder='Search for products' name='search' id='search' />
      <span><SearchIcon /></span>
      {
        text &&
        <SearchItem>
          {

            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => {
              return (
                <Link to={`/products/${product.id}`} onClick={() => { setopen(false); settext("") }}>
                  <li>
                    <SearchIcon /> {product.title.longTitle}
                  </li>
                </Link>

              )
            })
          }
        </SearchItem>
      }

    </SearchCont>
  )
}

export default Search

// styles

const SearchCont = styled.div`
position:relative;
margin:0px 20px;



${'' /* Input tag */}

input{
  @media (max-width:768px){
  width:28vw;
  background: #fff;
  
}
  padding:10px 10px;
  width:38vw;
  outline:none;
  border:none;
}

${'' /* Span tag */}

span{
  position:absolute;
  right:0;
  color:#0C73EB;
  top:7px;
  padding:0px 10px;
  cursor:pointer;
  @media (max-width:768px){
  padding:0px 5px;
}
  
}
`

const SearchItem = styled.div`
position:absolute;
top:35px;
background-color:white;
width:38vw;
padding:10px 9px;
${'' /* border-radius:10px; */}
border:1px solid rgba(0,0,0,0.3);
@media (max-width:768px){
  width:50vw;
  top:40px;
  right:-15vw;
}
a{
  color:black;
  text-decoration:none;

}

li{
  list-style:none;
  color:black;
  padding:10px 10px;
  color:rgba(0,0,0,0.8);
  display:flex;
  align-items:center;
  font-size:12px;
  cursor:pointer;
  font-weight:550;

}
.MuiSvgIcon-root{
  font-size:16px;
  color:rgba(0,0,0,0.5);
  padding:0px 7px;
}
`
