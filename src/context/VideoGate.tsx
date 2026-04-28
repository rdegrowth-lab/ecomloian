import * as React from "react";

type Ctx = {
  progress: number;
  unlocked: boolean;
  setProgress: (p: number) => void;
};

const VideoGateContext = React.createContext<Ctx>({
  progress: 0,
  unlocked: false,
  setProgress: () => {},
});

export const VideoGateProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgressState] = React.useState(0);
  const setProgress = React.useCallback((p: number) => {
    setProgressState((prev) => (p > prev ? p : prev));
  }, []);
  const unlocked = progress >= 80;
  return (
    <VideoGateContext.Provider value={{ progress, unlocked, setProgress }}>
      {children}
    </VideoGateContext.Provider>
  );
};

export const useVideoGate = () => React.useContext(VideoGateContext);
