import Image from 'next/image';
import {ContactUs} from "./components/contactUsComponents/ContactUs";

export default function Home() {

  
    return (
    <main className='bg-blue-700 text-black '>
        <div className='text-center'>
          <p className='text-black mb-5'>
            NEED AN <span className="text-orange-300">ELECTRICIAN TODAY?</span>
          </p>
          <ContactUs />
        </div>
    </main>
    )
  }

