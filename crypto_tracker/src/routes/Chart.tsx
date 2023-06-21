import { useQuery } from "@tanstack/react-query"
import { useOutletContext, useParams } from "react-router-dom"
import { fetchCoinHistory } from "./api"
import ApexChart from 'react-apexcharts'
import {useRecoilValue} from 'recoil'
import { isDarkAtom } from "./atoms"

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}


/* interface ChartProps {
    coinId: string;
    isDark: boolean;
}

function Chart() {
    const {coinId, isDark} = useOutletContext<ChartProps>() 
*/


interface ChartProps {
    coinId: string;
}
    
function Chart() {
    const {coinId} = useOutletContext<ChartProps>()

    const isDark = useRecoilValue(isDarkAtom)

    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId))
    
    return (
        <h1>
        { isLoading ? 
            ("Loading chart...") 
            : 
            (<ApexChart 
                type="line" 
                series={[
                    {
                        name: "price",
                        data: data?.map((price) => price.close) as number[]
                    },
                ]}
                options={{
                    theme:{
                        mode: isDark ? "dark" : "light"
                    },
                    chart: {
                        height: 300,
                        width: 500,
                        toolbar: {
                            show: false
                        },
                        background: "transparent"
                    },
                    grid: {show: false},
                    stroke: {
                        curve: "smooth",
                        width: 5
                    },
                    yaxis: {
                        show: false
                    },
                    xaxis: {
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: { show: false },
                        categories: ["a", "b", "a", "b"]
                    },
                    fill: {type: "gradient", 
                            gradient: {gradientToColors: ["#0be881"], stops: [0, 100]},
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `${value.toFixed(2)}`
                            }
                        }
                }}
            />
        )}
    </h1>
    )
}
export default Chart