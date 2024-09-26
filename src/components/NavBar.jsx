export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-[90%] my-0 mx-auto py-4">
      <div>Flacko.dev</div>
      <div>
        <ul className="flex items-center gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
