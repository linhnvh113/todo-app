import iconMoon from '../assets/icon-moon.svg';

export default function Header() {
  return (
    <header>
      <div className="container flex items-center justify-between pb-10 pt-12 md:pt-16">
        <h1 className="text-xl font-bold tracking-[12px] text-white md:text-4xl">
          TODO
        </h1>
        <button type="button" onClick={() => {}}>
          <img src={iconMoon} alt="theme" className="size-5 md:size-7" />
        </button>
      </div>
    </header>
  );
}
