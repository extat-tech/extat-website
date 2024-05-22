
export default {
    root: {
        class: ['flex flex-col']
    },
    content: {
        class: ['flex flex-col overflow-auto']
    },
    container: ({ props }) => ({
        class: [
          // Flexbox
          'flex',
          // Orientation
          {
            'flex-row': props.orientation !== 'vertical',
            'flex-col': props.orientation == 'vertical'
          }
        ]
    }),
    previousbutton: {
        class: ['flex justify-center items-center self-center', 'overflow-hidden w-8 h-8', 'mx-2', 'rounded-full', 'border-0 bg-transparent', 'text-surface-600', 'hover:bg-surface-50 dark:hover:bg-surface-800', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400', 'transition duration-200 ease-in-out']
    },
    nextbutton: {
        class: ['flex justify-center items-center self-center', 'overflow-hidden w-8 h-8', 'mx-2', 'rounded-full', 'border-0 bg-transparent', 'text-surface-600', 'hover:bg-surface-50 dark:hover:bg-surface-800', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400', 'transition duration-200 ease-in-out']
    },
    itemscontent: {
        class: ['overflow-hidden w-full']
    },
    itemscontainer: ({ props }) => ({
        class: [
          // Flexbox
          'flex',
          // Orientation & Sizing
          {
            'flex-row': props.orientation !== 'vertical',
            'flex-col h-full': props.orientation == 'vertical'
          }
        ]
    }),
    item: ({ props }) => ({
        class: [
          // Flexbox
          'flex shrink-0 grow ',
          // Size
          {
            'w-full sm:w-[50%] md:w-[33.333333333333336%]': props.orientation !== 'vertical',
            'w-full h-full': props.orientation == 'vertical'
          }
        ]
    }),
    itemcloned: ({ props }) => ({
        class: [
          // Flexbox
          'flex shrink-0 grow',
          'unvisible',
          // Size
          {
            'w-full sm:w-[50%] md:w-[33.333333333333336%]': props.orientation !== 'vertical',
            'w-full h-full': props.orientation == 'vertical'
          }
        ]
    }),
    indicators: {
        class: ['flex flex-row justify-center flex-wrap']
    },
    indicator: {
        class: ['mr-2 mb-2']
    },
    indicatorbutton: ({ context }) => ({
        class: [
          // Sizing & Shape
          'w-8 h-2 rounded-md',
          // Transitions
          'transition duration-200',
          // Focus Styles
          'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',
          // Color & Background
          {
            'bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600': !context.highlighted,
            'bg-primary hover:bg-primary-hover': context.highlighted
          }
        ]
    })
}
