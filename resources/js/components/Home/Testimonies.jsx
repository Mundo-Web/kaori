import React, { useState } from "react"
import testimonieImage from './images/testimonieImage.png'
import HtmlContent from "../../Utils/HtmlContent"
import em from "../../Utils/em"

const Testimonies = ({ testimonies, background = '#fbbf24', details }) => {
  const [currentTestimony, setCurrentTestimony] = useState(testimonies[0])

  return (
    <>
      <section className={`grid md:grid-cols-5 gap-8`} style={{
        backgroundColor: background
      }}>
        <div className="col-span-full md:col-span-2 w-full flex items-center justify-center order-last md:order-first">
          <div className="relative flex grow justify-center md:justify-start p-[5%] pb-0 md:p-0 md:px-[5%]  md:h-[calc(100%+64px)] md:-mt-16">
            <img
              src={testimonieImage}
              alt="testimony"
              className="object-contain object-center md:object-left-bottom lg:object-bottom w-full max-w-md"
              style={{ aspectRatio: 1.125 }}
              onError={e => e.target.src = '/assets/resources/cover-404.svg'}
            />
          </div>
        </div>

        <div className="col-span-full md:col-span-3 p-[5%] w-full flex flex-col items-center order-first md:order-last">

          <div className="flex flex-col justify-center items-center max-w-full text-center md:text-left">
            {
              details?.['testimonies.title'] &&
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight text-gray-900">
                {em(details?.['testimonies.title'])}
              </h2>
            }
            {
              details?.['testimonies.description'] &&
              <div className="mt-2 text-sm leading-5 text-center text-gray-700">
                {em(details?.['testimonies.description'])}
              </div>
            }
          </div>

          <div className="mt-8 text-lg font-medium text-center text-gray-900">
            {em(currentTestimony.description)}

          </div>

          <div className="flex flex-col mt-8 w-64 max-w-full items-center md:items-start">
            <div className="text-base font-semibold leading-6 text-center w-full text-gray-900">
              <span className="text-pink-600">{currentTestimony.name},</span>{" "}
              <span>{currentTestimony.country}</span>
            </div>

            <div className="flex gap-8 items-center mt-16 max-md:mt-10">
              {testimonies.map((testimony, index) => (
                <div
                  key={index}
                  className={`relative flex rounded-full cursor-pointer transition-transform duration-300 ${testimony.id === currentTestimony.id ? 'scale-110 border-4 border-b-[#db2777] border-r-[#db2777]' : 'hover:scale-105'}`}
                  style={{
                    width: testimony.id === currentTestimony.id ? '72px' : '60px'
                  }}
                  onClick={() => setCurrentTestimony(testimony)}
                >
                  <img
                    src={`/api/testimonies/media/${testimony.image}`}
                    alt="testimony"
                    className="object-cover object-center rounded-full p-1"
                    style={{ aspectRatio: 1 }}
                    onError={e => e.target.src = `https://ui-avatars.com/api/?name=${testimony.name}&color=7F9CF5&background=EBF4FF`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonies