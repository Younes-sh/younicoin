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
        <div className='w-full bg-red-400'>
            <table style={{textAlign:'left'}}>
                <tr>
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
                            <tr>
                                <td><img src={post.image.small} alt='symbol'/></td>                               
                                <td>{post.name}</td>
                                <td>{post.symbol}</td>
                                <td>{post.market_data.price_change_24h}</td>
                                <td>{post.market_data.total_supply}</td>
                                <td>{post.market_data.total_supply}</td>
                                <td>{post.last_updated}</td>
                                {/* <td>{post}</td> */}
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