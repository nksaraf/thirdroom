// import { useEngine } from "../../../hooks/useEngine";
import { useRef } from "react";
import { useInitEngine, EngineContextProvider } from "../../../hooks/useEngine";

export function HomeView() {
  // TODO: Load user's avatar into engine
  // const { loadGLTF } = useEngine();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engine = useInitEngine(canvasRef);
  return (
    <div className="SessionView">
      <canvas
        className="SessionView__viewport"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        ref={canvasRef}
      />
      {engine ? (
        <EngineContextProvider value={engine}>
          {/* <Outlet context={{ composerInputRef }} /> */}
          {/* <Overlay
            isOpen={isOverlayOpen}
            isHome={isHome}
            initialWorldId={worldId}
            onLoadWorld={onLoadWorld}
            onEnterWorld={onEnterWorld}
          /> */}
          {/* <StatusBar showOverlayTip={!isHome} overlayOpen={isOverlayOpen} title={isHome ? "Home" : world?.name} /> */}
        </EngineContextProvider>
      ) : (
        <div>Initializing engine...</div>
      )}
    </div>
  );
}
