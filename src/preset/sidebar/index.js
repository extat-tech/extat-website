export default {
  root: ({ props }) => ({
      class: [
        // Flexbox
        "flex flex-col",
        // Position
        "relative",
        { "!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0": props.position == "full" },
        // Size
        {
          "h-full w-full max-w-[320px]": props.position == "left" || props.position == "right",
          "h-auto w-full": props.position == "top" || props.position == "bottom"
        },
        // Shape
        "border-0 dark:border",
        "shadow-none",
        // Colors
        "bg-white dark:bg-surface-800",
        "text-black dark:text-white/80",
        "dark:border-surface-700",
        // Transitions
        "transition-transform",
        "duration-500",
        // Misc
        "pointer-events-auto"
      ]
    }),
  header: {
    class: ["flex items-center justify-between", "shrink-0", "min-h-14", "bg-transparent dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80"]
  },
  title: {
    class: ["font-medium leading-6 text-base m-0"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: ["relative", "flex items-center justify-center", "mr-2", "last:mr-0", "w-14 h-14", "border-0", "rounded-none", "text-surface-500", "bg-gray-100", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-1 focus:ring-2 focus:ring-inset", "focus:ring-brand-950 dark:focus:ring-primary-400", "overflow-hidden"]
  },
  closeicon: {
    class: ["inline-block", "w-5", "h-5"]
  },
  content: {
    class: ["px-0 pb-0", "mt-6", "h-full", "w-full", "grow", "overflow-y-auto"]
  },
  mask: ({ props }) => ({
      class: [
        // Transitions
        "transition",
        "duration-300",
        { "p-5": !props.position == "full" },
        // Background and Effects
        { "has-[.mask-active]:bg-brand-950/90 dark:has-[.mask-active]:bg-brand-950/90 dark:bg-brand-950/90": props.modal, "has-[.mask-active]:bg-brand-950/90 bg-brand-950/90": props.modal }
      ]
    }),
  transition: ({ props }) => props.position === "top" ? {
      enterFromClass: "translate-x-0 -translate-y-full translate-z-0 mask-active",
      leaveToClass: "translate-x-0 -translate-y-full translate-z-0 mask-active"
    } : props.position === "bottom" ? {
      enterFromClass: "translate-x-0 translate-y-full translate-z-0 mask-active",
      leaveToClass: "translate-x-0 translate-y-full translate-z-0 mask-active"
    } : props.position === "left" ? {
      enterFromClass: "-translate-x-full translate-y-0 translate-z-0 mask-active",
      leaveToClass: "-translate-x-full translate-y-0 translate-z-0 mask-active"
    } : props.position === "right" ? {
      enterFromClass: "translate-x-full translate-y-0 translate-z-0 mask-active",
      leaveToClass: "translate-x-full translate-y-0 translate-z-0 mask-active"
    } : {
      enterFromClass: "opacity-0 mask-active",
      enterActiveClass: "transition-opacity duration-400 ease-in",
      leaveActiveClass: "transition-opacity duration-400 ease-in",
      leaveToClass: "opacity-0 mask-active"
    }
}