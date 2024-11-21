declare module "vue3-popper" {
  import { DefineComponent } from "vue";

  export type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";

  export interface PopperProps {
    placement?: Placement;
    disableClickAway?: boolean;
    offsetSkid?: string;
    offsetDistance?: string;
    hover?: boolean;
    show?: boolean;
    disabled?: boolean;
    openDelay?: number | string;
    closeDelay?: number | string;
    zIndex?: number | string;
    arrow?: boolean;
    arrowPadding?: string;
    interactive?: boolean;
    locked?: boolean;
    content?: string;
    "onOpen:popper"?: () => void;
    "onClose:popper"?: () => void;
  }

  const Popper: DefineComponent<PopperProps>;

  export default Popper;
}
