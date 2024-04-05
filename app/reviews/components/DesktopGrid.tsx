import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import Image from "next/image";

export default function DesktopGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 max-md:hidden">
      <div className="rounded">
        <Image
          src={image1}
          alt="image"
          height={100}
          width={100}
          className="w-full rounded cursor-pointer object-cover"
        />
      </div>
      <div className="rounded">
        <Image
          src={image2}
          alt="image"
          height={100}
          width={100}
          className="w-full rounded cursor-pointer object-cover"
        />
      </div>
      <div className="rounded">
        <Image
          src={image3}
          alt="image"
          height={100}
          width={100}
          className="w-full rounded cursor-pointer object-cover"
        />
      </div>
      <div className="rounded">
        <Image
          src={image4}
          alt="image"
          height={100}
          width={100}
          className="w-full rounded cursor-pointer object-cover"
        />
      </div>
    </div>
  );
}
