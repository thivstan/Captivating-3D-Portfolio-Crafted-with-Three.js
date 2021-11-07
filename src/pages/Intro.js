import Marquee from "react-fast-marquee";
import JobCard from "../components/Card";
import MarqueeContent from "../sections/marqueeContents";
import SkillText from "../sections/SkillText";
import StyledSkill from "./styles/StyledSkill";

const SkillPage = () => (
  <StyledSkill>
    <div className="skill-container">
      <SkillText />
      <div className="cards">
        <JobCard
          position="Full Stack Developer"
          compName="D.Y. Patil Robotics and A.I. Club"
          timestamp="2020-present"
          description={[
            "Lead Team for various web/app projects",
            "Organized HashCode 2021",
          ]}
        />
      </div>
    </div>
    <div className="marquee-container">
      <Marquee gradient={false} pauseOnHover={true}>
        <MarqueeContent />
      </Marquee>
    </div>
  </StyledSkill>
);

export default SkillPage;
