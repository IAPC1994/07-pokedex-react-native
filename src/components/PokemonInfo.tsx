import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PokemonDetails } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props{
    pokemon: PokemonDetails
}

export const PokemonInfo = ({ pokemon }: Props ) => {
  return (
      <ScrollView
        style={{ ...StyleSheet.absoluteFillObject }}
        showsVerticalScrollIndicator= { false }
      >
            <View
                style={{
                    ...styles.container,
                    marginTop: 370
                }}
            >

            <Text style={{
                ...styles.title
            }}>Types</Text>

            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map( ({ type }) => (
                        <Text
                            style={{ ...styles.regularText, marginRight: 10 }}
                            key={ type.name }
                        >{ type.name.toUpperCase() }</Text>
                    ))
                }
            </View>

            <Text style={{
                ...styles.title
            }}>Weight</Text>

            <Text
                style={{ ...styles.regularText, marginRight: 10 }}
                key={ pokemon.weight }
            >{ pokemon.weight } lb.</Text>
          </View>

          <View style={ styles.container }>
            <Text style={{
                ...styles.title
            }}>Sprites</Text>
          </View>

          <ScrollView
            horizontal= { true }
            showsHorizontalScrollIndicator= { false }
          >
            <FadeInImage 
                uri={ pokemon.sprites.front_default }
                style={ styles.basicSprite }
            />

            <FadeInImage 
                uri={ pokemon.sprites.back_default }
                style={ styles.basicSprite }
            />

            <FadeInImage 
                uri={ pokemon.sprites.front_shiny }
                style={ styles.basicSprite }
            />

            <FadeInImage 
                uri={ pokemon.sprites.back_shiny }
                style={ styles.basicSprite }
            />
          </ScrollView>

            <View
                style={{ ...styles.container }}
            >
              <Text style={ styles.title }> Base Abilities </Text>

              <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <Text
                            style={{ ...styles.regularText, marginRight: 10 }}
                            key={ ability.name }
                        >{ ability.name.toUpperCase() }</Text>
                    ))
                }
            </View>
          </View>


          <View
                style={{ ...styles.container }}
            >
              <Text style={ styles.title }> Moves </Text>

              <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text
                            style={{ ...styles.regularText, marginRight: 10 }}
                            key={ move.name }
                        >{ move.name.toUpperCase() }</Text>
                    ))
                }
            </View>
          </View>

          <View
                style={{ ...styles.container }}
            >
              <Text style={ styles.title }> Stats </Text>

              <View>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View key={ stat.stat.name + i } style={{ flexDirection: 'row'}}>
                            <Text
                                style={{ ...styles.regularText, marginRight: 10, width: 170 }}
                                key={ stat.stat.name }
                            >{ stat.stat.name.toUpperCase() }</Text>

                            <Text
                                style={{ ...styles.regularText, marginRight: 10, fontWeight:'bold' }}
                                key={ stat.base_stat }
                            >{ stat.base_stat }</Text>
                        </View>
                    ))
                }
            </View>
            <View style={{
                marginBottom: 20,
                alignItems: 'center'
            }}>
                <FadeInImage 
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />
            </View>

          </View>

      </ScrollView>
  );
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    regularText:{
        fontSize: 19
    },
    basicSprite:{
        width: 100,
        height: 100
    }
});