  import Image, { StaticImageData } from "next/image"
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

  const reviewImages = [
    Review1,
    Review2,
    Review3,
    Review4,
    Review5,
    Review6,
    Review7,
    Review8,
    Review9,
    Review10,
    Review11,
    Review12,
    Review13,
    Review14,
    Review15,
    Review16,
    Review17,
    Review18,
    Review19,
  ]

  export function Review() {
    return (
      <section id="review-section" className="my-24">
        <div className="container mx-auto px-4 mt-[200px] mb-[200px]">
          <h2 className="text-center text-lg font-medium pb-[50px]">What they say</h2>
          <div className="relative overflow-hidden space-y-4">
            <CarouselRow images={reviewImages.slice(0, 10)} />
            <CarouselRow images={reviewImages.slice(9)} reverse/>
            <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </section>
    )
  }

  interface CarouselRowProps {
    images: StaticImageData[]
    reverse?: boolean
  }

  function CarouselRow({ images, reverse = false }: CarouselRowProps) {
    return (
      <div className={`flex ${reverse ? "animate-reverse-scroll" : "animate-scroll"}`}>
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] mx-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Review ${(index % images.length) + 1}`}
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    )
  }


