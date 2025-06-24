
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row-reverse">
      <div className="md:w-2/3">
        <Image
          className="w-full h-auto"
          src="/Hero-Img2.png"
          alt="Hero Image"
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
          draggable={false}
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col gap-1 md:mt-20 lg:gap-5">
          <div>
            <div className="flex flex-col md:flex-row">
              <h1 className="lg:text-[80px] text-5xl font-raleway font-semibold">
                Closer to your fans than ever before with{" "}
                <span
                  className="font-bold"
                  style={{ color: "rgba(135, 72, 226, 1)" }}
                >
                  Superfan
                </span>{" "}
              </h1>
            </div>
          </div>

          <div>
            <p className="mt-3">
              Our app helps artists create unique music spaces with direct access to
              their most passionate fans.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5 lg:mt-38">
          <div>
            <Link href="https://www.apple.com/no/app-store/">
              <Image
                className="cursor-pointer"
                src="/App-stor.png"
                alt="App stoer logo"
                width={400}
                height={300}
                draggable={false}
              />
            </Link>
          </div>
          <div>
            <Link href="https://play.google.com/store">
              <Image
                className="cursor-pointer"
                src="/Googl-play.png"
                alt="Googl-play logo"
                width={400}
                height={300}
                draggable={false}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
