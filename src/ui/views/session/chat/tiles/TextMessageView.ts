import { TemplateView, TextTile, Builder, TileView } from "@thirdroom/hydrogen-view-sdk";

import "./TextMessageView.css";

export class TextMessageView extends TemplateView<TextTile> implements TileView {
  constructor(vm: TextTile) {
    super(vm);
  }

  render(t: Builder<TextTile>, vm: TextTile): Element {
    return t.li(
      { className: "TextMessageView" },
      t.div({ className: "Text Text-b2 Text--regular" }, [
        t.span({ className: "TextMessageView__sender Text--semi-bold" }, vm.displayName),
        vm._getPlainBody?.() || "*** EMPTY MESSAGE ***",
      ])
    );
  }
  onClick() {}
}
