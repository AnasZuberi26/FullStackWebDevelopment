import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-computer-900x288.jpg" alt="" />
    </div>
  );
}
