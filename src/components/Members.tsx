import Image from "next/image";

type MembersProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export function Members( { src, alt = "", width = 70, height = 70 }: MembersProps ) {
return (
    <span className=" -m-2 border-4 border-indigo-600 rounded-full">
        <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            draggable={false}
            />
    </span>
    );
}