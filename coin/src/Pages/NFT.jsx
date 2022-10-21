import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled';

const ContainerNFT = styled.div`
  width: 100%;
  height: auto;
  color: aliceblue;
`;
const Container =  styled.div`
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
`;


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
    <ContainerNFT>
      <h1>NFT</h1>
      <Container>
          {
            posts.map((post) => {
              return (
                <>
                  <Cards>
                    <div>
                      <span>{post.id}</span><br />
                      <span>{post.contract_address}</span><br />
                      <span>{post.name}</span><br />
                      <span>{post.asset_platform_id}</span><br />
                      <span>{post.symbol}</span><br />
                    </div>
                  </Cards>
                </>
              )
            })
          }

      </Container>
    </ContainerNFT>
    
  )
}

export default About