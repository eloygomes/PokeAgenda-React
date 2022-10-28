import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Grid} from '@mui/material';
import PokeCard from '../Card/PokeCard';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';


function Page01() {
    const [pokemons, setPokemons] = useState([]);
    // const [speciesUrl, setSpeciesUrl] = useState([]);
    const [pkmnTypes, setPkmnTypes] = useState([]);
    const [pokeListFiltered, setpokeListFiltered] = useState([]);

    useEffect(() => {
        getPkmn();
        getPkmnType()
        
    }, [])

    const getPkmnType = ()=>{
        var pkmnTypesUrl = [];
        for (var i = 1; i < 152; i++) {
            pkmnTypesUrl.push(`https://pokeapi.co/api/v2/pokemon-form/${i}/`)
        }

        axios.all(pkmnTypesUrl.map((pokeTypeUrl)=>axios.get(pokeTypeUrl))).then((res)=>{
            setPkmnTypes(res)
            // console.log(pkmnTypes)
        })
    }

    const getPkmn = () => { // get all POKEMONS
        var endPoints = [];
        for (var i = 1; i < 152; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        axios.all(endPoints.map((endP) => axios.get(endP))).then((res) => {
            setPokemons(res)
        })
    }

    const pokeFilter = (name) => {
        var filtered = [];
        if (name === "") {
            getPkmn();
        }
        console.log(name)

        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filtered.push(pokemons[i])
            }
            else {
                console.log(pokemons[i])
                // filtered.push(pokemons[i].data.name)       
            }
        }
        console.log(filtered)
        setPokemons(filtered);
        
    }

    const handleClick = ({target})=>{
        console.log(target.parentElement.parentElement.children[1].children[0].textContent) // PKMN name
    }

    return (
        <>
            <Navbar pokeFilter={pokeFilter}/>
            <Header/>
            
            <Grid container
                spacing={2}                  
                sx={{backgroundColor:"white"}}>
                {pokemons.map((pokemon, key) => (
                    <Grid item
                        xs={2}
                        key={key}
                        data-name="eloy"> 
                        
                        <PokeCard image={pokemon.data.sprites.front_default}
                            name={pokemon.data.name}
                            NumPokeDex={pokemon.data.id}
                            moves={pokemon.data.moves}
                            handleClick={handleClick}
                            types={pkmnTypes}
                            pokeNum={key}
                            
                            />
                    </Grid>
                ))
            } </Grid>
        </>
    )
}

export default Page01