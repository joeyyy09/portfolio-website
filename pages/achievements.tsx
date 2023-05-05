export default function Achievements() {
  return (
    <section className="px-10 2xl:py-4">
      <h3
        id="Achievements
"
        className=" mt-12 text-2xl font-russo md:mt-16 font-normal mb-4 2xl:mb-8 2xl:mt-28 text-orange-500 md:text-5xl 2xl:text-6xl"
      >
        Achievements
      </h3>

      <ul className=" text-sm md:text-lg mb-8 space-y-4 md:space-y-2 2xl:space-y-4  text-left text-gray-500 dark:text-gray-300">
        <li className="md:text-base text-xs flex items-center space-x-3">
          <img
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-trophy-icon-png-image_924782.jpg"
            className=" w-8 h-8 rounded-full"
          />
          <span>
            Stood amongst the top 1 percentile in JEE Mains out of 10 Lakh+
            Applicants.{" "}
          </span>
        </li>
        <li className="md:text-base text-xs flex items-center space-x-3">
          <img
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-trophy-icon-png-image_924782.jpg"
            className="w-8 h-8 rounded-full"
          />
          <span>
            Winner in the Mobile Designing category of AASF's UI / UX Designing
            Contest, Aakriti conducted during my freshman year.
          </span>
        </li>
        <li className=" text-xs flex items-center space-x-3 md:text-base">
          <img
            src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-trophy-icon-png-image_924782.jpg"
            className="w-8 h-8 rounded-full"
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
