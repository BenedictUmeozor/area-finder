import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import Image from "next/image";

export default function MobileGrid() {
  return (
    <div className="md:hidden grid grid-cols-2 items-stretch gap-2">
      <div>
        <Image
          src={image1}
          alt="image"
          height={100}
          width={100}
          className="w-full rounded h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <Image
            src={image2}
            alt="image"
            height={100}
            width={100}
            className="w-full rounded object-cover"
          />
        </div>
        <div>
          <Image
            src={image3}
            alt="image"
            height={100}
            width={100}
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </div>
  );
}
