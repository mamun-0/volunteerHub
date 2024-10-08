export function SectionTitle({ title, size }) {
  return (
    <div className="text-center p-3 dark:bg-black dark:text-slate-200">
      <h2
        className={`text-${size}xl p-2 inline-block border-b-2 font-semibold`}
      >
        {title}
      </h2>
    </div>
  );
}
