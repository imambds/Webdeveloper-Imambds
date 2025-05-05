"use client"

import { LogoSpotify } from "../LogoIcon"
import Link from "next/link"

export default function Spotify() {
  const data = {
    name: "this is what space smells like",
    href: "https://open.spotify.com/track/5e0b9LgOfi3aJSKXFcOWRe",
    artists: [
      {
        name: "Imambds",
        url: "https://open.spotify.com/artist/3SZIcEikFhP2RZfJOcehOQ",
      },
    ],
    currentlyPlaying: false,
  }

  return (
    <div className="w-full max-w-md rounded-xl bg-neutral-100 dark:bg-[#2E2D30] p-4 text-black dark:text-white shadow-lg">
      <div className="flex items-center gap-4">
        {/* Spotify Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-600">
          <LogoSpotify className="h-6 w-6 text-white" />
        </div>

        {/* Info Text */}
        <div className="flex-1 overflow-hidden">
          <p className="text-xs text-gray-400">LAST PLAYED</p>
          <Link
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block truncate text-base font-semibold hover:underline"
          >
            {data.name}
          </Link>
          <p className="truncate text-sm text-gray-300">
            By{" "}
            {data.artists.map((artist, i) => (
              <span key={`artist${i}`}>
                <a
                  href={artist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {artist.name}
                </a>
                {i < data.artists.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Spotify Player Embed */}
      <div className="mt-4">
        <iframe
          className="w-full rounded-lg"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/artist/1EmdfupUQDpXOcb4Nj2mBH?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
