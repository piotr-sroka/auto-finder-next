import Image from "next/image";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { FaBeer, FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";

const steps: { id: number; title: string; description: string }[] = [
  {
    id: 1,
    title: "Curabitur orci",
    description:
      "Donec feugiat vestibulum augue, nec fermentum nisi aliquam nec.",
  },
  {
    id: 2,
    title: "Donec id arcu dolor",
    description: "Nunc hendrerit lorem a placerat eleifend.",
  },
  {
    id: 3,
    title: "Donec id nisi",
    description: "Donec fermentum nisi sed neque finibus tincidunt.",
  },
];

const faqs: { id: number; question: string; answer: string }[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Pellentesque et orci sed erat dignissim sollicitudin. Nulla placerat mi id mi rhoncus volutpat. In hac habitasse platea dictumst. Pellentesque in tempus dui, nec cursus urna.",
  },
  {
    id: 2,
    question: "Vestibulum id eros ac sem hendrerit hendrerit?",
    answer:
      "Sed a bibendum mi. Nullam mattis ligula vitae hendrerit aliquam. Sed et est iaculis, fringilla ipsum ac, vestibulum elit. Curabitur hendrerit convallis fringilla. Mauris posuere nisi nec felis mattis, facilisis tincidunt est efficitur.",
  },
  {
    id: 3,
    question:
      "Vestibulum lacinia ante eget magna tempus, ac finibus eros consequat?",
    answer:
      "Etiam fringilla magna ac nunc elementum, eget molestie arcu venenatis. Sed id massa metus. Proin lacinia eu lectus id bibendum. Praesent eu nisi eros. Sed ligula ipsum, lobortis non tempus quis, volutpat vitae metus. Vivamus interdum rutrum risus quis gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vehicula velit ac tortor fringilla, non dignissim sem aliquet. Morbi sit amet congue magna. Proin pretium pulvinar lacus et rutrum.",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full bg-center h-[320px] sm:h-[400px] lg:h-[600px] xl:h-[800px] bg-[url('/assets/header-bg.jpeg')] md:bg-[center_bottom_-2rem] 2xl:bg-[center_bottom_-6rem] bg-cover"></div>
      <div className="container mx-auto p-12 flex flex-col items-center justify-between">
        <SearchBar />
        <section className="container px-4 py-12">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Mauris vulputate dignissim
          </h3>
          <p className="text-center text-base mb-8">
            Pellentesque tristique enim tempus enim venenatis, at suscipit felis
            auctor.
          </p>
          <div className="flex justify-center gap-12">
            {steps.map((step) => (
              <article
                key={step.title}
                className="relative flex-1 before:content-[''] before:block before:w-[60px] before:h-[60px] before:border-s-1 before:border-t-1 before:absolute before:rounded-tl-2xl before:border-regal-blue-light/20 after:content-[''] after:block after:w-[60px] after:h-[60px] after:border-e-1 after:border-b-1 after:absolute after:bottom-0 after:right-0 after:rounded-br-2xl after:border-regal-blue-light/20"
              >
                <h2
                  className={`p-8 text-lg font-semibold after:content-['${step.id}'] after:absolute after:top-3 after:left-3 after:text-8xl after:text-regal-blue-light/15`}
                >
                  {step.title}
                </h2>
                <p className="px-8 py-2 pb-8 text-base">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="flex justify-center gap-12 mt-12">
            <Link
              className="bg-regal-red text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-red-light"
              href="/register"
            >
              Register now
            </Link>
            <Link
              className="bg-regal-blue text-regal-beige py-2 px-4 rounded-with-transition-on-hover cursor-pointer hover:bg-regal-blue-light"
              href="/ads/new"
            >
              Add new ad
            </Link>
          </div>
        </section>
        <section className="container px-4 py-12">
          <h3 className="text-2xl font-semibold text-center mb-4">FAQ</h3>
          <p className="text-center text-base mb-8">
            Curabitur dignissim fermentum velit.
          </p>
          <div className="m-auto max-w-[70%] w-full">
            {faqs.map((faq) => (
              <article key={faq.id} className="mb-6">
                <label htmlFor={`faq_${faq.id}`}>
                  <input
                    className="hidden peer"
                    type="checkbox"
                    id={`faq_${faq.id}`}
                  />
                  <h2 className="cursor-pointer font-semibold text-lg mb-4 flex justify-between peer-checked:[&>.plus]:hidden peer-checked:[&>.minus]:block">
                    {faq.question}
                    <FaPlus className="plus" />
                    <FaMinus className="hidden minus" />
                  </h2>
                  <div className="grid grid-rows-[0fr] transition-all duration-400 peer-checked:grid-rows-[1fr]">
                    <p className="overflow-hidden">{faq.answer}</p>
                  </div>
                </label>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
