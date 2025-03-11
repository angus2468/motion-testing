import Image from "next/image";
import EnterAnimation from "./components/EnterAnimation";

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
        <EnterAnimation>
          <Image
            alt="react logo"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png`}
            width={50}
            height={50}
          />
        </EnterAnimation>
        <EnterAnimation>
          <Image
            alt="next logo"
            src={`https://www.svgrepo.com/show/354113/nextjs-icon.svg`}
            width={50}
            height={50}
          />
        </EnterAnimation>
        <EnterAnimation>
          <Image
            alt="next logo"
            src={`https://www.svgrepo.com/show/374118/tailwind.svg`}
            width={50}
            height={50}
          />
        </EnterAnimation>
        <EnterAnimation>
          <Image
            alt="next logo"
            src={`https://img.icons8.com/color/512/supabase.png`}
            width={50}
            height={50}
          />
        </EnterAnimation>
        <EnterAnimation>
          <Image
            alt="next logo"
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png`}
            width={50}
            height={50}
          />
        </EnterAnimation>
      </div>
    </div>
  );
}
