async function fetchPokemonData() {
    try {
        const response = await fetch('pokemon.json');
        const pokemonData = await response.json();

        pokemonData.forEach(pokemon => {
            const newPokemon = new Pokemon(pokemon.name, pokemon.sprite, pokemon.type);
            newPokemon.displayPokemon();
        });
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}

// calls the function to load all data when page loads
fetchPokemonData();
