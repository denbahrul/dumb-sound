import { useEffect, useRef } from "react";

export default function Player({ musicUrl }: { musicUrl?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (musicUrl && audioRef.current) {
      audioRef.current.load(); // Load ulang sumber audio
      audioRef.current.play(); // Mainkan audio secara otomatis
    }
  }, [musicUrl]);
  return (
    <div className="bg-background-quaternary fixed bottom-0 left-0 z-50 w-full p-4">
      <div className="flex items-center justify-center gap-2 text-center">
        <img
          alt="music thumbnail"
          className="h-10 w-10 rounded-full object-cover"
          src="https://res.cloudinary.com/dlhqbphej/image/upload/v1731311577/dumb-sound/pa3eruljnvajjgtix3wp.webp"
        />
        <div>
          <p className="text-start">Music title - artist</p>
          <audio ref={audioRef} controls>
            <source src={musicUrl} type="audio/wav" />
            <source src={musicUrl} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}
