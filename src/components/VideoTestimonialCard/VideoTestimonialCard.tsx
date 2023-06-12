import React, { FC } from "react";
import {
  Quote,
  QuoteBy,
  QuoteContainer,
  SkipButton,
  Video,
  VideoContainer,
  VideoTestimonialCardContainer,
} from "./styles";

type videoTestimonialProps = {
  video: string;
  quote: string;
  quoteBy: string;
  setVideoTestimonial: React.Dispatch<React.SetStateAction<number>>;
  videoTestimonial: number;
  noOfTestimonials: number;
};
const VideoTestimonialCard: FC<videoTestimonialProps> = ({
  video,
  quote,
  quoteBy,
  setVideoTestimonial,
  videoTestimonial,
  noOfTestimonials,
}) => {
  const handleSkip = () => {
    if (videoTestimonial === noOfTestimonials - 1) {
      setVideoTestimonial(0);
    } else {
      setVideoTestimonial(videoTestimonial + 1);
    }
  };
  return (
    <VideoTestimonialCardContainer>
      <VideoContainer>
        <Video src={video} autoPlay loop muted />
      </VideoContainer>
      <QuoteContainer>
        <Quote>{quote}</Quote>
        <QuoteBy>- {quoteBy}</QuoteBy>
      </QuoteContainer>
      <SkipButton onClick={handleSkip}>Skip?</SkipButton>
    </VideoTestimonialCardContainer>
  );
};

export default VideoTestimonialCard;
