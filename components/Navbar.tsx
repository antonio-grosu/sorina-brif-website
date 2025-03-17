import Link from "next/link";
export const Navbar = () => {


  return (
    <nav className="flex justify-between px-16 py-8">
      <div>Sorina Brif</div>
      <div className="flex gap-12">
        <Link href={"/acasa"}>Acasa</Link>
        <Link href={"/about"}>Despre mine</Link>
        <Link href={"/terapie"}>Despre terapie</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};
