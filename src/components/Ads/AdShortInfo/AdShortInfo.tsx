import { OfferType, ShortInfoDto } from "@/models/AdInfoModels";
import Image from "next/image";
import Link from "next/link";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { GiRoad } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
import { PiEngine, PiRoadHorizon } from "react-icons/pi";
import { TbRoad } from "react-icons/tb";

export const AdShortInfo = (adInfo: Partial<ShortInfoDto>) => {
  return (
    <Link
      href={`/ads/${adInfo.id}`}
      className="overflow-hidden rounded-lg border mb-4 bg-regal-blue-light/10 border-regal-blue-light/20 flex"
    >
      {adInfo.thumbnail && (
        <Image
          src={adInfo.thumbnail}
          alt=""
          width="300"
          height="200"
          className="w-[300px] h-[200px] object-cover"
        />
      )}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-1 justify-between text-lg mb-4">
          <div className="flex flex-col justify-between">
            <h3 className="flex gap-2 text-xl font-semibold">
              <span>{adInfo.brand}</span>
              <span>{adInfo.model}</span>
              <span>{adInfo.version}</span>
            </h3>
            {adInfo.title && <p>{adInfo.title}</p>}
            {!adInfo.title && <br />}
            <p className="flex gap-2 text-sm">
              {adInfo.yearOfProd && (
                <span className="flex items-center gap-1">
                  <FiCalendar /> {adInfo.yearOfProd}
                </span>
              )}
              {adInfo.fuel && (
                <>
                  <span className="border-s-1 border-regal-blue/20 mx-2"></span>
                  <span className="flex items-center gap-1">
                    <LuFuel /> {adInfo.fuel}
                  </span>
                </>
              )}
              {adInfo.capacity && (
                <>
                  <span className="border-s-1 border-regal-blue/20 mx-2"></span>
                  <span className="flex items-center gap-1">
                    <PiEngine />
                    {adInfo.capacity} cm<sup>3</sup>
                  </span>
                </>
              )}
              {adInfo.mileage && (
                <>
                  <span className="border-s-1 border-regal-blue/20 mx-2"></span>
                  <span className="flex items-center gap-1">
                    <TbRoad />
                    {adInfo.mileage} km
                  </span>
                </>
              )}
            </p>
          </div>
          <div>
            <p className="text-2xl text-regal-red-light font-bold">
              {adInfo.price} PLN
            </p>
          </div>
        </div>
        <div className="text-sm pt-4 border-t-1 border-regal-blue-light/20 w-full flex">
          <p>
            {adInfo.offerType === OfferType.COMPANY
              ? "Company offer"
              : "Private offer"}
          </p>
          <p className="ms-auto flex gap-2 items-center">
            <FiMapPin /> {adInfo.location?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
