import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import countriesData from '../../data/countries.json';
import { FlatList } from 'react-native-web';


const App = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
      setCountries(countriesData);
    }, []);

    const renderCountry = ({ item }) => (
        <Text style={{ fontSize: 18, marginVertical: 5 }}>{item.name}</Text>
      );

    return(
        <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Bereiste Länder</Text>
        <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            renderItem={renderCountry}
        />
        </View>
    )
}


export default App