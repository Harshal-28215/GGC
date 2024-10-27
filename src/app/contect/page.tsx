"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import nevigation from "../../../public/assets/animation/nevigation.json";
import phone from "../../../public/assets/animation/phone-call.json";
import browser from "../../../public/assets/animation/mobile-browser.json";
import email from "../../../public/assets/animation/smartphone-email.json";
import Banner from "@/Components/contect/banner";
import Thankyou from "@/Components/contect/thankyou";
import emailHandler from "../../../utils/emailroute";

const Lottie = dynamic(() => import('lottie-react').then(mod => mod.default), { ssr: false });

export default function Contect() {

  const [result, setresult] = useState(false)
  const [loading, setloading] = useState(false)
  const [IsClient, setIsClient] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Only run this effect on the client side
    setIsClient(true);
  }, []);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setloading(true)

    try {

      const formdata = formData.email;
      const name = formData.name;

      await emailHandler(formdata, name);

      await fetch('https://script.google.com/macros/s/AKfycbx8-_yT2OEugpzzQ3FXcM-VO9OHuxy-godlTKzRdCZJFV6gq2Sh1NuaxrCG3MAkbWRr/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });
      setresult(true)  // Handle the response

    } catch {
      alert('Error submitting form:');
    }
    setloading(false)
  };

  const first = [
    {
      title: 'Adress',
      description: 'Marketing Yard, Balwa, Road, Jamjodhpur, Gujarat 360530',
      icon: nevigation
    },
    {
      title: 'Mail Us',
      description: 'gujaratgroupofcompanies@gmil.com',
      icon: email
    },]
  const second = [
    {
      title: 'Mobile no.',
      description: '+91 6359051255',
      icon: phone
    },
    {
      title: 'Your domain',
      description: 'gujaratgroupofcompanies@gmil.com',
      icon: browser
    }
  ]


  return (
    <>
      <Banner />
      <main className='mb-28 z-50 relative'>
        <div className='flex md:flex-row flex-col justify-between sm:px-12 px-6 gap-10 md:gap-0'>
          <section className='md:w-1/2 sm:w-[calc(100vw-96px)] w-[calc(100vw-48px)] space-y-12'>
            <div className='p-10 border border-white/30 rounded-2xl space-y-7'>
              <h2 className='font-bold text-2xl'>Get in Touch</h2>
              <div className='flex sm:flex-row flex-col justify-between gap-2'>
                {first.map((item, index) => (
                  <div className="mt-2 sm:mt-0" key={index}>
                    <div className="flex gap-2 items-center">
                      {IsClient && <Lottie animationData={item.icon} className="bg-white rounded-full w-9 p-1" />}
                      <h2 className='font-bold sm:text-2xl text-xl'>{item.title}</h2>
                    </div>
                    <p className='text-white/50 mt-2 sm:mt-0'>{item.description}</p>
                  </div>
                ))}
              </div>
              <div className='flex sm:flex-row flex-col justify-between'>
                {second.map((item, index) => (
                  <div className="mb-3 sm:mt-0" key={index}>
                    <div className="flex gap-2 items-center">
                    {IsClient && <Lottie animationData={item.icon} className="bg-white rounded-full w-9 p-1" />}
                      <h2 className='font-bold sm:text-2xl text-xl'>{item.title}</h2>
                    </div>
                    <p className='text-white/50 mt-2 sm:mt-0'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <form className='p-10 border border-white/30 rounded-2xl space-y-6' onSubmit={handleSubmit}>
              <div>
                <h2 className='font-bold text-2xl'>Contect With GGC.</h2>
                <p className='text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit ducimus aspernatur optio quod ab consequatur explicabo pariatur consequuntur, debitis ex assumenda tempore nam est ipsa ullam accusamus perferendis molestias?</p>
              </div>

              <div className='flex sm:flex-row flex-col gap-5 relative w-full'>
                <input type="text" placeholder='Name' name="name" className='sm:w-1/2 p-2 border border-white/30 rounded-md bg-transparent text-white/50 focus:text-white' onChange={handleChange} value={formData.name} required />
                <input type="number" placeholder='Phone' name="phone" className='sm:w-1/2 p-2 border border-white/30 rounded-md bg-transparent text-white/50 focus:text-white' onChange={handleChange} value={formData.phone} required />
              </div>
              <input type="email" placeholder='Email' name="email" className='w-full p-2 border border-white/30 rounded-md bg-transparent text-white/50 focus:text-white' onChange={handleChange} value={formData.email} required />
              <input type="text" placeholder='Subject' name="subject" className='w-full p-2 border border-white/30 rounded-md bg-transparent text-white/50 focus:text-white' onChange={handleChange} value={formData.subject} required />
              <textarea placeholder='Message' name="message" className='w-full p-2 border border-white/30 rounded-md bg-transparent text-white/50 focus:text-white' onChange={handleChange} value={formData.message} required />
              <button className={`w-full p-2 bg-white text-black font-bold rounded-md cursor-pointer $ disabled:opacity-60`} disabled={loading ? true : false}>{loading ? 'loading...' : 'Submit'}</button>
            </form>
          </section>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.7476648935094!2d70.0223333!3d21.905790599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957bd6e8b0944a7%3A0x4333b1316328fac9!2sAPMC%20JAMJODHPUR!5e0!3m2!1sen!2sin!4v1726422889724!5m2!1sen!2sin" width="600" height="900" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-xl md:w-[45vw] w-[calc(100vw-48px)] sm:h-auto h-[500px]'></iframe>
        </div>
        <Thankyou result={result} setresult={setresult} />
      </main>

    </>
  )
}
