import { dataContact } from "@/data"
import Title from "./shared/title"
import Link from "next/link"
import ContactForm from "./contact-form"

const Contact = () => {
  return (
    <div id="contact" className=" p-6 md:px-12 md:py-44 max-w-5xl mx-auto" >
        <Title title="Contáctame" subtitle="Ponte en contacto con migo 👋" />
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
            <div>
                {dataContact.map((data)=>(
                    <div key={data.id} >
                        <Link href={data.link} target="_blank">
                            <div className=" flex flex-col items-center border dark:border-none border-slate-400 dark:bg-slate-800 bg-orange-100 rounded-lg mb-5 p-4">
                                <p>{data.icon}</p>
                                <p>{data.title}</p>
                                <p>{data.subtitle}</p>
                                <p>Contáctame</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className=" col-span-2">
                <ContactForm />
            </div>
        </div>
    </div>
  )
} 

export default Contact