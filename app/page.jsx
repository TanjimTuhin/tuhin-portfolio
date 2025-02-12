
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi" 


//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Network Engineer</span>
            <h1 className="h1">
              Hello I&apos;m <br /><span className="text-accent">Md. Tanjim Mahmud Tuhin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            I’m an aspiring Network Engineer passionate about building secure, 
            high-performance network infrastructures. Currently in the learning phase, 
            I’m deep-diving into network protocols, cybersecurity, and system administration to 
            strengthen my expertise.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/cv.pdf" download>
                <Button variant="outline"
                  size="lg"
                  className="uppercase flex item-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                    justify-center items-center text-accent text-base hover:bg-accent
                    hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;