import Image from "next/image";

export default function Header() {
  return (
    // border-solid border-indigo-600 border-b-2
    <header className="p-6 flex items-center justify-between">
      <h1 className="text-4xl">Beming</h1>
      <Image
        src={"/icons/hamburger.png"}
        alt="hamburger"
        width={40}
        height={40}
      />
    </header>
  );
}
