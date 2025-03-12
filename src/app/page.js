import Image from "next/image";
import EnterAnimation from "./components/EnterAnimation";
import * as motion from "motion/react-client";
import HoverAnimation from "./components/HoverAnimation";
import ToolTip from "./components/tooltip";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl p-6">Current technologies</h1>
      <p>
        I&apos;m proficient in a range of modern technologies that empower me to
        build highly functional soluctions.
      </p>
      <p>These are some of my main chechnologies</p>
      <div className="flex gap-7 m-4">
        <ToolTip text={`Javascript`}>
          <EnterAnimation>
            <Image
              alt="Javascript logo"
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png`}
              width={50}
              height={50}
            />
          </EnterAnimation>
        </ToolTip>
        <ToolTip text={`Typescript`}>
          <EnterAnimation>
            <Image
              alt="Typescript logo"
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png`}
              width={50}
              height={50}
            />
          </EnterAnimation>
        </ToolTip>

        <ToolTip text={`React`}>
          <EnterAnimation>
            <Image
              alt="react logo"
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png`}
              width={50}
              height={50}
              className=""
            />
          </EnterAnimation>
        </ToolTip>
        <ToolTip text={`Next.JS`}>
          <EnterAnimation>
            <Image
              alt="next logo"
              src={`https://www.svgrepo.com/show/354113/nextjs-icon.svg`}
              width={50}
              height={50}
            />
          </EnterAnimation>
        </ToolTip>
        <ToolTip text={`Tailwind`}>
          <EnterAnimation>
            <Image
              alt="Tailwind logo"
              src={`https://www.svgrepo.com/show/374118/tailwind.svg`}
              width={50}
              height={50}
            />
          </EnterAnimation>
        </ToolTip>
        <ToolTip text={`Supabase`}>
          <EnterAnimation>
            <Image
              alt="Supabase logo"
              src={`https://img.icons8.com/color/512/supabase.png`}
              width={50}
              height={50}
            />
          </EnterAnimation>
        </ToolTip>
        <ToolTip text={`Git`}>
          <EnterAnimation>
            <Image
              alt="Git logo"
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png`}
              width={50}
              height={50}
            />
          </EnterAnimation>
        </ToolTip>
      </div>
    </div>
  );
}
