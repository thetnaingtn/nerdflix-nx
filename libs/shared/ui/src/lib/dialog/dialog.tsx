'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { twMerge as tm } from 'tailwind-merge';
import Xmark from '../icons/xmark';

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogPortal = ({
  className,
  children,
  ...restProps
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={className} {...restProps}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...restProps }, ref) => (
  <DialogPrimitive.Overlay
    className={tm(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in',
      className
    )}
    {...restProps}
    ref={ref}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...restProps }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={tm(
        'fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0',
        'dark:bg-slate-900',
        className
      )}
      {...restProps}
    >
      {children}
      <DialogPrimitive.Close
        data-testid="dialog-close"
        className="absolute right-4 top-4 z-20 rounded-full bg-neutral-800 p-1.5 opacity-70 ring-offset-slate-900 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-0 disabled:pointer-events-none data-[state=open]:bg-slate-800 dark:bg-neutral-800 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800"
      >
        <Xmark />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = ({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={tm(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...restProps}
  />
);
DialogHeader.displayName = 'DialogHeader';

export const DialogFooter = ({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={tm(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...restProps}
  />
);
DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...restProps }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={tm(
      'text-lg font-semibold text-slate-900',
      'dark:text-slate-50',
      className
    )}
    {...restProps}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...restProps }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={tm('text-sm text-slate-500', 'dark:text-slate-400', className)}
    {...restProps}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
