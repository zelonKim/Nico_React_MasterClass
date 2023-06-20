import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCoins } from './api'

const Container = styled.div`
    padding: 0px 20px;
`

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CoinsList = styled.ul``
    
const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 15px;
    transition: color;
    a {
        display: flex;
        align-items: center
        padding: 10px;
        trainsition: color 0.2s ease-in;
        display: block
    }
    &: hover {
        a {
            color:${props => props.theme.accentColor}
        }
    }
`

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor}
`

const Loader = styled.span`
    text-align: center;
    display: block;
`

const Img = styled.img`
    width: 35px;
    height: 35pxl;
    margin-right: 10px;
`

interface CoinInterface {
        "id": string,
        "name": string,
        "symbol": string,
        "rank": number,
        "is_new": boolean,
        "is_active": boolean,
        "type": string
}

function Coins() {
    const { isLoading, data } = useQuery<CoinInterface[]>(["allCoins"], fetchCoins, { select: (data) => data.slice(0,100) })

 /* 
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
         (async() => {
      
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json(); 
      
            setCoins(json.slice(0, 100));
            setLoading(false)
        })()
    }, []) 
*/

    return (
    <Container>
        <Header>
            <Title> Coin </Title>
        </Header>
        {isLoading ? (
            <Loader>"Loading..."</Loader>
        ) : (
        <CoinsList>
            {data?.map((coin) => (
                <Coin key={coin.id}>
                    <Link 
                        to={`/${coin.id}`}
                        state={ coin }
                    >
                        <Img 
                            src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} 
                        />
                        {coin.name} &rarr; 
                    </Link>
                </ Coin>
            ))}
         </CoinsList>
        )}
    </Container>
    )
}
export default Coins