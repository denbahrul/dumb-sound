export default function Header() {
  return (
    <div className="relative h-[512px]">
      <img
        className="h-full w-full object-cover"
        alt="dumb sound thumbnail"
        src="https://s3-alpha-sig.figma.com/img/ee42/68f2/d529e1ee26afff993699ee96409fcd0b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXGGkJXXDSMXCxkMDeWDd2k5~ite5XZIASlDxR55aNNI3oKkwCYcYp6t-mIRmIu2cMOwXTp2EVAWo1zFsCxYu4lYdfAwhxXwJugzQYmS9dFYUVpW2dNvaLv5AULkm1knqazQonTlZmZJhEWkxL5bdApLk21Npb9sy~tICTXZ2iCoNOFFSe8XUwsHES5Iy5nJbK5M1NnKj8hdv6Ev5myZNBQ01pggUCjec3ocdGp~UApNzJyPponB5YGXKUkSDtTGxbEV7HseZGhcQof8-C3Npcb5fCFH7tlW-zb5ABGcHBq7M9lykd6Yb4Oo~1tqLJ~ZUq5Ar5d~NufccUmJRDKGGw__"
      />
      <div className="bg-black absolute inset-0 bg-opacity-40"></div>
      <div className="text-white absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-4xl font-bold">Connect on DumbSound</p>
        <p className="mt-2 max-w-2xl text-lg">
          Discover, Stream, and share a constantly expanding mix of music from
          emerging and major artists around the world
        </p>
      </div>
    </div>
  );
}
