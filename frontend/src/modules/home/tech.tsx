"use client";

import GridMotion from "@/components/grid-motion/grid-motion";
import Image from "next/image";

export const Tech = () => {
  const items = [
    <div key="javascript">
      <Image src="/javascript.png" alt="Javascript" width={100} height={100} />
    </div>,
    <div key="typescript">
      <Image src="/typescript.png" alt="TypeScript" width={100} height={100} />
    </div>,
    <div key="mongodb">
      <Image src="/mongodb.png" alt="MongoDB" width={100} height={100} />
    </div>,
    <div key="postgres">
      <Image src="/postgres.png" alt="Postgres" width={100} height={100} />
    </div>,
    <div key="nextjs">
      <Image src="/nextjs.png" alt="NextJS" width={100} height={100} />
    </div>,
    <div key="reactjs">
      <Image src="/reactjs.png" alt="ReactJS" width={100} height={100} />
    </div>,
    <div key="restapi">
      <Image src="/restapi.png" alt="RESTApi" width={100} height={100} />
    </div>,
    <div key="git">
      <Image src="/git.png" alt="Git" width={100} height={100} />
    </div>,
    <div key="nodejs">
      <Image src="/nodejs.png" alt="NodeJS" width={100} height={100} />
    </div>,

    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Postgres",
    "NextJS",
    "ReactJS",
    "REST APIs",
    "Git",
    "NodeJS",

    <div key="javascript">
      <Image src="/javascript.png" alt="Javascript" width={100} height={100} />
    </div>,
    <div key="typescript">
      <Image src="/typescript.png" alt="TypeScript" width={100} height={100} />
    </div>,
    <div key="mongodb">
      <Image src="/mongodb.png" alt="MongoDB" width={100} height={100} />
    </div>,
    <div key="postgres">
      <Image src="/postgres.png" alt="Postgres" width={100} height={100} />
    </div>,
    <div key="nextjs">
      <Image src="/nextjs.png" alt="NextJS" width={100} height={100} />
    </div>,
    <div key="reactjs">
      <Image src="/reactjs.png" alt="ReactJS" width={100} height={100} />
    </div>,
    <div key="restapi">
      <Image src="/restapi.png" alt="RESTApi" width={100} height={100} />
    </div>,
    <div key="git">
      <Image src="/git.png" alt="Git" width={100} height={100} />
    </div>,
    <div key="nodejs">
      <Image src="/nodejs.png" alt="NodeJS" width={100} height={100} />
    </div>,

    "Websockets",
    "Webhooks",
    "WebRTC",
    "Kafka",
    "Docker",
    "Microservices",
    "Zustand",
    "TailwindCSS",
    "Github",
  ];

  return (
    <div className="max-w-screen-lg mx-12 lg:mx-auto py-20">
      <h1 className="text-white w-full text-center mb-2 text-3xl md:text-4xl font-bold tracking-wide">
        What we use...
      </h1>
      <div className="-z-50">
        <GridMotion items={items} />
      </div>
    </div>
  );
};
