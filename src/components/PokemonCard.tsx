import React, { useRef } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from "./FadeInImage";
import { useState, useEffect } from 'react';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ( { pokemon }: Props ) => {

    const [ bgColor, setBgColor ] = useState('grey');
    const isMounted = useRef(true);
    const navigator = useNavigation();

    useEffect(() => {

        ImageColors.getColors( pokemon.picture, { fallback: 'grey' } )
            .then( colors => {
                if( !isMounted.current ) return;

                switch (colors.platform) {
                    case 'android':
                        setBgColor(colors.dominant || 'grey');
                        break
                    case 'web':
                        setBgColor(colors.dominant || 'grey' );
                      break
                    case 'ios':
                        setBgColor(colors.background || 'grey' );
                      break
                    default:
                      throw new Error('Unexpected Error: useEffect getColors Failed');
                  }
            });
            return () => {
                isMounted.current = false;
            }
    }, []);
    

  return (
      <TouchableOpacity
        activeOpacity={ 0.9 }
        onPress={ () => navigator.navigate('PokemonScreen' as never, {simplePokemon: pokemon, color: bgColor} as never)}
      >
        <View style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
        }}>
            <View>
                <Text style={ styles.name }>{ pokemon.name.toUpperCase() } { '\n#' + pokemon.id }</Text>
            </View>
            <View
                style={ styles.pokeballContainer }
            >
                <Image 
                    source={ require('../assets/pokebola-blanca.png')}
                    style={ styles.pokeball }
                />
            </View>

            <FadeInImage 
                uri={ pokemon.picture }
                style={ styles.pokemonImage }
            />
        </View>
        
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name:{
        color:'white',
        fontSize: 15,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokeball:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25,
    },
    pokemonImage:{
        width: 95,
        height: 95,
        position: 'absolute',
        alignSelf: 'center',
        bottom: -5
    },
    pokeballContainer:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
});