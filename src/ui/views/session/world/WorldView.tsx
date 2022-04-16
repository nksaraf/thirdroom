import { Stats } from "../stats/Stats";
import "./WorldView.css";

export function WorldView() {
  //   const worldId = useWorldId();
  //   const room = useRoomById(worldId);

  //   const { composerInputRef } = useOutletContext<{ composerInputRef: Ref<HTMLInputElement> }>();

  //   if (!room) {
  //     return null;
  //   }

  return (
    <div className="WorldView">
      <Stats />
      {/* <div className="WorldView__chat">
        <ChatView room={room} composerInputRef={composerInputRef} />
      </div> */}
    </div>
  );
}
