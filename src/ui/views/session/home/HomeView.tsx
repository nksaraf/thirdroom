// import { useEngine } from "../../../hooks/useEngine";
import { useRef } from "react";

import { useInitEngine, EngineContextProvider, useInitEditor } from "../../../hooks/useEngine";
import { WorldView } from "../world/WorldView";

export function HomeView() {
  // TODO: Load user's avatar into engine
  // const { loadGLTF } = useEngine();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const engine = useInitEditor(canvasRef);
  const engine2 = useInitEngine(canvasRef2);
  return (
    <div className="SessionView">
      <canvas
        className="SessionView__viewport"
        style={{
          width: "50vw",
          height: "100vh",
        }}
        ref={canvasRef}
      />
      <canvas
        className="SessionView__viewport"
        style={{
          width: "50vw",
          height: "100vh",
        }}
        ref={canvasRef2}
      />
      {engine ? (
        <EngineContextProvider value={engine}>
          <WorldView />
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
