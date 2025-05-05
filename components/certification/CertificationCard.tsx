type CertificationCardProps = {
    title: string
    issuedBy: string
    date: string
    image: string
  }
  
  export default function CertificationCard({
    title,
    issuedBy,
    date,
    image,
  }: CertificationCardProps) {
    return (
      <div className="min-w-[260px] max-w-sm rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 shadow-md text-zinc-900 dark:text-white transition-colors duration-300 hover:scale-[1.02]">
        <div>
          <div className="text-xl font-semibold mb-1">{title}</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{issuedBy}</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">{date}</div>
        </div>
  
        <div className="mt-auto rounded-lg overflow-hidden border border-transparent dark:border-zinc-1000 bg-transparent p-2 transition-colors duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-[180px] object-contain rounded-md"
          />
        </div>
      </div>
    )
  }
  