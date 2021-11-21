import {gql, useLazyQuery, useQuery} from '@apollo/client'
import React from 'react'
const EXCHANGE_RATE = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;
function CurrencyGQL() {

    const {loading, error, data} = useQuery(EXCHANGE_RATE);
    if(loading) return <p>Loading.....</p>
    if(error) return <p>Error....</p>
    console.log(data)
    return (
        <div>
            {
                data.rates.map((item)=>{
                    return(
                        <div key={item.currency}>
                            <p>{item.currency}: {item.rate}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CurrencyGQL
