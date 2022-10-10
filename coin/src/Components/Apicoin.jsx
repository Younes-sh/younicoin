import React,{useState , useEffect} from 'react';
import axios from 'axios';
const client = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/coins'
})
const Coin = () => {

    const [posts , setPosts] = useState ([]);
    useEffect(() => {
        client.get().then((response) => {
            setPosts(response.data)
        })
    })
    
  return (
    <>
      
  
        <div className='Coin'>
          
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

        </div>
    </>
  )
}

export default Coin ;