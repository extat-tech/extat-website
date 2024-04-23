export default {
  root: ({ props }) => ({
      class: ['shadow-sm flex flex-wrap rounded-ful gap-2 items-center text-left w-auto nowrap', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
  }),
  button: ({ context, props }) => ({
      class: [
        'relative',
        // Font
        'text-sm',
        'leading-none',
        // Flex Alignment
        'inline-flex gap-10 items-center align-bottom text-center',
        // Spacing
        'px-4 py-2',
        // Shape
        'ring-1',
        { 'ring-gray-200 dark:ring-gray-700': !props.invalid },
        'rounded-full',
        // Color
        {
          'bg-gray-0 dark:bg-gray-900': !context.active,
          'text-gray-700 dark:text-white/80': !context.active,
          'bg-brand-700 text-white dark:bg-gray-700': context.active
        },
        // Invalid State
        { 'ring-red-500 dark:ring-red-400': props.invalid },
        // States
        'focus:outline-none focus:outline-offset-0 focus:ring-brand-500 dark:focus:ring-brand-400 focus:z-10',
        'hover:bg-brand-700 hover:text-white dark:hover:bg-gray-600/80',
        { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },
        // Transition
        'transition duration-200',
        // Misc
        'cursor-pointer select-none overflow-hidden'
      ]
  }),
  label: {
      class: 'font-semibold'
  }
}