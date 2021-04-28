import { useState } from 'react';
import Movie from './Movie';
import { getMovies } from '../utils/yourService';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    
    const handleClick = async () => {
        const data = await getMovies();
        setMovies(data);
    };

return (
    <>
    <button type="button" onClick={handleClick}>
        Button
    </button>
    
    {movies?.length > 0 ? movies.map((movies) => <Movie key={movies.slug} {...movies} />) : null}
    </>
    );
};

export default Movies;