import Image from 'next/image'
import Link from 'next/link'

const Services = () => {

    const services = [
        {
            title: 'Import / Export',
            description: 'At Gujarat Overseas, we excel in the import and export of high-quality raw materials such as cumin seeds, cotton, peanuts, and coriander seeds. Committed to excellence and reliability, we meet the diverse needs of our international clients, supporting your business with expertise and seamless transactions.',
            image: '/assets/ship .jpeg',
            row: 'md:flex-row',
            color: '#e7b58b59',
            id:'Gujarat Overseas'
        },
        {
            color: '#a3accc87',
            title: 'Agri-Commodities Sourcing and Supply',
            description: `Gujarat Trading specializes in sourcing and supplying high-quality raw materials from Indian farmers to meet customer requirements. Our diverse product range includes cumin seeds, cotton, peanuts, coriander seeds, and more. Committed to excellence and reliability, we facilitate seamless transactions, supporting industries like oil mills and cotton factories across India.`,
            image: '/assets/p.jpeg',
            row: 'md:flex-row-reverse',
            id:'Gujarat Trading'
        },
        {
            title: 'Ginning',
            description: `Ankan Industries is a cotton factory that procures raw cotton from sellers, including farmers and other suppliers. We process the cotton to produce high-quality cotton balls, which are then prepared for export. Committed to quality and efficiency, we ensure that our products meet international standards, catering to global markets.`,
            image: '/assets/ginning.jpeg',
            row: 'md:flex-row',
            color: '#a59b93b3',
            id:'Ankan Industries'
        }
    ]

    return (
        <section>
            <div className="w-full sm:space-y-[15vh] sm:mt-0 mt-[140px]">
                <h1 className="text-4xl font-bold leading-[1.1] text-center after:w-[50px] after:block after:h-[3px] after:bg-[#949493] after:my-[.67em] after:ml-[calc(50%-25px)]" id="About">Services</h1>

                {services.map((service, index) => (
                    <div key={index} id={service.id} className={`flex flex-wrap justify-center sm:gap-12 items-center relative md:mt-20 mt-14 flex-col ${service.row}`}>
                        <div className="md:w-2/5 sm:w-[70vw] w-[90vw] relative">
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image src={service.image} width={500} height={500} alt="" className="w-full object-contain hover:scale-105 transition ease-in duration-150" />
                            </div>
                        </div>
                        <div className="md:w-2/5 sm:w-[70vw] w-[90vw]">
                            <div className='md:text-left text-center'>
                                <h2 className="font-bold sm:text-5xl sm:leading-[70px] text-2xl my-4">{service.title}</h2>
                                <p className='mb-5'>{service.description}</p>
                                <Link href="/services" className="px-5 py-2 bg-white rounded-md text-black font-medium hover:bg-white/50">Explore</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
