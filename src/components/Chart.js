import React, { useState }from 'react'
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { mockHistoricalData } from '../constants/mock';
import { convertUnixTimestampToDate } from '../helpers/date-helper';
import Card from './Card';

const Chart = () => {
    const [data, setData] = useState(mockHistoricalData);
    const [fillter, setFillter] = useState('1W');

    const formetData = () => {
        return data.c.map((item, index) => {
            return {
                value: item.toFixed(2),
                data: convertUnixTimestampToDate(data.t[index]),
            };
        })
    }
  return (
    <Card>roke
        <ResponsiveContainer>
            <AreaChart data={formetData(data)}>
                <Area
                  type='monotone'
                  dataKey='value'
                  stroke='#312e81'
                  fillOpacity={1}
                  strokeWidth={0.5}    
                />
                <Tooltip/>
                <XAxis dataKey={'date'}/>
                <YAxis domain={['dataMin', 'dataMax']}/>
            </AreaChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default Chart