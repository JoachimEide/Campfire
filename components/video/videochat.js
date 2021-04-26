import { useRef, useEffect } from "react";
import VideoChatStyle from "./videochat.module.css";

export default function VideoChat(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  return (
    <div
      className={VideoChatStyle.container}
      style={
        props.videochat
          ? { width: "20%", borderLeft: "1px solid #e59740" }
          : { width: "20%", borderLeft: "1px solid #e59740" }
      }
    >
      <video
        src="/placeover_vid.mp4"
        className={VideoChatStyle.video}
        height="140"
        width="190"
        autoPlay
      ></video>
      <div className={VideoChatStyle.videoIcons}>
        <img
          src="/images/video_icon.svg"
          alt="video-icon"
          style={{ height: "17px" }}
        />
        <img
          src="/images/mic_icon.svg"
          alt="mic-icon"
          style={{ height: "23px" }}
        />
      </div>
      <video
        className={VideoChatStyle.video}
        ref={videoRef}
        height="140"
        width="190"
        autoPlay
      ></video>
      <div className={VideoChatStyle.videoIcons}>
        <img
          src="/images/video_icon.svg"
          alt="video-icon"
          style={{ height: "17px" }}
        />
        <img
          src="/images/mic_icon.svg"
          alt="mic-icon"
          style={{ height: "23px" }}
        />
      </div>

      <div style={{ marginTop: "20%" }}></div>
    </div>
  );
}
