import Link from "next/link";

export default function Navbar()
{
return (
    <header className="border-b bg-white ">
    <nav className="mx-auto flex items-center gap-8 px-6 py-4">
        <Link href="/Recipes" className="text-xl font-bold text-slate-900">Everyday Recipes</Link>
        <Link href="/Recipes">Recipes</Link>
        <Link href="/Cuisines">Cuisines</Link>
        <Link href="/about">About</Link>
        <span className="ml-auto hidden text-sm sm:block border-1 ">+ New Recipe</span>
    </nav>
    </header>
)
}


