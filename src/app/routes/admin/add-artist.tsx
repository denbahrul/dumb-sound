import AddArtistForm from "../../../features/artist/components/add-artist-form";

export default function AddArtist() {
  return (
    <div className="m-auto max-w-[1280px] px-6 pt-20">
      <p className="my-6 text-2xl font-semibold">Add Artist</p>
      <AddArtistForm />
    </div>
  );
}
