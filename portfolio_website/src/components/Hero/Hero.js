import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { HeroData } from '../../constants/constants';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
            Front-End Developer with a proven ability 
            to collaborate effectively with 
            senior developers while spending
            extra time to be mentored.
            Enjoy working closely with team members
            to ensure workloads are effectively
            redirected to bottlenecks and
            personally picking up the slack when
            necessary.
            With a passion for both
            personal growth and for software
            development, I attended a 1000+ hour
            coding bootcamp to learn new
            languages while sharpening existing
            skills. Ready to apply my passion for
            coding to a talented engineering
            team to develop quality solutions.
        </SectionText>
        <Button target={'blank'} href={HeroData.resume} >Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;