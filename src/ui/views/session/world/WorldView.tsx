import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { SessionOutletContext } from "../SessionView";
import { ChatView } from "../chat/ChatView";
import { Stats } from "../stats/Stats";
import "./WorldView.css";
import { useKeyDown } from "../../../hooks/useKeyDown";

export function WorldView() {
  const { activeWorld, chatOpen, onOpenChat, onCloseChat, canvasRef } = useOutletContext<SessionOutletContext>();

  useKeyDown(
    (e) => {
      if (e.key === "Enter" && !chatOpen && e.target === canvasRef.current) {
        onOpenChat();
      } else if (e.key === "Escape" && chatOpen) {
        onCloseChat();
      }
    },
    [chatOpen, canvasRef]
  );

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const onClickCanvas = () => {
        if (chatOpen) {
          onCloseChat();
        }
      };

      canvas.addEventListener("click", onClickCanvas);

      return () => {
        canvas.removeEventListener("click", onClickCanvas);
      };
    }
  }, [chatOpen, onCloseChat, canvasRef]);

  if (!activeWorld) {
    return null;
  }

  return (
    <div className="WorldView">
      <Stats />
      <div className="WorldView__chat">
        <ChatView open={chatOpen} room={activeWorld} />
      </div>
    </div>
  );
}
