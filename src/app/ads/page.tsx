import { AdShortInfo } from "@/components/Ads/AdShortInfo/AdShortInfo";
import { FuelType, OfferType, ShortInfo } from "@/models/AdInfoModels";
import { v4 as uuid } from "uuid";

const temporaryAds: Partial<ShortInfo>[] = [
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
export default function Ads() {
  return (
    <>
      <section className="container mx-auto p-12">
        ADVANCED SEARCH ENGINE
      </section>
      <section className="container mx-auto p-12">
        {temporaryAds.map((tempAd) => {
          return <AdShortInfo {...tempAd} key={tempAd.id} />;
        })}
      </section>
    </>
  );
}
