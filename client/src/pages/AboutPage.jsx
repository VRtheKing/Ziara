import {
  FaMountain,
  FaRocket,
  FaUsers,
  FaBolt,
  FaInfinity,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="w-full h-full bg-[url(./conference.jpg)] bg-no-repeat bg-cover opacity-.75 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center pt-24">
            <h1 className="text-4xl font-bold text-white mt-2">
              About Ziara.
            </h1>
            <p className="text-base text-white w-8/12 text-center mt-3 md:text-xl">
              Ziara is an all-in-one platform for managing events efficiently, 
              helping you plan, coordinate, and execute events of any scale. 
              From small meet-ups to large conventions, Ziara is your trusted partner.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="max-w-[1140px] mx-auto container">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At the core of Ziara are the values that define our approach and 
              shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <FaRocket className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Innovation</h3>
              <p className="text-gray-600">
                We strive to create new solutions, constantly improving and driving 
                progress to meet client needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Teamwork</h3>
              <p className="text-gray-600">
                We value collaboration, promoting open communication and supporting 
                each other to achieve success.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaBolt className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Adaptability</h3>
              <p className="text-gray-600">
                We embrace flexibility, quickly adjusting to evolving market demands 
                and client expectations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaInfinity className="w-12 h-12 text-primary" />
              <h3 className="text-xl font-bold mt-4">Trust</h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity, ensuring transparency 
                in all our interactions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold">Looking to Expand Your Reach?</h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            Discover how Ziara can help you maximize your potential and 
            stay ahead in your industry.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white bg-black shadow transition-colors hover:bg-gray-900  focus-visible:outline-none"
              prefetch={false}
            >
              Find Out More
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300"
              prefetch={false}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
