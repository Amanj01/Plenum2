import { useRef, useEffect } from 'react';
import { IoIosArrowDroprightCircle} from 'react-icons/io';
import Image, { StaticImageData } from 'next/image';
import image7 from "@/public/mini+slava+site+1 1.png";
import image8 from "@/public/american+embassy+2 1.png";
import image9 from "@/public/1-2 1.png";
import Link from 'next/link';

// Define the Project interface
interface Project {
  title: string;
  description: string;
  image: StaticImageData;
}

const projects: Project[] = [
  {
    title: 'Mini Salava Facades',
    description: 'Plenum offers a range of services dedicated to kitchen designers and kitchen studios...',
    image: image7,
  },
  {
    title: 'American Consulate',
    description: 'Service for stonemasons to make a kitchen worktop, a bathroom vanity top, or a table top...',
    image: image8,
  },
  {
    title: 'Spanish Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image9,
  },
  {
    title: 'Erbil Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image7,
  },
  {
    title: 'Erbil Village',
    description: 'In the construction and interior design industry, finding innovative and reliable surface...',
    image: image9,
  },
];

const ProjectsScroller = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  
  useEffect(() => {
    const interval = setInterval(() => {
      handleScrollRight();
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
       
        setTimeout(() => {
          scrollContainerRef.current?.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        }, 500); 
      } else {
        scrollContainerRef.current.scrollBy({
          left: 300, 
          behavior: 'smooth',
        });
      }
    }
  };



  return (
    <div className="text-white pt-72 py-12 px-6 md:px-16 lg:px-24">
      {/* Header with title and right arrow */}
      <div className='flex mb-20 items-start justify-between'>
        <h1 className="text-left text-2xl md:text-5xl font-mansory uppercase">
          Projects by Plenum Ciramica
        </h1>
        <span onClick={handleScrollRight} className='cursor-pointer'>
          <IoIosArrowDroprightCircle size={35}  />
        </span>
      </div>

      {/* Scrollable Project Section */}
      <div className="relative">
 

        <div
          ref={scrollContainerRef}
          className="grid grid-flow-col gap-8 overflow-x-auto scrollbar-hide cursor-pointer"
        >
          {projects.map((project, index) => (
           <Link href={"projects"} key={index}>
               <div
              
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[300px] lg:min-w-[400px]"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  layout="responsive"
                  width={1000}
                  height={500}
                />
              </div>
              <div className="text-left py-6">
                <h2 className="text-3xl font-mansory uppercase mb-4">{project.title}</h2>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
           </Link>
          ))}
        </div>

 
      </div>
    </div>
  );
};

export default ProjectsScroller;