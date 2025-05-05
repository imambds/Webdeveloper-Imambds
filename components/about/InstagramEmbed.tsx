import Image from "next/image"
import Link from "next/link"

export default function InstagramEmbed() {
  return (
    <div className="flex max-h-fit min-w-[390px] max-w-full items-center justify-between rounded-xl bg-zinc-200 dark:bg-zinc-800 p-3 gap-1">
      <Image
        src="/images/instagram-profile.jpg" // ganti dengan path gambar profile yang sesuai
        alt="Instagram profile"
        width={74}
        height={74}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col text-white">
        <Link
          href="https://www.instagram.com/imambds/"
          target="_blank"
          className="font-bold text-md"
        >
          imambds
        </Link>
        <span className="text-sm text-zinc-300">Imam / Pras</span>
        <span className="italic text-xs text-zinc-400">
          Allah is the greatest.
        </span>
        <div className="flex gap-4 text-sm mt-2">
          <div className="flex flex-col items-center">
            <span>0</span>
            <span className="text-xs text-zinc-400">Post</span>
          </div>
          <div className="flex flex-col items-center">
            <span>1,164</span>
            <span className="text-xs text-zinc-400">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span>808</span>
            <span className="text-xs text-zinc-400">Following</span>
          </div>
        </div>
      </div>
    </div>
  )
}
