import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Grid } from '@mui/material';
import PokeCard from '../Card/PokeCard';
import Navbar from '../Navbar/Navbar';


function Page01() {
    const [pokemons, setPokemons] = useState([]);
    const [pkmnTypes, setPkmnTypes] = useState([]);
    

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
        console.log(name)

        var filtered = [];
        if (name === "") {
            getPkmn();
        }
        
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filtered.push(pokemons[i])                
            } 

        }
        console.log(filtered)
        setPokemons(filtered);

    }
    


    const handleClick = ({target})=>{
        console.log(target.parentElement.parentElement.children[1].children[0].textContent) // PKMN name
        
    }

    return (
        <div >
            <Navbar pokeFilter={pokeFilter}/>           
            <Grid container spacing={2} sx={{backgroundColor:"lightsteelblue", paddingY: 10, paddingX: 5}}>
                {pokemons.map((pokemon, key) => (
                    <Grid item xl={2.4} md={3} sm={6} xs={12} key={key}> 
                        <PokeCard image={pokemon.data.sprites.other.dream_world.front_default}
                            name={pokemon.data.name}
                            NumPokeDex={pokemon.data.id}
                            moves={pokemon.data.moves}
                            handleClick={handleClick}
                            types={pkmnTypes}
                            pokeNum={key}
                            baseStatus={pokemon.data}
                            
                            />
                    </Grid>
                ))
            } </Grid>
        </div>
    )
}

export default Page01
