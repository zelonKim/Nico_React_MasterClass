import { useState, useEffect } from 'react'
import {useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'


const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor}
`

const Loader = styled.span`
    text-align: center;
    display: block;
`

const Container = styled.div`
    padding: 0px 20px;
`

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

interface RouterState {
    state: string
}


function Coin() {
    const [loading, setLoading ] = useState(true)
    const { coinId } = useParams()

    /*     
    const location = useLocation(); 
    console.log(location) // URL이 http://localhost:3000/btc-bitcoin일 경우, {pathname: '/btc-bitcoin', search: '', hash: '', state: 'Bitcoin', key: 'w8ya5v6j'}가 출력됨. 
    */

    const {state} = useLocation() as RouterState

    const [info, setInfo] = useState({})
    const [priceInfo, setPriceInfo] = useState({})

    useEffect(()=> {
        (async () => {
            const infoData = await(
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json()
            console.log(infoData) // {id: 'btc-bitcoin', name: 'Bitcoin', symbol: 'BTC', rank: 1, is_new: false, …}
            
            const priceData = await(
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json()
            console.log(priceData)

            setInfo(infoData)
            setPriceInfo(priceData)
        })()
    }, []) 

    return (
        <Container>
            <Header>
                <Title> {state || "Loading"} </Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null};
        </Container>
        )
    }
export default Coin