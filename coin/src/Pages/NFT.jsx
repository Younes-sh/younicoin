import React,{useState,useEffect} from 'react'

const About = () => {
  const [posts , setPosts] = useState ([])


// --------------------------

useEffect(() => {
  const url = "https://api.coingecko.com/api/v3/nfts/list";

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

// --------------------------



  return (
    <div className='Nft'>
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