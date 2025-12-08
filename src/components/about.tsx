import { SectionHeader } from "./ui-components/section-header";

export const AboutSection = () => {
  return (
    <div>
      <SectionHeader text="About Me" />
      <section>
        <p>
          Hey there! My name is Hunter, I'm a full-stack web developer based in
          Melbourne, Australia. At the end of 2021 I became fascinated by the
          limitlessness of web development, so I hopped into a bootcamp and
          never looked back. Now I get to spend my days building cool stuff for
          SwiftFox (a CRM platform), while working on fun projects of my own
          (like the light/dark toggle you see up there, have a play with it)!
        </p>
        <p>
          In my spare time I love to compete in Brazilian Jiu Jitsu, write,
          experiment with digital art mediums (ThreeJS is the current
          obsession), and play video games.
        </p>
      </section>
    </div>
  );
};
