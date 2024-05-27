
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
        class: ['cursor-pointer flex justify-center items-center self-center', 'overflow-hidden w-8 h-8', 'mx-2', 'min-h-[44px] min-w-[44px] rounded-full', 'border-0 bg-transparent', 'text-brand-900/60', 'hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-800', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400', 'transition duration-200 ease-in-out']
    },
    nextbutton: {
        class: ['cursor-pointer flex justify-center items-center self-center', 'overflow-hidden w-8 h-8', 'mx-2', 'min-h-[44px] min-w-[44px] rounded-full', 'border-0 bg-transparent', 'text-brand-900/60', 'hover:bg-brand-50 hover:text-brand-700 dark:hover:bg-brand-800', 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400', 'transition duration-200 ease-in-out']
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
        class: ['mr-2 mt-10 mb-2']
    },
    indicatorbutton: ({ context }) => ({
        class: [
          // Sizing & Shape
          'w-2 h-2 rounded-md',
          // Transitions
          'transition duration-400',
          // Focus Styles
          'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400',
          // Color & Background
          {
            'bg-brand-200 hover:bg-brand-300 dark:bg-brand-700 dark:hover:bg-brand-600': !context.highlighted,
            'bg-brand-700 hover:bg-brand-900': context.highlighted
          }
        ]
    })
}
