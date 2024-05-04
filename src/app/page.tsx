import Footer from "@/client/Footer";
import ClientNavbar from "@/client/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ClientNavbar />

      <div className="dark:p-3">
        <section className="p-10 dark:rounded-3xl flex flex-col md:flex-row gap-4 dark:bg-gradient-to-tr from-[#F2BC20] via-[#060606]  to-[#FEFEFE]">
          <div className="flex flex-col justify-center flex-1">
            <h1 className="text-xl md:text-3xl">
              Discover the Future of Cryptocurrency TradingJoin
              <br /> CryptoSea and experience the power of decentralized
              finance. Get StartedLearn More
            </h1>
            <p className="text-sm md:text-xl">
              Join CryptoSea and experience the power of decentralized finance.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image
              src={"/hero.png"}
              width={900}
              height={500}
              alt="Hero Section"
              className="rounded-xl"
            />
          </div>
        </section>

        <section className="mt-2 p-6 dark:bg-slate-400 dark:rounded-3xl">
          <h1 className="text-center md:text-4xl text-2xl mt-4 p-">
            Discover the Power of CryptoSea
          </h1>
          <div className="grid grid-cols-1 mt-5  md:grid-cols-2  gap-4 md:h-[1640px] relative">
            <div className="md:absolute md:top-[30px] md:left-[380px]">
              <Image
                src={"/crypto.png"}
                width={600}
                height={400}
                alt="Featured Image"
              />
            </div>
            <div className="md:absolute md:top-[190px] md:right-[450px]">
              <Image
                src={"/crypto1.png"}
                width={500}
                height={700}
                alt="Featured Image"
              />
            </div>
            <div className="md:absolute md:top-[590px] md:left-[380px]">
              <Image
                src={"/fav.png"}
                width={600}
                height={600}
                alt="Featured Image"
              />
            </div>
            <div className="md:absolute md:top-[1100px] md:right-[450px]">
              <Image
                src={"/market.png"}
                width={600}
                height={600}
                alt="Featured Image"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
