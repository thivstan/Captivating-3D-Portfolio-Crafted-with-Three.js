import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import csudh from "../../assets/images/csudh.png";
import srmvec from "../../assets/images/srmvec.png";
import sos from "../../assets/images/sos.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
        <Paragraph>
            As a passionate full-stack developer, I thrive on tackling complex challenges and delivering 
            innovative solutions powered by emerging technologies like AI and machine learning. 
            <br></br> <br></br>
            My love for coding is matched by my enthusiasm for continuous learning, 
            and my expertise spans both front-end and back-end development. 
            I'm also a natural problem-solver with a solutions-oriented mindset, 
            leveraging my analytical thinking and creative problem-solving skills to develop elegant solutions. 
            <br></br> <br></br>
            Beyond coding, I find joy and inspiration in my adorable puppy companion. With my robust technical skills and innovative spirit, I'm poised to make significant contributions (but don't let me catch you chasing squirrels!).
        </Paragraph>


          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "California State University, DOminguez Hills",
                p: "Masters in Computer Science (Aug 2022- Expecetd May 2024)",
                image: csudh,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "SRM VEC, India",
                p: "Bachelors in Computer Science (Aug 2016 -  May 2020)",
                image: srmvec,
              }}
            />
        
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
