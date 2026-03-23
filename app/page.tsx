import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f7f7f5] text-black">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-black/50">
              Product-minded web developer | Minnesota, USA
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Frontend Developer building modern web experiences
            </h1>

            <p className="mt-6 text-lg text-black/65 max-w-xl">
              I build clean, responsive websites with React, Vue, WordPress, and e-commerce experience.
            </p>

            {/* <div className="mt-10 flex gap-4">
              <a className="rounded-full bg-black text-white px-6 py-3 text-sm">
                View Projects
              </a>

              <a className="rounded-full border border-black/10 px-6 py-3 text-sm">
                Contact Me
              </a>
            </div> */}
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-[300px] md:w-[380px]">
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200 via-transparent to-blue-200 blur-2xl opacity-50"></div>

              <Image
                src="/images/hero-img.jpeg"
                alt="Tanya"
                width={400}
                height={500}
                className="relative rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}