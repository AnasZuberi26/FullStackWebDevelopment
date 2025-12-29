import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Not Found</h2>
      <p className="text-center text-xl">Could not find requested resource</p>
      <div className="text-center text-xl font-bold text-blue-500 bg-slate-300">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
