import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import iconCheck from '../assets/icon-check.svg';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className="border-border ring-offset-background focus-visible:ring-ring data-[state=checked]:text-primary-foreground peer size-5 shrink-0 rounded-full border from-[#55ddff] to-[#c058f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-br md:size-6"
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <img src={iconCheck} alt="check" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
