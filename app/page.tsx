import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="wrapper mx-auto py-8">
      <section className="text-center">
        <h1 className="mb-4 text-5xl font-bold">Welcome to AlphaBait</h1>
        <p className="mb-6 text-xl">
          Immersive education meets innovation. Explore our interactive platform
          designed for young minds.
        </p>
        <Button className="text-shadow cursor-pointer text-lg">
          Get Started
        </Button>
      </section>
    </main>
  );
}

