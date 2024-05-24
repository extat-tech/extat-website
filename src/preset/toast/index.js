export default {
  root: ({ props }) => ({
      class: [
        //Size and Shape
        "!right-0 md:mx-8 md:w-fit w-full rounded-none h-14",
        // Positioning
        { "-translate-x-2/4": props.position == "top-center" || props.position == "bottom-center" }
      ]
    }),
  container: ({ props }) => ({
      class: [
        "my-4 rounded-none w-full",
        "shadow-md",
        "bg-white dark:bg-surface-800",
        "ring-1 ring-gray-200 dark:ring-surface-700 ring-offset-0",
        // Colors
        {
          "text-brand-950 dark:text-blue-300": props.message.severity == "info",
          "text-brand-950 dark:text-green-300": props.message.severity == "success",
          "text-brand-950 dark:text-orange-300": props.message.severity == "warn",
          "text-brand-950 dark:text-red-300": props.message.severity == "error"
        }
      ]
    }),
  content: ({ props }) => ({
      class: [
        "flex",
        {
          "items-start": props.message.summary,
          "items-center": !props.message.summary
        }
      ]
    }),
  icon: {
    class: ["min-w-5 min-h-5", "mr-2 "]
  },
  text: {
    class: ["text-sm !truncated leading-none", "ml-2", "flex-1"]
  },
  summary: {
    class: "font-medium gap-2 text-brand-950 block"
  },
  detail: ({ props }) => ({
      class: [
        "block",
        "text-brand-950/70 text-sm dark:text-surface-0/70",
        { "mt-2 mx-2": props.message.summary }
      ]
    }),
  closebutton: {
    class: ["rounded-none flex items-center justify-center", "w-8 h-8 md:w-14 md:h-14", "ml-auto relative", "rounded-none", "bg-gray-100", "text-surface-700 dark:text-surface-0/80", "transition duration-200 ease-in-out", "hover:bg-gray-200 dark:hover:bg-surface-700", "outline-none focus:ring-1 focus:ring-inset", "focus:ring-primary-500 dark:focus:ring-primary-400", "overflow-hidden"]
  },
  closeicon: {
    class: ["w-4 h-4", "shrink-0"]
  },
  transition: {
    enterFromClass: "opacity-0 translate-y-2/4",
    enterActiveClass: "transition-[transform,opacity] duration-300",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden",
    leaveToClass: "max-h-0 opacity-0 mb-0"
  }
}