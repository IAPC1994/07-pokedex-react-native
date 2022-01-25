import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParams } from '../router/Navigator';
import  Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonInfo } from '../components/PokemonInfo';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( { navigation, route }: Props ) => {

    const { simplePokemon, color } = route.params;
    const { id, name, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();
    const { isLoading, pokemon } = usePokemon( id );

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>
                <TouchableOpacity 
                    activeOpacity={ 0.8 }
                    style={{
                        ...styles.backButton,
                        top: top + 5
                    }}
                    onPress={ () => navigation.pop() }
                >
                    <Icon 
                        name='arrow-back-outline'
                        color='white'
                        size={ 35 }
                    />
                </TouchableOpacity>

                <Text style={{
                    ...styles.pokemonName,
                    top: top + 40
                }}> 
                    { name.toUpperCase() + '\n' }#{ id } 
                </Text>

                <Image 
                    source={ require('../assets/pokebola-blanca.png') }
                    style={ styles.pokeballImage }
                />

                <FadeInImage 
                    uri = { picture }
                    style={ styles.pokemonImage }
                />
            </View>
            
            {
                isLoading ? (
                    <View style={ styles.activityIndicador }>
                        <ActivityIndicator 
                            color={ color }
                            size={ 50 }
                        />
                    </View>
                ): <PokemonInfo pokemon={ pokemon }/>
            }
           
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer:{
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton:{
        position: 'absolute',
        left: 20,

    },
    pokemonName:{
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    },
    pokeballImage:{
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7
    },
    pokemonImage:{
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    activityIndicador:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});