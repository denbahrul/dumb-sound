import { IMusic } from "../../types/music";

export default function MusicCard({ music }: { music: IMusic }) {
  return (
    <div className="bg-background-secondary rounded-md p-2">
      <img
        alt="thumbnail"
        className="h-40 w-full rounded-sm object-cover"
        src={music.thumbnail}
      />
      <div className="flex justify-between py-2">
        <div className="flex flex-col gap-1">
          <p className="text-md font-semibold">{music?.title}</p>
          <p className="text-xs">{music?.artist?.name}</p>
        </div>
        <p className="text-sm">{music?.year}</p>
      </div>
    </div>
  );
}
