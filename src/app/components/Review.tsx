import Image from 'next/image';
import React from 'react';
import Review1 from "../../../assets/Review/review (1).svg"
import Review2 from "../../../assets/Review/review (2).svg"
import Review3 from "../../../assets/Review/review (3).svg"
import Review4 from "../../../assets/Review/review (4).svg"
import Review5 from "../../../assets/Review/review (5).svg"
import Review6 from "../../../assets/Review/review (6).svg"
import Review7 from "../../../assets/Review/review (7).svg"
import Review8 from "../../../assets/Review/review (8).svg"
import Review9 from "../../../assets/Review/review (9).svg"
import Review10 from "../../../assets/Review/review (10).svg"
import Review11 from "../../../assets/Review/review (11).svg"
import Review12 from "../../../assets/Review/review (12).svg"
import Review13 from "../../../assets/Review/review (13).svg"
import Review14 from "../../../assets/Review/review (14).svg"
import Review15 from "../../../assets/Review/review (15).svg"
import Review16 from "../../../assets/Review/review (16).svg"
import Review17 from "../../../assets/Review/review (17).svg"
import Review18 from "../../../assets/Review/review (18).svg"
import Review19 from "../../../assets/Review/review (19).svg"

export function Review() {
  return (
    <section id="review-section" className="my-24">
      <div className="container mt-[200px] mb-[200px]">
        <div className="row">
          <div className="d-flex justify-content-center text-lg font-medium pb-[50px]">
            What they say
          </div>
          <div className="col">
            <div className="row logos">
              <div className="logos-slide">
                <Image 
                    src={Review1}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review2}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review3}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review4}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review5}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review6}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                 <Image 
                    src={Review7}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                 <Image 
                    src={Review8}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                 <Image 
                    src={Review9}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                 <Image 
                    src={Review10}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
              </div>
              <div className="logos-slide">
                <Image 
                    src={Review10}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review11}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review12}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review13}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review14}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review15}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review16}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review17}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review18}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
                <Image 
                    src={Review19}
                    alt={`Review`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                />
              </div>
            </div>
            <div className="fades fades-left"></div>
            <div className="fades fades-right"></div>
          </div>
        </div>
      </div>
    </section>
  )
}