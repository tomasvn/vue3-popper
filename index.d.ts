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
    /**
     * Preferred placement of the Popper
     * @default bottom
    */
    placement?: Placement;
    /**
     * Disables automatically closing the Popper when the user clicks away from it
     * @default false
     */
    disableClickAway?: boolean;
    /**
     * Offset in pixels along the trigger element
     * @default '0'
     */
    offsetSkid?: string;
    /**
     * Offset in pixels away from the trigger element
     * @default '12'
     */
    offsetDistance?: string;
    /**
     * Trigger the Popper on hover
     * @default false
     */
    hover?: boolean;
    /**
     * Control the Popper manually, other events (click, hover) are ignored if this is set to true/false
     * @default null
     */
    show?: boolean;
    /**
     * Disables the Popper. If it was already open, it will be closed.
     * @default false
     */
    disabled?: boolean;
    /**
     * Open the Popper after a delay (ms)
     * @default 0
     */
    openDelay?: number | string;
    /**
     * Close the Popper after a delay (ms)
     * @default 0
     */
    closeDelay?: number | string;
    /**
     * The z-index of the Popper
     * @default 9999
     */
    zIndex?: number | string;
    /**
     * Display an arrow on the Popper
     * @default false
     */
    arrow?: boolean;
    /**
     * Stop arrow from reaching the edge of the Popper (in pixels)
     * @default '0'
     */
    arrowPadding?: string;
    /**
     * If the Popper should be interactive, it will close when clicked/hovered if false
     * @default true
     */
    interactive?: boolean;
    /**
     * If the Popper should be interactive, it will close when clicked/hovered if false
     * @default true
     */
    locked?: boolean;
    /**
     * If your content is just a simple string, you can pass it as a prop
     * @default null
     */
    content?: string;
    /**
     * When the Popper is opened
     */
    "onOpen:popper"?: () => void;
    /**
     * When the Popper is hidden
     */
    "onClose:popper"?: () => void;
  }

  const Popper: DefineComponent<PopperProps>;

  export default Popper;
}
