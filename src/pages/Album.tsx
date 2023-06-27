import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MusicCard from '../../MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import { AlbumType, SongType } from '../types';

function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [albumData, setAlbumData] = useState<[AlbumType, SongType[]]>([]);

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        const response = await getMusics(id);
        setAlbumData(response);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    }
    fetchAlbumData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!albumData) {
    return <div>Nenhum dado do álbum foi encontrado</div>;
  }

  const { artistName, collectionName } = albumData[0];
  const musics = albumData.slice(1);

  return (
    <span>
      <h2 data-testid="artist-name">
        {' '}
        {artistName}
        {' '}
      </h2>
      <h2 data-testid="album-name">
        {' '}
        {collectionName}
        {' '}
      </h2>
      {musics.map((music) => (
        <MusicCard
          key={ music.trackId }
          trackName={ music.trackName }
          previewUrl={ music.previewUrl }
        />
      ))}
    </span>
  );
}

export default Album;
