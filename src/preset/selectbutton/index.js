export default {
  root: ({ props }) => ({
    class: ['shadow-none flex flex-wrap  gap-2 items-center text-left w-auto nowrap', { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
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
      'rounded-md',
      // Color
      {
        'bg-gray-50 hover:bg-brand-700 hover:text-white dark:bg-gray-900': !context.active,
        'text-gray-700 hover:bg-brand-50 dark:text-white/80': !context.active,
        'bg-brand-700 hover:bg-brand-900 text-white dark:bg-gray-700': context.active
      },
      // Invalid State
      { 'ring-red-500 dark:ring-red-400': props.invalid },
      // States
      'focus:outline-none focus:outline-offset-2 focus:ring-brand-950 dark:focus:ring-brand-950 focus:ring-2 focus:z-10',
      ' dark:hover:bg-gray-600/80',
      { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled },
      // Transition
      'transition duration-200',
      // Misc
      'cursor-pointer select-none overflow-hidden'
    ]
  }),
  label: {
    class: 'font-medium'
  }
}