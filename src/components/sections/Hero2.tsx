//@ts-nocheck
"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { ShadowRectBackground } from "../ui/ShadowRectBackground";
import Image from "next/image";
import { Logo } from "../ui/Logo";
import { PlayIcon, PauseIcon } from "@heroicons/react/solid"; // Zakładam, że używasz HeroIcons

export const Hero2 = () => {
  return (
    <>
      <section
        className={cn(
          "relative  w-full overflow-hidden shadow-md"
          // "bg-gradient-to-tr from-[#08102b] via-[#EAEEFE] to-[#EAEEFE]"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full ">
          <ShadowRectBackground rows={25} columns={10} />
        </div>

        <div className="absolute right-0 bottom-0 h-[800px] w-[1200px] translate-x-[20%] translate-y-[50%] rounded-full bg-sky-900 opacity-50 blur-[190px]"></div>
        <div className="absolute left-0 bottom-0 h-[800px] w-[1200px] -translate-x-[20%] translate-y-[50%] rounded-full bg-sky-800 opacity-50 blur-[320px]"></div>

        <div className="relative min-h-screen mx-auto max-w-7xl py-[230px] flex">
          <div className="flex-[3] ">
            <div className="px-4 pt-16">
              <div className="border-gray-alpha-400 -900 gap-4  w-[260px] mb-12">
                <Logo />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold mb-6 md:mb-8 relative max-w-[900px] ">
                Twierdza Bar <br />
                <span
                  className={cn(
                    "relative bg-clip-text text-transparent transition-all bg-gradient-to-b from-neutral-900 to-neutral-900 z-10",
                  )}
                ></span>
              </h1>

              <h2 className="relative font-regular text-base md:text-lg lg:text-3xl text-neutral-900  tracking-wide mb-6 md:mb-8 max-w-3xl antialiased">
                Moc Fortecy, Brzmienie Rocka
              </h2>
              <div className="relative flex flex-wrap gap-2 mb-6 md:mb-8 max-w-[460px]">
                <button className="bg-black flex-1 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out">
                  Kontakt
                </button>
                <button className="bg-black flex-1 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-150 ease-in-out">
                  Zespół
                </button>
              </div>
            </div>
          </div>
          <div className="flex-[4] ">
            <div className="relative w-full">
              <div className="absolute w-[120%] left-[0px] top-[0] object-cover rounded-lg bg-white  backdrop-blur-sm shadow-2xl ">
                <Image
                  src="/hero.jpg"
                  alt="Shape"
                  width={1200}
                  height={1200}
                  className="w-[1200px] h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Music />
      <Team />
      <Contact />
    </>
  );
};

function Music() {
  const [isPlaying, setIsPlaying] = useState(null); // Śledzi, która piosenka gra
  const [audio, setAudio] = useState(null); // Przechowuje aktualnie odtwarzany audio element

  const songs = [
    { title: "Titanic", src: "titanic.mp3" }, // Ścieżki do plików audio
    { title: "Pokerzysta", src: "pokerzysta.mp3" },
    { title: "Mam dość", src: "mam_dosc.mp3" },
    { title: "Cat woman", src: "mam_dosc.mp3" },
    { title: "Blindman", src: "mam_dosc.mp3" },
  ];

  const handlePlayPause = (index) => {
    if (isPlaying === index) {
      // Pauza
      audio.pause();
      setIsPlaying(null);
    } else {
      // Zatrzymaj aktualne audio, jeśli gra inne
      if (audio) audio.pause();

      // Odtwarzaj nową muzykę
      const newAudio = new Audio(songs[index].src);
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(index);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-32" id="music">
      <SectionTitle title={"Muzyka"} />
      <div className="grid grid-cols-1 gap-8">
        {songs.map((item, index) => (
          <div className="relative rounded-xl shadow-md overflow-hidden" key={index}>
            <div className="absolute top-0 left-0 w-full h-full">
              <ShadowRectBackground rows={25} columns={22} />
            </div>
            <div className="absolute right-0 bottom-0 h-[800px] w-[1200px] translate-x-[20%] translate-y-[50%] rounded-full bg-blue-100 opacity-40 blur-[190px]"></div>

            <div className="px-8 py-4 relative flex justify-between items-center">
              <p className="text-lg font-medium tracking-widest">{item.title}</p>
              <button onClick={() => handlePlayPause(index)} className="focus:outline-none">
                {isPlaying === index ? (
                  <PauseIcon className="w-8 h-8 text-gray-700" />
                ) : (
                  <PlayIcon className="w-8 h-8 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function Team() {
  const items = [
    {
      src: "/michal.jpg",
      title: "Michał Chojnowski",
      description:
        "gitarzysta, wokalista i autor tekstów. Jest miłośnikiem surowego, lekko chropowatego brzmienia. Jego atutem jest kreatywność - nieprzerwanie poszukuje nowych stylów, brzmienia i wszystkiego, czym jeszcze muzyka może zaskoczyć. Często wykorzystuje fuzz, łapiąc przy tym vibe Hendrixa. Na scenie to wulkan energii, której nie powstydziłaby się nawet elektrownia atomowa.",
    },
    {
      src: "/michal.jpg",
      title: "Paweł Andruszkiewicz",
      description:
        " w TWIERDZY występujący w podwójnej roli - basisty i klawiszowca. Dla niego to żadne wyzwanie! Wykorzystuje kultowe brzmienia hamonda i rhodesa, łącząc je z syntezatorem basowym. W ten sposób serwuje uwielbianą klasykę w nowym, świeżym wydaniu. Paweł to artystyczny umysł pełen twórczej pasji.",
    },
    {
      src: "/michal.jpg",
      title: "Artur Włodkowski",
      description:
        "to doświadczenie przez duże „D”! Wybitny saksofonista. Przez lata występował oraz nagrywał z topowymi artystami, zarówno w kraju jak i za granicą. Niezwykle energiczna gra solowa, przeplatana wręcz transowymi partiami sekcyjnymi, to jego znak rozpoznawczy. W TWIERDZY wykorzystuje saksofon tenorowy, ale nie ogranicza się do niego. Sięga także po baryton podbijający ciężki rytm rodem z nagrań MORPHINE",
    },
    {
      src: "/michal.jpg",
      title: "Bartek Dobkowski",
      description:
        "perkusista, który swoią grą nadaje koncertowi dynamiki i energii. Jego uderzenia są niczym serce zespołu, bijące w idealnym rytmie, porywające do tańca i dające każdemu utworowi niepowtarzalną moc.",
    },
  ];

  return (
    <section className="w-full overflow-hidden  relative shadow-md " id="zespol">
      <div className="absolute top-0 left-0 w-full h-full ">
        <ShadowRectBackground rows={25} columns={12} />
      </div>
      <div className="absolute right-0 top-0 h-[800px] w-[1200px] translate-x-[20%] translate-y-[10%] rounded-full bg-sky-800 opacity-50 blur-[190px]"></div>
      <div className="absolute left-0 top-0 h-[800px] w-[1200px] -translate-x-[20%] translate-y-[10%] rounded-full bg-slate-400 opacity-50 blur-[320px]"></div>

      <div className="absolute right-0 bottom-0 h-[800px] w-[1200px] translate-x-[20%] translate-y-[50%] rounded-full bg-slate-400 opacity-50 blur-[190px]"></div>
      <div className="absolute left-0 bottom-0 h-[800px] w-[1000px] -translate-x-[20%] translate-y-[50%] rounded-full bg-sky-700 opacity-50 blur-[320px]"></div>

      <div className="relative max-w-6xl mx-auto py-32">
        <SectionTitle title={"Zespół"} />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  ">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ background: "rgba(255,255,255,0.3)" }}
              className="flex flex-col items-center text-center p-8 backdrop-blur-xl   shadow-md rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-md shadow-lg"
              />
              <h2 className="mt-8 text-xl font-bold">{item.title}</h2>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SectionTitle = ({ title, description }) => {
  return (
    <div className="text-2xl md:text-4xl text-center tracking-wide font-bold mb-16">
      <h2>{title}</h2>
    </div>
  );
};

function Contact() {
  return (
    <section className="max-w-6xl mx-auto py-32 flex justify-center" id="kontakt">
      {/* <SectionTitle title={"Zespół"} /> */}
      <div className="flex">
        <div className="border-gray-alpha-400  gap-4  w-[260px] mb-12">
          <Logo />
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl  tracking-wide font-bold  mb-4">Kontakt</h3>
          {[
            {
              title: "Telefon",
              value: "+48 502 357 527",
            },
            {
              title: "E-mail",
              value: "jolaand1@wp.pl",
            },
            {
              title: "Facebook",
              desc: "https://www.facebook.com",
              link: "https://www.facebook.com/profile.php?id=61562509206626",
            },
          ].map((item, index) => {
            return (
              <div key={index} className="mb-4">
                <p className="text-lg">{item.title}</p>
                <p className="text-neutral-600">
                  {item.value ? item.value : <a href={item.link}>{item.desc}</a>}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
