import React,{useState , useEffect} from 'react'
import MovingText from 'react-moving-text'
import axios from 'axios'
const CryptoMove = axios.create({
    baseURL:"https://api.binance.com/api/v3/ticker/price"
})
const TextMove = () => {
    const [posts , setPosts] = useState ([])
    useEffect(() => {
        CryptoMove.get().then((responsive) => {
            setPosts(responsive.data)
        })
    })
  return (
    <div className='textMove'>
        <MovingText
        type="animation_type"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none">
        
            {
                posts.map((post) => {
                    return (
                        <div className='containerTextMove'>
                            <div className='contentText'>
                                <span>{post.symbol}</span>
                                <span>{post.price}</span>
                            </div>
                        </div>
                    )
                })
            }
        </MovingText>
    </div>
  )
}

export default TextMove ;