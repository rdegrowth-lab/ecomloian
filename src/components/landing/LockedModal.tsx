import * as React from "react";
import { useEffect } from "react";
import { useVideoGate } from "@/context/VideoGate";

const STYLES = `
@keyframes lm-overlay-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes lm-card-in {
  from { opacity: 0; transform: translateY(16px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.lm-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(8,8,8,0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  animation: lm-overlay-in 0.25s ease-out;
}
.lm-card {
  position: relative;
  width: 100%; max-width: 460px;
  background: linear-gradient(180deg, #161616 0%, #0e0e0e 100%);
  border: 1px solid #222;
  border-radius: 14px;
  padding: 36px 32px 30px;
  box-shadow:
    0 40px 100px -20px rgba(0,0,0,0.85),
    0 0 0 1px rgba(255,255,255,0.04),
    0 10px 40px -10px rgba(227,28,28,0.25);
  animation: lm-card-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}
.lm-card::before {
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% -10%, rgba(227,28,28,0.18) 0%, transparent 55%);
  pointer-events: none;
}
.lm-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 10px; font-weight: 600;
  letter-spacing: 0.32em; text-transform: uppercase;
  color: #888;
}
.lm-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: #e31c1c; box-shadow: 0 0 10px rgba(227,28,28,0.7); }
.lm-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px; line-height: 1; letter-spacing: 0.01em;
  color: #f0f0f0; margin-top: 14px;
}
.lm-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 14.5px; line-height: 1.55;
  color: #888; margin-top: 12px;
}
.lm-actions { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.lm-btn-primary {
  font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14px;
  letter-spacing: 0.02em;
  padding: 14px 22px; border-radius: 8px;
  background: linear-gradient(145deg, #e31c1c 0%, #b81515 100%);
  color: #fff; border: 1px solid rgba(227,28,28,0.7);
  box-shadow: 0 14px 30px -10px rgba(227,28,28,0.5), inset 0 1px 1px rgba(255,255,255,0.2);
  cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.lm-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 18px 36px -10px rgba(227,28,28,0.65), inset 0 1px 1px rgba(255,255,255,0.25); }
.lm-btn-ghost {
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px;
  padding: 10px 20px; border-radius: 8px;
  background: transparent; color: #888; border: 1px solid #222;
  cursor: pointer; transition: color 0.2s, border-color 0.2s;
}
.lm-btn-ghost:hover { color: #f0f0f0; border-color: #333; }
.lm-progress { margin-top: 22px; }
.lm-progress-label {
  display: flex; justify-content: space-between;
  font-family: 'DM Sans', sans-serif; font-size: 11px;
  color: #666; letter-spacing: 0.08em; text-transform: uppercase;
  margin-bottom: 8px;
}
.lm-progress-track { height: 4px; background: #222; border-radius: 2px; overflow: hidden; }
.lm-progress-fill {
  height: 100%; background: #FF0000; box-shadow: 0 0 10px rgba(255,0,0,0.5);
  transition: width 0.4s ease;
}
.lm-close {
  position: absolute; top: 14px; right: 14px;
  width: 30px; height: 30px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: transparent; border: 1px solid #222; color: #888;
  cursor: pointer; transition: all 0.2s;
}
.lm-close:hover { color: #f0f0f0; border-color: #333; }

@keyframes lockedShake {
  0%,100% { transform: translateX(0); }
  15% { transform: translateX(-6px); }
  30% { transform: translateX(6px); }
  45% { transform: translateX(-4px); }
  60% { transform: translateX(4px); }
  75% { transform: translateX(-2px); }
  90% { transform: translateX(2px); }
}
.cta-shake { animation: lockedShake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97); }
`;

const LockedModal = () => {
  const { lockedModalOpen, closeLockedModal, progress } = useVideoGate();

  useEffect(() => {
    if (!lockedModalOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeLockedModal(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lockedModalOpen, closeLockedModal]);

  const handleWatchVideo = () => {
    closeLockedModal();
    const el = document.getElementById("top");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Unmute & play after scroll
    setTimeout(() => {
      try {
        const w = window as any;
        const evt = new CustomEvent("hero:play-video");
        window.dispatchEvent(evt);
      } catch {}
    }, 600);
  };

  if (!lockedModalOpen) return null;

  return (
    <>
      <style>{STYLES}</style>
      <div
        className="lm-overlay"
        role="dialog"
        aria-modal="true"
        onClick={(e) => { if (e.target === e.currentTarget) closeLockedModal(); }}
      >
        <div className="lm-card">
          <button aria-label="Cerrar" className="lm-close" onClick={closeLockedModal}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="lm-eyebrow">
              <span className="dot" />
              Acceso bloqueado
            </span>

            <h3 className="lm-title">
              Primero el vídeo.
              <br /> Después la aplicación.
            </h3>

            <p className="lm-text">
              No aceptamos solicitudes a ciegas. Mira el vídeo completo para entender
              cómo funciona la comunidad — solo entonces podrás aplicar.
            </p>

            <div className="lm-progress">
              <div className="lm-progress-label">
                <span>Tu progreso</span>
                <span>{Math.round(progress)}% / 80%</span>
              </div>
              <div className="lm-progress-track">
                <div className="lm-progress-fill" style={{ width: `${Math.min(100, progress)}%` }} />
              </div>
            </div>

            <div className="lm-actions">
              <button className="lm-btn-primary" onClick={handleWatchVideo}>
                Ver el vídeo ahora →
              </button>
              <button className="lm-btn-ghost" onClick={closeLockedModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockedModal;
