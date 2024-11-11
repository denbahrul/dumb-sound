export default function MusicCard() {
  return (
    <div className="bg-background-secondary rounded-md p-2">
      <img
        alt="thumbnail"
        className="h-40 w-full rounded-sm object-cover"
        src="https://res.cloudinary.com/dlhqbphej/image/upload/v1731311577/dumb-sound/pa3eruljnvajjgtix3wp.webp"
      />
      <div className="flex justify-between py-2">
        <div className="flex flex-col gap-1">
          <p className="text-md font-semibold">Easy on me</p>
          <p className="text-xs">Adelle</p>
        </div>
        <p className="text-sm">2010</p>
      </div>
    </div>
  );
}
