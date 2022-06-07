import Link from "next/link";

interface CardProps {
  name: string;
  address: string;
  distance: number;
}

export default function Card({ name, address, distance }: CardProps) {
  const clenDistance = (+distance.toFixed(2)).toString() + "km";
  return (
    <div className="mb-5 px-4">
      <Link href={"/"}>
        <a className="cursor-pointer">
          <div className="h-52 border-2 border-orange-500 rounded-2xl flex items-center space-x-8 px-5">
            <div className="aspect-square bg-slate-500 w-44 rounded-2xl" />
            <div>
              <div className="flex flex-col">
                <span className="text-slate-500">{clenDistance}</span>
                <span className="font-semibold text-2xl">{name}</span>
                <span className="font-semibold">{address}</span>
                <span>장르</span>
                <span>평점</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
