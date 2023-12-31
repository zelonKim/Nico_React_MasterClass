import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMatch } from 'react-router-dom'
import {useParams, useLocation, Routes, Route, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { fetchCoinInfo, fetchCoinTickers } from './api'
import Chart from './Chart'
import Price from './Price'
import {Helmet} from 'react-helmet'


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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;


interface RouterState {
    state: {
        name: string
    }
}


interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}


interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

/* interface ICoinProps {
  isDark: boolean
}

function Coin( { isDark }: ICoinProps  ) { */


/////////////////////


interface ICoinProps {
}

function Coin( { }: ICoinProps ) { 
    const { coinId } = useParams()
    const { state } = useLocation() as RouterState

    const priceMatch = useMatch("/:coinId/price")
    console.log(priceMatch) // 사용자가 /:coinId/price경로에 있을 경우, {params: {…}, pathname: '/btc-bitcoin/price', pathnameBase: '/btc-bitcoin/price', pattern: {…}}를 출력함.

    const chartMatch = useMatch("/:coinId/chart")
    console.log(chartMatch) 

    const {isLoading: infoLoading, data: infoData } = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId!))
    // 기존 isLoading의 이름을 infoLoading으로 바꿔줌.  기존 data의 이름을 infoData로 바꿔줌.
    // 쿼리 키를 고유한 값으로 만들어줌.
    // ! 연산자를 통해 undefined이더라도 변수를 사용할 수 있도록 해줌.

    const {isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId!), { refetchInterval: 10000 } )
    

    /* 
    const [loading, setLoading ] = useState(true)
    const [info, setInfo] = useState<InfoData>() 
    const [priceInfo, setPriceInfo] = useState<PriceData>()

    useEffect(()=> {
        (async () => {
            const infoData = await(
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json()
            console.log(infoData) 
            
            const priceData = await(
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json()
            console.log(priceData)

            setInfo(infoData)
            setPriceInfo(priceData)
            setLoading(false)
        })()
    }, [coinId]) 
    */ 

    
    const loading = infoLoading || tickersLoading

    return (
        <Container>

             
          <Helmet>
            <title>
              {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
            </title>
          </Helmet> 
         

            <Header>
                <Title>
                 {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </Title>
            </Header>

            {loading ? (
        <Loader> Loading... </Loader>
      ) : (
        <>
        
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Price:</span>
              <span>${tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>

          <Description>{infoData?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>

            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

        <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}> Chart </Link>
            </Tab>

            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}> Price </Link>
            </Tab>
        </Tabs>

          <Outlet context={{coinId}}/>
          </>
      )}
    </Container>
    )
}
export default Coin