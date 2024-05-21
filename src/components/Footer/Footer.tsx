import Link from "next/link";
import { FacebookIcon } from "../svg/FacebookIcon";
import { InstagramIcon } from "../svg/InstagramIcon";
import { YoutubeIcon } from "../svg/YoutubeIcon";
import { XIcon } from "../svg/XIcon";

export const Footer = () => {
  return (
    <footer className="bg-regal-beige/50 w-full px-12 py-4">
      <div className="mx-auto container flex justify-center gap-20">
        <div className="flex-1 p-4">
          <h3 className="text-xl font-semibold mb-4 after:mt-2 after:content-[''] after:border-b-1 after:w-1/4 after:block after:border-regal-blue/50">Find us</h3>
          <div className="flex flex-col">
            <Link href="#" className="flex items-center gap-2 mb-2">
              <FacebookIcon width={24} />
              Facebook
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              <InstagramIcon width={24} />
              Instagram
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              <YoutubeIcon width={24} />
              Youtube
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              <XIcon width={24} />X
            </Link>
          </div>
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-xl font-semibold mb-4 after:mt-2 after:content-[''] after:border-b-1 after:w-1/4 after:block after:border-regal-blue/50">Services and tools</h3>
          <div className="flex flex-col">
            <Link href="#" className="flex items-center gap-2 mb-2">
              Lorem ipsum
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              Phasellus quis convallis
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              Curabitur convallis
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              Vestibulum
            </Link>
          </div>
          <h3 className="text-xl font-semibold my-4 after:mt-2 after:content-[''] after:border-b-1 after:w-1/4 after:block after:border-regal-blue/50">Partners</h3>
          <div className="flex flex-col">
            <Link href="#" className="flex items-center gap-2 mb-2">
              Lorem ipsum
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              Phasellus quis convallis
            </Link>
            <Link href="#" className="flex items-center gap-2 mb-2">
              Curabitur convallis
            </Link>
          </div>
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-xl font-semibold mb-4 after:mt-2 after:content-[''] after:border-b-1 after:w-1/4 after:block after:border-regal-blue/50">Customer service</h3>
          <div className="flex flex-col">
            <p>
              <span className="font-bold">Phone:</span>
              <br />
              +00 12 345 67 89,
              <br />
              00 098 765 432
              <br />
              (mon. - fri. 08:00 - 17:00)
            </p>
            <p className="mt-4">
              <span className="font-bold">Email:</span>
              <br />
              help@autofinder.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
