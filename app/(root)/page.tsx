import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LetterLinks from "@/components/LetterLinks";

const cardData = [
  {
    title: "Accessibility First",
    description:
      "Designed with screen readers and assistive technologies in mind",
    content:
      "Features high contrast modes, audio feedback, and keyboard navigation support",
    footer: "For all abilities",
  },
  {
    title: "Interactive Learning",
    description: "Multi-sensory learning experience",
    content:
      "Combines visual, audio, and tactile feedback for comprehensive learning",
    footer: "Learn your way",
  },
  {
    title: "Alphabet Adventures",
    description: "Fun and engaging letter recognition",
    content: "Progressive learning path from basic letters to complex words",
    footer: "Master the ABCs",
  },
  {
    title: "Number Navigator",
    description: "Mathematical foundation building",
    content: "Interactive counting and basic arithmetic exercises",
    footer: "Count on success",
  },
];

export default function Home() {
  return (
    <main className="wrapper mx-auto py-8">
      <section className="py-5 text-center">
        <h1 className="text-primary mb-4 text-2xl font-bold md:text-5xl">
          Welcome to AlphaBait
        </h1>
        <p className="mb-6 sm:text-xl">
          Immersive education meets innovation. Explore our interactive platform
          designed for young minds.
        </p>
        <Button className="text-shadow bg-primary text-text cursor-pointer text-lg">
          Get Started
        </Button>
      </section>

      <section>
        <h2 className="text-primary mb-4 font-bold sm:text-4xl">Features</h2>
        <div className={"auto-grid-non-column-generation"}>
          {cardData.map((card, index) => (
            <Card key={index} className={"bg-bg-alt text-text"}>
              <CardHeader>
                <CardTitle className={"text-primary text-lg"}>
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
              <CardFooter className={"text-muted"}>
                <p>{card.footer}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className={"py-5"}>
        <h2 className="text-primary font-bold sm:text-4xl">Learn</h2>
        <LetterLinks />
      </section>
    </main>
  );
}
