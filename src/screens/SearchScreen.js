import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price == '$' || '$$' || '$$$'
        return results.filter(results => {
            return results.price === price;
        })
    };

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.text}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1
    },
    text: {
        marginLeft: 15
    }
});

export default SearchScreen;