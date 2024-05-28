export default {
    root: ({ context, props }) => ({
      class: [
        // Font
        'font-sans leading-6',
        'text-sm',
        // Spacing
        'm-0',
        'py-2.5 px-4',
        // Shape
        'rounded-md',
        'appearance-none',
        // Colors
        'text-brand-950 dark:text-brand-0',
        'placeholder:text-brand-950/70 dark:placeholder:text-brand-500',
        'bg-gray-50 dark:bg-brand-900',
        'ring-1 ring-inset ring-offset-0',
        'shadow-sm',
        { ' ring-gray-200 dark:ring-brand-700': !props.invalid },
        // Invalid State
        { 'ring-red-500 dark:ring-red-400': props.invalid },
        // States
        {
          'outline-none focus:ring-primary-500 dark:focus:ring-primary-400': !context.disabled,
          'opacity-60 select-none pointer-events-none cursor-default': context.disabled
        },
        // Misc
        'appearance-none',
        'transition-all outline-none hover:ring-brand-700 hover:ring-2  hover:bg-brand-50 focus:ring-brand-950 focus:outline-2 focus:outline-offset-2 focus:ring-2 dark:focus:ring-primary-400 focus:ring-2'
      ]
    })
}
