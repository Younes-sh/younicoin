import React,{useState , useEffect} from 'react';
import axios from 'axios';
const client = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/coins'
})
const Apicoin = () => {

    const [posts , setPosts] = useState ([]);
    useEffect(() => {
        client.get().then((response) => {
            setPosts(response.data)
        })
    })
    
  return (
    <>
      
  
        <div className='Apicoin'>
          
            <table style={{textAlign:'left'}} className='Table'>
                <tr className=''>
                    <th></th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Pricr change 24h</th>
                    <th>Price</th>
                    <th>total supply</th>
                    <th>last updated</th>
                </tr>
                {posts.map((post) => {
                    return (
                        <>
                            <tr className='infoList'>
                                <td className=''><img src={post.image.small} alt='symbol'/></td>                               
                                <td className=''>{post.name}</td>
                                <td className='display'>{post.symbol}</td>
                                <td className='display'>{post.market_data.price_change_24h}</td>
                                <td className=''>{post.market_data.total_supply}</td>
                                <td className='display'>{post.market_data.total_supply}</td>
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

export default Apicoin ;