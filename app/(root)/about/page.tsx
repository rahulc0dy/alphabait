import React from "react";

const AboutPage = () => {
  return (
    <div className="wrapper mx-auto py-4">
      <h1 className="mb-6 text-4xl font-bold">About AlphaBait</h1>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Overview</h2>
        <p className="mb-4">
          The AlphaBait application provides an immersive, multisensory, and
          accessible educational platform for children and young learners. It
          uses interactive letters to teach the alphabet by combining visual,
          auditory, and kinesthetic methods.
        </p>
        <p className="mb-4">
          In addition to the core functionalities, the project includes advanced
          features—such as gamification, augmented reality, voice recording with
          feedback, and parental dashboards—to foster a fun and engaging
          learning environment.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Features</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>
            Interactive Letter Playback with audio feedback using the Web Speech
            API.
          </li>
          <li>
            Visual & Auditory Associations displaying stylized letters with
            related images.
          </li>
          <li>Rhymes and Songs for fun and memory retention.</li>
          <li>
            Accessibility Features with ARIA labels, high-contrast options, and
            adjustable font sizes.
          </li>
          <li>Regional Language Support.</li>
          <li>
            Additional Innovative Features: Augmented reality mode, voice
            recording with pronunciation feedback, gamified learning modules,
            and parental/educator dashboards.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-semibold">Our Team</h2>
        <ul className="list-inside list-disc">
          <li>Rahul Chakraborty - Frontend and Lead</li>
          <li>Aritra Ghosh</li>
          <li>Souvik Mukherjee</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
