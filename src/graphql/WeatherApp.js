import React from 'react';
// import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'
import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink} from '@apollo/client'
import HomeWeather from './HomeWeather';
function WeatherApp(){
    const client = new ApolloClient({
        cache:new InMemoryCache(),
        uri:"https://graphql-weather-api.herokuapp.com/"
    })

    return(
        <ApolloProvider  client={client}>
        <HomeWeather/>
        </ApolloProvider>
    )
} 

export default WeatherApp