export default {
    root: ({ props, context, parent }) => {
        var _a;
        return {
          class: [
            // Font
            'font-sans leading-6',
            // Flex
            { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
            // Spacing
            'm-0',
            {
              'py-2.5 px-4 text-sm ': props.size == 'large',
              'py-2 px-2': props.size == 'small',
              'py-1 px-2': props.size == null
            },
            // Colors
            'text-brand-950 dark:text-surface-0',
            'placeholder:text-brand-950/70 dark:placeholder:text-surface-500',
            'bg-gray-50 dark:bg-surface-900',
            'shadow-none',
            { 'ring-1 ring-inset ring-offset-0': parent.instance.$name !== 'InputGroup' },
            { 'ring-gray-200 dark:ring-surface-700': !props.invalid },
            // Invalid State
            { 'ring-red-500 dark:ring-red-400': props.invalid },
            // Shape
            { 'rounded-none': parent.instance.$name !== 'InputGroup' },
            { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
            { 'border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600': parent.instance.$name == 'InputGroup' },
            { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },
            'appearance-none',
            // Interactions
            {
              ' transition-all outline-none hover:ring-brand-700 hover:ring-2  hover:bg-brand-50 focus:ring-brand-950 focus:outline-2 focus:outline-offset-2 focus:ring-2 dark:focus:ring-primary-400 focus:ring-2': !context.disabled,
              ' transition-all opacity-60 select-none pointer-events-none cursor-default': context.disabled
            },
            // Filled State *for FloatLabel
            { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == 'FloatLabel' && context.filled }
          ]
        };
    }
}

