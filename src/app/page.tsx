import MenuBarLink from "@/components/menu-bar/menu-bar-link";

export default function Home() {
  return (
    <div className="test-container">
      <MenuBarLink label="Home" href="/" />
      <MenuBarLink label="Home" href="/" active={true}/>
    </div>
  );
}
