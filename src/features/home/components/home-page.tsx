import Header from "../../../components/ui/header";
import MusicCard from "../../../components/ui/music-card";
import Player from "../../../components/ui/player";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="m-auto max-w-[1280px] p-8">
        <p className="text-orange pb-4 text-center text-xl font-semibold">
          Dengarkan dan Rasakan
        </p>
        <div className="my-4 grid grid-cols-4 gap-3 lg:grid-cols-6">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </div>
      <Player />
    </div>
  );
}
