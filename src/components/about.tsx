import styled from "styled-components";
import { SectionHeader } from "./ui-components/section-header";

const AboutDiv = styled.div``;

export const AboutSection = () => {
  return (
    <AboutDiv id="about">
      <SectionHeader text="About Me" />
      <section>
        <p>
          It's nice to see you here! I'm a full-stack web developer based in
          Melbourne, Australia. At the end of 2021 I decided to look into
          programming as a way of automating some tedious stuff. Then I got
          completely distracted by the limitlessness of web development, so I
          hopped into a bootcamp and never looked back. Now I get to spend my
          days building cool stuff for SwiftFox, while working on fun projects
          of my own (like the sun/moon toggle you see up there, have a play with
          it)!
        </p>
        <p>
          In my spare time I love to compete in Brazilian Jiu Jitsu, write,
          experiment with digital art mediums (ThreeJS is the current
          obsession), and play video games. I have a little Maltillion called
          Joob and you will find her around the place here. They say a Joob
          sighting is a positive omen 🍀.
        </p>
      </section>
    </AboutDiv>
  );
};
