import CardCarousel from "../components/Card";

export function Value() {
  return (
    <div className="hidden lg:flex h-screen flex-col items-center justify-center mt-[300px]">
      <p className="text-6xl font-medium text-center mb-16">Value</p>
      <div className="container flex justify-center">
        <CardCarousel />
      </div>
    </div>
  );
}
