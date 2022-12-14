import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled';

const ContainerNFT = styled.div`
  width: 100%;
  height: auto;
  color: aliceblue;
`;
const Content =  styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(450px, 1fr));
  gap: 7px;
`;
const Cards = styled.div`
  min-height: 150px;
  margin: 21px;
  box-shadow: 0 0 3px gray;
  border-radius: 7px;
  padding: 15px ;
`;


const About = () => {
  const [posts , setPosts] = useState ([])


// --------------------------





useEffect(() => {






  // const url = "https://api.rarible.org/v0.1/activities/byItem?itemId=ETHEREUM:0x23581767a106ae21c074b2276d25e5c3e136a68b:1746&type=MINT";


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
    <>
      <ContainerNFT>
        <h1>NFT</h1>
        <Content>
            {
              posts.map((post) => {
                return (
                  <>
                    <Cards>
                    
                      <span>{post.id}</span><br />
                      <span>{post.contract_address}</span><br />
                      <span>{post.name}</span><br />
                      <span>{post.asset_platform_id}</span><br />
                      <span>{post.symbol}</span><br />


                      {/* ---------------------- */}  
                      {/* <span>{post.id}</span><br />
                      <span>{post.name}</span><br />
                      <span>{post.meta.attributes}</span><br />
                      <span>{post.creators.value}</span><br />
                      <span>{post.blockchain}</span><br /> */}
                      
                    </Cards>
                  </>
                )
              })
            }

        </Content>
      </ContainerNFT>
    </>
    
  )
}

export default About