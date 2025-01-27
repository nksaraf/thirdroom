import { SimpleTile, GapView, TileViewConstructor } from "@thirdroom/hydrogen-view-sdk";

import { TextMessageView } from "./TextMessageView";
import { AnnouncementView } from "./AnnouncementView";

export function viewClassForTile(vm: SimpleTile): TileViewConstructor<any> {
  switch (vm.shape) {
    case "gap":
      return GapView;
    case "announcement":
      return AnnouncementView;
    case "message":
    case "message-status":
      return TextMessageView;
    default:
      throw new Error(
        `Tiles of shape "${vm.shape}" are not supported, check the tileClassForEntry function in the view model`
      );
  }
}
