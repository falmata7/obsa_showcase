import Link from "next/link"

export default function page(){
  return <main >
    <div className="flex flex-col justify-center items-center h-screen font-serif text-3xl">
      <h1 className="mb-5 text-3xl font-bold">Welcome to Falmata Portfolio </h1>
      <p className="hover:text-gray-500 hover:underline mb-2"><Link href="final-project">Visit Falmata Portfolio</Link></p>
      <p className="hover:text-gray-500 hover:underline"><Link href="final-project-extra">Project Extra</Link></p>
    </div>

    </main>  
}
