import Image from "next/image";

export default function Certificate() {
  const Items1 = [
    { image: '/assets/c1.png' },
    { image: '/assets/c2.png' },
    { image: '/assets/c3.png' },
    { image: '/assets/c4.png' },
    { image: '/assets/c5.png' },
  ]
  const Items2 = [
    { image: '/assets/c6.png' },
    { image: '/assets/c5.png' },
    { image: '/assets/c7.png' },
    { image: '/assets/c8.png' },
    { image: '/assets/c9.png' },
  ]

  const pcn = "md:w-[350px] sm:w-[250px] w-[200px] sm:h-[100px] h-[70px] text-black text-center absolute ml-[20px]";


  return (
    <div className="w-[100vw] overflow-hidden mb-10">
      {/* First Slider: Left to Right */}
      <h1 className="text-4xl font-bold leading-[1.1] text-center after:w-[50px] after:block after:h-[3px] after:bg-[#949493] after:my-[.67em] after:ml-[calc(50%-25px)] opacity-1">Certificates</h1>
      <div
        className="flex relative overflow-hidden flex-col sm:gap-4 w-[100vw]"
      >
        <div className="w-[100vw] h-[100px] relative">
          <div className="md:w-[1500px] sm:w-[1000px] w-[720px] relative">
            {Items1.map((item, index) => (
              <div key={index} className={`${pcn} left-[100%] certificate`}
                style={{ animationDelay: `calc(20s / ${Items1.length} * (${Items1.length} - ${index}) * -1)` }}>
                  <Image src={item.image} width={300} height={100} alt="certificates" className="w-full h-full object-cover rounded-md"/>
                {item.image}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[100vw] h-[100px] relative">
          <div className="md:w-[1500px] sm:w-[1000px] w-[720px] relative">
            {Items2.map((item, index) => (
              <div key={index} className={`${pcn} right-[100%] certificate2`}
                style={{ animationDelay: `calc(20s / ${Items2.length} * (${Items2.length} - ${index}) * -1)` }}>
                  <Image src={item.image} width={300} height={100} alt="certificates" className="w-full h-full object-cover rounded-md"/>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
