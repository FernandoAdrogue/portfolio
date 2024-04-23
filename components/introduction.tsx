import Link from 'next/link';
import Image from 'next/image';
import { Mail, Paperclip } from 'lucide-react';

import { buttonVariants } from './ui/button';

import Container from './container';

const Introduction = () => {
  return (
    <Container>
      <div className=' text-center' id='Home'>
        <h3 className=' text-xl mb-3'>Hello I`m</h3>
        <h1 className=' text-4xl font-bold mb-3'>Fernando Adrogué Benas 👨‍💻</h1>
        <h2 className=' text-2xl text-gray-400'>Full Stack Developer</h2>
        <div className=' flex items-center '>
          <div className=' flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto '>
            <Link className={buttonVariants()} href= 'Contact' >
              <Mail className=' mr-2 ' />Contact me!
            </Link>
            <Link className={buttonVariants({variant:'secondary'})} href= '/cv-fernando.pdf' target='_blank' >
              <Paperclip className=' mr-2 ' />Download CV
            </Link>
          </div>
        </div>
        <div className=" flex justify-center mt-5 mx-auto " >
          <Image src='/foto-perfil.png' alt='Profile pic' width={300} height={300} />
        </div>
      </div>
    </Container>
  )
}
export default Introduction;