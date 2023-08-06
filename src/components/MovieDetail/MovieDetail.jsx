import { useState, useEffect } from 'react';
import MovieAPI from '../../api/MovieAPI';
import { APIKey } from '../../api/MovieAPIKey'
import { useParams } from 'react-router-dom';
import './MovieDetail.scss'

const MovieDetail = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await MovieAPI.get(`?apiKey=${APIKey} &i=${id}&plot=full`).catch((err) => console.error('Error', err))
            setMovie(res.data)
            setLoading(true)
        }

        fetchDetail()
    }, [])

    return (
        <div>
            { loading ? (
                <div className='movie-detail-con container'>
                    <div className='movie-detail-img'>
                        <img src={movie.Poster} alt={movie.Title}/>
                    </div>
                    <div className='movie-detail-info'>
                        <h3>{ movie.Title }</h3>
                        <p style={{ margin: '2rem 0' }}>{movie.Plot}</p>
                        <div>
                            <strong>Released : {movie.Released}</strong>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 style={{ margin: '1rem 0' }}>Loading...</h4>
            )}
        </div>
    );
}
 
export default MovieDetail;