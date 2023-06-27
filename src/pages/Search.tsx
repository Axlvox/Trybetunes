import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import { AlbumType } from '../types';

function Search() {
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AlbumType[]>([]);
  const [searchArtist, setSearchArtist] = useState('');

  const fetchData = useCallback(async () => {
    try {
      const response = await searchAlbumsAPI(artist);
      setData(response);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, [artist]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleArtist = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setSearchArtist(artist);
    await fetchData();
    setLoading(false);
    setArtist('');
  };

  return (
    <div>
      {searchArtist && (
        <div>
          Resultado de álbuns de:
          {' '}
          {searchArtist}
        </div>
      )}
      <input
        type="text"
        value={ artist }
        onChange={ handleArtist }
        data-testid="search-artist-input"
      />
      <button
        type="submit"
        data-testid="search-artist-button"
        disabled={ artist.length < 2 }
        onClick={ handleSearch }
      >
        Pesquisar
      </button>
      {data.length > 0 ? (
        <div>
          {data.map((album) => (
            <div key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
                <h2>{album.collectionName}</h2>
                <img src={ album.artworkUrl100 } alt={ album.collectionName } />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>Nenhum álbum foi encontrado</div>
      )}

      {loading && <Loading />}
    </div>
  );
}

export default Search;
