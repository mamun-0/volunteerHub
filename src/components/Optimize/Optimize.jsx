export function Optimize() {
  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center dark:bg-black border-b-2 dark:border-b-white">
      <div className="w-1/2">
        <img className="w-full" src="/images/second-section.webp" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-medium text-sky-600">
          Optimized for All Devices
        </h2>
        <p className="textarea-md text-slate-600 dark:text-slate-200">
          VolunteerHub Landing Pages are designed and optimized to be responsive
          and compatible with all devices including desktop computers, laptops,
          tablets, and smartphones. Reach, engage, and recruit volunteers on any
          device, from anywhere with an internet connection. Provide your
          supporters a consistent experience.
        </p>
      </div>
    </div>
  );
}
