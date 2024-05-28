export default {
    root: {
        class: [

            // Sizing and Shape
            'min-w-[12rem]',
            ' rounded-lg',
            // Spacing
            'p-0',
            // Colors
            'bg-transparent dark:bg-surface-700',
            'text-surface-700 dark:text-white/80',
            'ring-0 dark:ring-surface-700'
        ]
    },
    menu: {
        class: [
            // Spacings and Shape
            'list-none',
            'm-0',
            'p-0',
            'outline-none'
        ]
    },
    menuitem: {
        class: [
            // Space
            'first:mt-1 mt-2 last:mt-2'
        ]
    },
    content: ({ context }) => ({
        class: [
            //Shape
            ' rounded-lg',

            // Colors
            {
                'text-brand-950 dark:text-surface-0': !context.focused,
                'bg-gray-100 text-primary-500 dark:bg-surface-300/10 dark:text-primary-400': context.focused
            },

            // Transitions
            'transition-all',
            'duration-200',

            // States
            'hover:text-black dark:hover:text-primary-400',
            'hover:bg-gray-100 dark:hover:bg-surface-400/10'
        ]
    }),
    action: {
        class: [
            'relative',

            // Font
            'font-medium',

            // Flexbox
            'flex',
            'items-center',

            // Spacing
            'py-3',
            'px-3',

            // Misc
            'no-underline',
            'overflow-hidden',
            'cursor-pointer',
            'select-none'
        ]
    },
    icon: {
        class: [
            // Spacing
            'mr-2',
            'leading-6',
            'text-base'
        ]
    },
    label: {
        class: ['leading-6', 'text-md']
    },
    submenuheader: {
        class: [
            // Font
            'font-medium',
            'text-xs leading-6',

            // Spacing
            'mt-10',
            'py-0',
            'px-3',

            // Shape
            'rounded-tl-none',
            'rounded-tr-none',

            // Colors
            'bg-transparent dark:bg-surface-700',
            'text-brand-950/70 dark:text-surface-0/60'
        ]
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};