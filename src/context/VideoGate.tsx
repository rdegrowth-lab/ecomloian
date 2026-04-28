import * as React from "react";

type Ctx = {
  progress: number;
  unlocked: boolean;
  setProgress: (p: number) => void;
  lockedModalOpen: boolean;
  openLockedModal: () => void;
  closeLockedModal: () => void;
  shakeNonce: number;
  triggerShake: () => void;
};

const VideoGateContext = React.createContext<Ctx>({
  progress: 0,
  unlocked: false,
  setProgress: () => {},
  lockedModalOpen: false,
  openLockedModal: () => {},
  closeLockedModal: () => {},
  shakeNonce: 0,
  triggerShake: () => {},
});

export const VideoGateProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgressState] = React.useState(0);
  const [lockedModalOpen, setLockedModalOpen] = React.useState(false);
  const [shakeNonce, setShakeNonce] = React.useState(0);

  const setProgress = React.useCallback((p: number) => {
    setProgressState((prev) => (p > prev ? p : prev));
  }, []);
  const openLockedModal = React.useCallback(() => setLockedModalOpen(true), []);
  const closeLockedModal = React.useCallback(() => setLockedModalOpen(false), []);
  const triggerShake = React.useCallback(() => setShakeNonce((n) => n + 1), []);

  const unlocked = progress >= 80;
  return (
    <VideoGateContext.Provider
      value={{
        progress,
        unlocked,
        setProgress,
        lockedModalOpen,
        openLockedModal,
        closeLockedModal,
        shakeNonce,
        triggerShake,
      }}
    >
      {children}
    </VideoGateContext.Provider>
  );
};

export const useVideoGate = () => React.useContext(VideoGateContext);
