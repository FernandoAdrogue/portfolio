import { dataAboutMe, dataContact, dataSlider } from "@/data"

import Title from "./shared/title"

import { Phone } from "lucide-react"

import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import Image from "next/image"
import Link from "next/link"

const AboutMe = () => {
  return (
    <div id="about-me" className=" p-6 md:px12 md:py-30 max-w-5xl mx-auto " >
        <Title title="About Me" subtitle="Conóceme"/>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 ">
            <div className=" py-12 md:py-0 flex items-center justify-center">
                <Carousel 
                  opts={{align: "start"}}
                  orientation= "vertical"
                className=" w-full max-w-xs h-fit">
                  <CarouselContent className=" -m-1 h-[200px]">
                    {dataSlider.map((data)=>(
                      <CarouselItem   key={data.id}>
                        <div className=" flex items-center justify-center">
                          <Image  src={data.url} 
                                  alt="Image of projects" 
                                  width={250} 
                                  height={400} 
                          className=" w-full h-auto rounded-lg "/>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
            </div>
            <div>
              <div className=" grid md:grid-cols-3 mt-7 gap-4">
                {dataAboutMe.map((data)=>(
                  <div key={data.id} className=" border dark:shadow-slate-100 shadow-slate-400 dark:border-white-10 border-orange-10 rounded-xl p-4 shadow-md dark:bg-slate-800 bg-orange-50 ">
                    {data.icon}
                    <p className=" my-2 ">{data.name}</p>
                    <p className=" text-gray-400 ">{data.description}</p>
                  </div>
                ))}
              </div>
              <p className=" my-8 ">Soy un Full Stack Developer proactivo, creativo y autodidacta, con aptitudes para el liderazgo y el trabajo en equipo. Curioso e independiente con una buena predisposición para la resolución de problemas. Ávido de implementar nuevas tecnologías, me encanta enseñar y aprender, siempre me estimulan los desafíos.
                      Tengo mas de 10 años de experiencia liderando equipos de trabajo y dedicado la education técnica.
                      Mis aptitudes son: HTML, CSS, JavaScript , React , Redux, Node.js, Express, PostgreSQL , Sequelize, Typescript, Angular, Java, Python, VBA, MySQL , SQL Server, .NET y Git.
              </p>
              <Link href={ dataContact[0].link } target="_blank">
                <Button>
                  <Phone size={20} className=" mr-2"/>Hablamos
                </Button>
              </Link>
            </div>
        </div> 
    </div>
  )
}

export default AboutMe