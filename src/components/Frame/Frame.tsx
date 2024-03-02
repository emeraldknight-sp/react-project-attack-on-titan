import { useEffect, useRef } from "react";
import { FrameContainer, FrameVideo } from "./Frame.style";

interface FrameProps {
  key?: number;
  video: Trailer;
}

export const Frame = ({ key, video }: FrameProps) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument =
        (iframeRef.current as HTMLIFrameElement).contentDocument ||
        (iframeRef.current as HTMLIFrameElement).contentWindow?.document;

      const playButton = iframeDocument?.querySelector<HTMLElement>(
        ".ytp-large-play-button",
      );

      if (playButton) {
        playButton.style.backgroundColor = "red";
        playButton.innerHTML = "Custom Play Button";
      }
    }
  }, []);

  return (
    <FrameContainer key={key}>
      <FrameVideo
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </FrameContainer>
  );
};
