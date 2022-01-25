import React from 'react';
import { ActivityIndicator, FlatList, Image, Text } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image 
                source={ require('../assets/pokebola.png') }
                style={ styles.pokeballBg }
            />
            {/* <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20  }}> Pokedex </Text> */}
            <FlatList 
                data={ simplePokemonList }
                keyExtractor={ (pokemon) => pokemon.id }
                renderItem={ ({ item }) => (
                    <Image 
                        source={{ uri: item.picture }}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />
                )}

                showsVerticalScrollIndicator={ false }

                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.4 }

                ListFooterComponent={( 
                    <ActivityIndicator 
                        style={{ height: 100 }}
                        size={ 20 }
                        color='grey'
                    />
                )}
            />
        </>
    );
};
