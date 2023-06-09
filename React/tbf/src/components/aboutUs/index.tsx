import {
  PageAnotherHeadignStyle,
  PageHeadingBorderStyle,
  PageHeadingStyle,
  PageParagraphStyle,
} from "styles/components/pageHeading";

import { AboutUsStyle,AboutUsTopHeadingStyle,AboutUsTop1Style,AboutUsTop2Style,CardWrapper } from "styles/components/aboutUsStyle";
import Cards from "components/cards";

const AboutUs = () => {
  return (
    <>
    
    <AboutUsStyle>
      <PageHeadingStyle>
        ABOUT <PageHeadingBorderStyle />
      </PageHeadingStyle>
      <AboutUsTopHeadingStyle>
      <AboutUsTop1Style>
        <PageAnotherHeadignStyle>About Us</PageAnotherHeadignStyle>
      </AboutUsTop1Style>
      <AboutUsTop2Style>
        <PageParagraphStyle>
            Combining 30 years of niche farming knowledge from the region, 10 years
            worth of genetic development, along with cutting edge industrial tools,
            our professional farming team brings artisanal quality in volumes you
            can depend on.
        </PageParagraphStyle>
      </AboutUsTop2Style>  
        
      </AboutUsTopHeadingStyle>
      <CardWrapper>
        <Cards />
      </CardWrapper>
      
    </AboutUsStyle>
    
  
  </>
    
  );
};

export default AboutUs;
