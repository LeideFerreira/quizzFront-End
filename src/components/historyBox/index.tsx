import React from 'react';
import { Container} from './styles';
import{
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
}from 'recharts';

interface IHistoryBoxProps{
    data:{
        month:string,
        amountEntry:number,
        amountOutput: number,
    }[],
    lineColorAmountEntry:string,
    lineColorAmountOutput:string,
     
}
const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data,lineColorAmountEntry,lineColorAmountOutput
}) => {

    return (
        <Container>
           
                <h2>Ola, eu sou o seu history</h2>
          <ResponsiveContainer>
              <LineChart data={data}>
                  <CartesianGrid  strokeDasharray="3 3" stroke="#cecece"/>
                  <XAxis dataKey="month" stroke="#cecece"/>
                  <Tooltip />
                  <Line 
                  type="monotone" 
                  name="Entradas"
                  dataKey="amountEntry"
                  stroke={lineColorAmountEntry}
                  strokeWidth={5}
                  dot = {{r:5}}
                  activeDot={{r:8}}
                  />
                  <Line 
                  type="monotone" 
                  name="Saidas"
                  dataKey="amountOutput"
                  stroke={lineColorAmountOutput}
                  strokeWidth={5}
                  dot = {{r:5}}
                  activeDot={{r:8}}
                  />
                 
              </LineChart>
          </ResponsiveContainer>

        </Container>
    )
}

export default HistoryBox;