import LandingHeaderImage from "@/components/SVGLanding";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  let randomizer = Math.random() * 100;
  let roundedRandomizer = Math.floor(randomizer);
  return (
    <div className="px-32 py-20">
      <nav>
        <ul className="flex items-start gap-5 font-bold">
          <li>Home</li>
          <li>About</li>
          <li>Testimonal</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="grid grid-cols-2 gap-x-20">
        <div className="grid col-span-1 py-[20%]">
          <h1 className="text-5xl font-extrabold">
            Education outside the classroom.
          </h1>
          <p className="text-3xl font-semibold w-[75%]">
            Enhance your learning capabilities without difficulty or worry
          </p>
          <div className="grid grid-cols-2">
            <div className="grid col-span-1">
              <button onClick={() => router.push(`/${roundedRandomizer}/SignUp`)} type="button" className="bg-green-800 rounded-full w-1/2 h-1/2 text-white">Sign Up</button>
            </div>
            <div className="grid col-span-1">
              <button type="button" className="outline-double outline-green-800 w-1/2 h-1/2 text-green-800 rounded-full">Login</button>
            </div>
          </div>
        </div>
        <div className="grid col-span-1 py-10">
          <LandingHeaderImage />
        </div>
      </div>
    </div>
  );
}
