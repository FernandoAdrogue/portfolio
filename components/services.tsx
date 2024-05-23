import { dataServices } from "@/data"
import Title from "./shared/title"
import { Check } from "lucide-react"

const Services = () => {
  return (
    <div id="services" className=" p-6 md:p-12 md:py24 max-w-5xl mx-auto" >
      <Title title="Services" subtitle="Que ofrezco"/>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-7">
        {dataServices.map((services)=>(
          <div key={services.id} className=" rounded-xl border-2 dark:border-slate-400 border-slate-300 p-6 dark:bg-slate-800 h-fit bg-orange-100 ">
            <h4 className=" mb-4 text-xl flex gap-2 ">
              {services.icon}
              {services.title}
            </h4>
            <ul>
              {services.features.map((feature,index)=>(
                <li key={index} className=" flex gap-3 mb-3 ">
                  <Check size={20}/>{feature.name}
                </li>
              ))}  
            </ul>  
          </div>
        ))}
      </div>
    </div> 
  )
}

export default Services