import MenuBarLink from "@/components/menu-bar/menu-bar-link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="test-container">
      <MenuBarLink label="Home" href="/" />
      <MenuBarLink label="Home" href="/" active={true}/>
    </div>
  );
}
