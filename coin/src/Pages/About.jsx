import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Tab from '../Components/Tab/Tab'
const NFT = axios.create({
  baseURL:"https://api.coingecko.com/api/v3/nfts/list"
})
const About = () => {
  const [posts , setPosts] = useState ([])
  useEffect(() => {
      NFT.get().then((Response) => {
        setPosts(Response.data)
      })
  })






  return (
    <div className='Nft'>
      <Tab />
      <h1>NFT</h1>
      <div className='container'>
          {
            posts.map((post) => {
              return (
                <>
                  <div className='container-cars'>
                    <div className='Cards'>
                      <span>{post.id}</span><br />
                      <span>{post.contract_address}</span><br />
                      <span>{post.name}</span><br />
                      <span>{post.asset_platform_id}</span><br />
                      <span>{post.symbol}</span><br />
                    </div>
                  </div>
                </>
              )
            })
          }

      </div>
    </div>
    
  )
}

export default About