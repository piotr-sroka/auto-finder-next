import { FuelType, OfferType, ShortInfoDto } from "@/models/AdInfoModels"
import Image from "next/image"
import Link from "next/link"
import { FaRegUser } from "react-icons/fa"
import { FiCalendar, FiMapPin } from "react-icons/fi"
import { LuFuel } from "react-icons/lu"
import { MdStorefront } from "react-icons/md"
import { PiEngine } from "react-icons/pi"
import { TbRoad } from "react-icons/tb"
import { v4 as uuid } from "uuid";

const temporaryAds: Partial<ShortInfoDto>[] = [
    {
        id: uuid(),
        brand: "Audi",
        model: "A6",
        version: "C7",
        fuel: FuelType.DIESEL,
        mileage: 145678,
        price: "75000",
        yearOfProd: 2016,
        thumbnail:
            "https://i.pinimg.com/originals/77/b8/1b/77b81bd9b49ea414cc73c06481c965e1.jpg",
        location: {
            description: "Warsaw",
        },
        offerType: OfferType.COMPANY,
    },
    {
        id: uuid(),
        brand: "Audi",
        model: "A6",
        version: "C7",
        fuel: FuelType.DIESEL,
        mileage: 90300,
        capacity: 1998,
        price: "75000",
        yearOfProd: 2016,
        thumbnail:
            "https://i.pinimg.com/originals/34/0e/63/340e63112372134d33a5a4721b263178.jpg",
        location: {
            description: "Warsaw",
        },
        offerType: OfferType.PRIVATE,
    },
    {
        id: uuid(),
        brand: "Audi",
        model: "A6",
        version: "C7",
        fuel: FuelType.DIESEL,
        price: "75000",
        yearOfProd: 2016,
        thumbnail: "/images/audi-a6-c7-sedan.jpg",
        location: {
            description: "Warsaw",
        },
        offerType: OfferType.PRIVATE,
    },
];

interface OffersListProps {
}

export const OfferList = ({
}: OffersListProps) => {
    return (<div className="px-6 py-4">
        {temporaryAds.map((adInfo => <Link key={adInfo.id} href={`/ads/${adInfo.id}`} className="overflow-hidden rounded-lg border mb-4 bg-regal-blue-light/10 border-regal-blue-light/20 flex">
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
                    <div className="flex flex-col gap-2">
                        <h3 className="flex gap-2 text-xl font-semibold">
                            <span>{adInfo.brand}</span>
                            <span>{adInfo.model}</span>
                            <span>{adInfo.version}</span>
                        </h3>
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
                        </p>
                    </div>
                    <div>
                        <p className="text-2xl text-regal-red-light font-bold">
                            {adInfo.price} PLN
                        </p>
                    </div>
                </div>
                <div className="text-sm pt-4 border-t-1 border-regal-blue-light/20 w-full flex justify-end gap-2">
                    <button className="bg-regal-blue text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-blue-light disabled:opacity-50 disabled:cursor-not-allowed">Edit</button>
                    <button className="bg-regal-red text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light disabled:opacity-50 disabled:cursor-not-allowed">Remove</button>
                </div>
            </div>
        </Link>))}
    </div>)
}