import React,{useState , useEffect} from 'react';
import styled from '@emotion/styled';


const Box = styled.div`
    width: 80%;
    margin: 40px 0;
`;

const Ul = styled.ul`
    li {
        width:90%;
        padding: 5px ;
        list-style-type: none;
        font-size: 20px;
        display: flex;
        align-items: center;
    }
`;
const ContainerHead = styled.div`
  width: 90%;
  padding: 5px 30px;
  display : flex;
`;
const ContainerCoin = styled.div`
  width :90% ;
  height: 50px;
  margin-top: 20px;
  padding: 5px 40px;
  display: flex;
  background-color: #41436141;
`;

const Coin = () => {

    const [posts , setPosts] = useState ([]);

    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/coins";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setPosts(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
    // -------------------------------
  return (
    <>
            <Box>
                <Ul >
                    <ContainerHead>
                        <li>---------</li>
                        <li>Name</li>
                        <li className='display4'>Symbol</li>
                        <li className='display3'>Price change 24h</li>
                        <li className=''>Price</li>
                        <li className='display2'>total supply</li>
                        <li className='display'>last updated</li>
                    </ContainerHead>
                    {posts.map((post) => {
                        return (
                            <ContainerCoin>
                                    <li className=''><img src={post.image.small} alt='symbol'/></li>                               
                                    <li className=''>{post.name}</li>
                                    <li className='display4'>{post.symbol}</li>
                                    <li className='display3'>{post.market_data.price_change_24h}</li>
                                    <li className=''>{post.market_data.total_supply}</li>
                                    <li className='display2'>{post.market_data.total_supply}</li>
                                    <li className='display'>{post.last_updated}</li>
                                    {/* ------------------------------------------ */}
                            </ContainerCoin>
                        )
                    })}
                </Ul>
            </Box>
    </>
  )
}

export default Coin ;