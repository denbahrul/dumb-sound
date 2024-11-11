import { useEffect, useState } from "react";
import Header from "../../../components/ui/header";
import MusicCard from "../../../components/ui/music-card";
import Player from "../../../components/ui/player";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getMusic } from "../../../stores/music/async";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.music);
  const musics = entities;
  const [musicUrl, setMusicUrl] = useState<string>("");

  useEffect(() => {
    dispatch(getMusic());
  }, []);

  function onClick(musicUrl: string) {
    setMusicUrl(musicUrl);
  }

  if (loading === "pending") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className="m-auto max-w-[1280px] p-8">
        <p className="text-orange pb-4 text-center text-xl font-semibold">
          Dengarkan dan Rasakan
        </p>
        <div className="my-4 mb-24 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {musics.map((music) => {
            return (
              <div onClick={() => onClick(music.musicUrl)}>
                <MusicCard music={music} />
              </div>
            );
          })}
        </div>
      </div>
      <Player musicUrl={musicUrl} />
    </div>
  );
}
