import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import CurrencyGQL from './CurrencyGQL';

function CurrencyApp() {
    const client= new ApolloClient({
        uri:'https://48p1r2roz4.sse.codesandbox.io',
        cache: new InMemoryCache()
    });
    return (
        <ApolloProvider client={client}>
            <CurrencyGQL/>
        </ApolloProvider>
    )
}

export default CurrencyApp
