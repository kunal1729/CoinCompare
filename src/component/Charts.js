import React from 'react'
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { CryptoContext } from '../context/CryptoContext';
import { useContext } from 'react';

function CustomTooltip({ payload, label, active, currency}) {

    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label text-cyan">{`${label} : ${new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency
            }).format(payload[0].value)}`}M</p>
        </div>
      );
    }
  
    return null;
}

const ChartComponent = ({data, currency, type}) =>
{
    return (

        <ResponsiveContainer>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey={type} stroke="#14ffec" />
                <CartesianGrid stroke="#323232" />
                <XAxis stroke="#8884d8" dataKey="date" />
                <YAxis tick={{ fontSize: 14 }} stroke="#8884d8" dataKey= {type} />
                <Tooltip cursor = {false} content={<CustomTooltip currency = {currency} />} />
            </LineChart>
        </ResponsiveContainer>
    )
}

const Charts = ({coinId}) => {

  const [chartData, setChartData] = useState({});
  const {currency, coinData} = useContext(CryptoContext);
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(1);
  
  const getChartData = async (coinId) => {
    try {
        const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=daily&precision=4`               
        ).then(res => res.json()).then(json => json) ;
        console.log(data);
        const convertedData = data[type].map((item) => {
            return {
                date : new Date(item[0]).toLocaleDateString(),
                [type] : item[1]/1000000 ,
            }
        }
        )
        setChartData(convertedData)
        console.log(convertedData);

    } catch (error) {
        console.log(error);
    }
  }

  useLayoutEffect(() => {
    getChartData(coinId)
  }, [coinId, type, days])

  return (
    <div className='w-full ml-4 space-y-4 lg:h-[40%] h-[60%]'>
      <h1 className='font-bold text-lg text-center mb-3'>Statistics</h1>
      <ChartComponent data = {chartData} currency = {currency} type={type}/>
      <div className='space-x-4  text-center'>
        <button className= {` p-1 rounded-md ${type === "prices" ? 'bg-cyan text-gray-200' : 'bg-gray-200 text-white'}`} onClick={() => setType("prices")} >Price</button>
        <button className= {` p-1 rounded-md ${type === "market_caps" ? 'bg-cyan text-gray-200' : 'bg-gray-200 text-white'}`} onClick={() => setType("market_caps")} >Market Cap</button>
        <button className= {` p-1 rounded-md ${type === "total_volumes" ? 'bg-cyan text-gray-200' : 'bg-gray-200 text-white'}`} onClick={() => setType("total_volumes")}>Total Volume</button>
      </div>
      <div className='space-x-4 text-center'>
        <button className= {` p-1 rounded-md ${days === 1 ? 'bg-cyan text-gray-200' : 'bg-gray-200 text-white'}`} onClick={() => setDays(1)} >24h</button>
        <button className= {` p-1 rounded-md ${days === 7 ? 'bg-cyan text-gray-200' : 'bg-gray-200 text-white'}`} onClick={() => setDays(7)} >7d</button>
        <button className= {` p-1 rounded-md ${days === 30 ? 'bg-cyan text-gray-200' : 'bg-gray-200 text-white'}`} onClick={() => setDays(30)} >30d</button>
      </div>
      <div className='space-y-4 ml-4 flex flex-col'>
        <div className='flex  space-x-2 '>
          <label className='text-gray-100'>Market Cap Rank : </label>
          <p>{coinData.market_cap_rank}</p>
          
        </div>
        <div className='flex flex-col space-y-2'>
            <h1 className='text-gray-100'>Sentiment Analysis:</h1>
            <p className='text-cyan space-x-2 flex'>
              <h1>{coinData.sentiment_votes_up_percentage}%</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            </p>
            <p className='text-red flex space-x-2'>
              <h1>{coinData.sentiment_votes_down_percentage}%</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-down"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
            </p>
          </div>
      </div>
    </div>
  )
}

export default Charts;
