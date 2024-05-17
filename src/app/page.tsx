import Image from "next/image";
import { SearchBar } from "./components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <SearchBar />
    </div>
  );
}
