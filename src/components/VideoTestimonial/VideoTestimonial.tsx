import React, { FC, useState } from "react";
import VideoTestimonialCard from "../VideoTestimonialCard/VideoTestimonialCard";
import { VideoTestimonialContainer } from "./styles";
import { testimonial } from "../../data";

const VideoTestimonial: FC = () => {
  const [videoTestimonial, setVideoTestimonial] = useState<number>(0);
  return (
    <VideoTestimonialContainer>
      <VideoTestimonialCard
        video={testimonial[videoTestimonial].video}
        quote={testimonial[videoTestimonial].quote}
        quoteBy={testimonial[videoTestimonial].quoteBy}
        setVideoTestimonial={setVideoTestimonial}
        videoTestimonial={videoTestimonial}
        noOfTestimonials={testimonial.length}
      />
    </VideoTestimonialContainer>
  );
};

export default VideoTestimonial;
