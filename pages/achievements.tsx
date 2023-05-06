import Image from "next/image";

export default function Achievements() {
  return (
    <section className="md:px-4 px-4 pb-4 2xl:py-4">
      <h3
        id="Achievements
"
        className="px-2 md:px-6 mt-12 text-3xl font-russo md:mt-16 font-normal mb-6 2xl:mb-8 2xl:mt-28 text-orange-500 md:text-5xl 2xl:text-6xl"
      >
        Achievements
      </h3>

      <ul className=" text-sm md:text-lg mb-8 space-y-4 md:space-y-2 2xl:space-y-4  text-left text-gray-500 dark:text-gray-300">
        <li className="md:text-base text-sm flex items-center space-x-3">
          <Image
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-trophy-icon-png-image_924782.jpg"
            className=" w-8 h-8 rounded-full"
            alt=""
            width={1080}
            height={1920}
          />
          <span>
            Stood amongst the top 1 percentile in JEE Mains out of 10 Lakh+
            Applicants.{" "}
          </span>
        </li>
        <li className="md:text-base text-sm flex items-center space-x-3">
          <Image
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-trophy-icon-png-image_924782.jpg"
            className="w-8 h-8 rounded-full"
            width={1080}
            height={1920}
            alt=""
          />
          <span>
            Winner in the Mobile Designing category of {"AASF's"} UI / UX
            Designing Contest, Aakriti conducted during my freshman year.
          </span>
        </li>
        <li className=" text-sm flex items-center  space-x-3 md:text-base">
          <Image
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-trophy-icon-png-image_924782.jpg"
            className="w-8 h-8 rounded-full"
            width={1080}
            height={1920}
            alt=""
          />
          <span>
            Batch Representative: AASF, The Techno - Managerial Forum of ABV -
            IIITM, Gwalior.
          </span>
        </li>
      </ul>
    </section>
  );
}
