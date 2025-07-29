export const baseButtonClasses = 'relative rounded-full bg-neutral-700/30 p-3 backdrop-blur-md transition-transform duration-300 ease-in-out active:scale-95 z-50'
export const variantsButtonClasses = {
  open: 'rotate-0 ',
  closed: 'rotate-180 ',
}

export const baseBackdropClasses = 'fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md transition-opacity duration-300 ease-in-out z-40'
export const variantsBackdropClasses = {
  open: 'opacity-100 visible',
  closed: 'opacity-0 invisible',
}

export const baseDivListClasses = 'absolute w-[90%] left-1/2 top-20 flex flex-col gap-2 rounded-lg bg-neutral-700/30 p-3 text-white transition-all duration-300 ease-in-out'
export const variantsDivListClasses = {
  open: 'opacity-100 -translate-x-1/2 pointer-events-auto visible',
  closed: 'opacity-0 -translate-x-[100vw] pointer-events-none invisible',
}

export const baseLinkClasses = 'text-white text-lg p-3 transition-colors duration-300 rounded-lg hover:bg-blue-500 active:bg-blue-500'
