import { Lottie } from "@crello/react-lottie";
import loadingAnimation from "./animations/loading.json";

function LoadingWidget() {
  return (
    <div>
      <div
        className="p-8"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic text-red-400"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
    </div>
  );
}

export default LoadingWidget;
