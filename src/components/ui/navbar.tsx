export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-10 w-full px-4">
      <div className="m-auto flex max-w-[1280px] items-center justify-between">
        <img alt="dumb sound" src="ds-logo.svg" className="object-cover" />
        <div className="flex items-center gap-4">
          <img
            alt="profile photo"
            className="border-white h-10 w-10 rounded-full border-2 object-cover"
            src="https://res.cloudinary.com/dlhqbphej/image/upload/v1731311577/dumb-sound/pa3eruljnvajjgtix3wp.webp"
          />
          <p className="text-lg font-bold">bahrul</p>
        </div>
      </div>
    </div>
  );
}
