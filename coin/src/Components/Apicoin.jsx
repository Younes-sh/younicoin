import React,{useState , useEffect} from 'react';
import Box from '@mui/material/Box';



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
      
  
        <div className='Coin'>
            <Box sx={{ margin:'50px'}}>
                <table style={{textAlign:'center'}} className='Table'>
                    <tr className='TableHead'>
                        <th></th>
                        <th>Name</th>
                        <th className='display4'>Symbol</th>
                        <th className='display3'>Price change 24h</th>
                        <th className=''>Price</th>
                        <th className='display2'>total supply</th>
                        <th className='display'>last updated</th>
                    </tr>
                    {posts.map((post) => {
                        return (
                            <>
                                <tr className='infoList'>
                                    <td className=''><img src={post.image.small} alt='symbol'/></td>                               
                                    <td className=''>{post.name}</td>
                                    <td className='display4'>{post.symbol}</td>
                                    <td className='display3'>{post.market_data.price_change_24h}</td>
                                    <td className=''>{post.market_data.total_supply}</td>
                                    <td className='display2'>{post.market_data.total_supply}</td>
                                    <td className='display'>{post.last_updated}</td>
                                        {/* ------------------------------------------ */}
                                </tr>
                            
                            </>
                        )
                    })}
                </table>
            </Box>
            

        </div>
    </>
  )
}

export default Coin ;