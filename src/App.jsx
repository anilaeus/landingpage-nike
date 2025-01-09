import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      Nav
      <section className="xl:padding-1 wide:padding-r padding-b">Hero</section>
      <section className="padding">Popular Products</section>
      <section className="padding">Super Quality</section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">Special Offer</section>
      <section className="padding bg-pale-blue">Customer Reviews</section>
      <section className="padding sm:py-32 py-16 w-full">Subscribe</section>
      <section className="padding bg-black padding-x padding-t pb-8">
        Footer
      </section>
    </main>
  );
}

export default App;
