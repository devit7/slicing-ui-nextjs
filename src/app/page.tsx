import Banner from "@/components/molecules/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner 
        title="Belajar Membuat Website"
        subtitle="Dengan Next.js"
      />
    </main>
  );
}
