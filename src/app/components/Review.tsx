import Image from 'next/image';
import React from 'react';
import Review1 from "../../../assets/Review/review (1).svg"
import Review2 from "../../../assets/Review/review (1).svg"
import Review3 from "../../../assets/Review/review (1).svg"
import Review4 from "../../../assets/Review/review (1).svg"
import Review5 from "../../../assets/Review/review (1).svg"
import Review6 from "../../../assets/Review/review (1).svg"
import Review7 from "../../../assets/Review/review (1).svg"
import Review8 from "../../../assets/Review/review (1).svg"
import Review9 from "../../../assets/Review/review (1).svg"
import Review10 from "../../../assets/Review/review (1).svg"
import Review11 from "../../../assets/Review/review (1).svg"
import Review12 from "../../../assets/Review/review (1).svg"
import Review13 from "../../../assets/Review/review (1).svg"
import Review13 from "../../../assets/Review/review (1).svg"
import Review1 from "../../../assets/Review/review (1).svg"
import Review1 from "../../../assets/Review/review (1).svg"
import Review1 from "../../../assets/Review/review (1).svg"
import Review1 from "../../../assets/Review/review (1).svg"
import Review1 from "../../../assets/Review/review (1).svg"
import Review1 from "../../../assets/Review/review (1).svg"

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
                {/* First set of images */}
                {[...Array(10)].map((_, i) => (
                  <Image 
                    key={`first-${i}`}
                    src={`../../../assets/Review/review (${i + 1}).svg`}
                    alt={`Review ${i + 1}`}
                    width={100}  // Add appropriate width
                    height={40}  // Add appropriate height
                    className="mx-2"
                  />
                ))}
                {/* Duplicate for seamless animation */}
                {[...Array(10)].map((_, i) => (
                  <Image 
                    key={`dup-first-${i}`}
                    src={`../../../assets/Review/review (${i + 1}).svg`.trim()}
                    alt={`Review ${i + 1}`}
                    width={100}
                    height={40}
                    className="mx-2"
                  />
                ))}
              </div>
              <div className="logos-slide">
                {/* Second set of images */}
                {[...Array(9)].map((_, i) => (
                  <Image 
                    key={`second-${i}`}
                    src={`../../../assets/Review/review (${i + 1}).svg`.trim()}
                    alt={`Review ${i + 11}`}
                    width={100}
                    height={40}
                    className="mx-2"
                  />
                ))}
                {/* Duplicate for seamless animation */}
                {[...Array(9)].map((_, i) => (
                  <Image 
                    key={`dup-second-${i}`}
                    src={`/assets/Review/review (${i + 11}).svg`.trim()}
                    alt={`Review ${i + 11}`}
                    width={100}
                    height={40}
                    className="mx-2"
                  />
                ))}
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