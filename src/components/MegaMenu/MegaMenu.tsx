'use client';

import * as React from 'react';

import { cn } from '../../utils';
// import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './Menu';
import NavbarItem from '@theme/NavbarItem';
import { ChevronDown } from 'lucide-react';

type LinkGroup = {
  heading: string;
  children: { title: string; href: string }[];
};

const linkItems: LinkGroup[] = [
  {
    heading: 'Products',
    children: [
      {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
      },
      {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
      },
      {
        title: 'Progress',
        href: '/docs/primitives/progress',
      },
    ],
  },
  {
    heading: 'APIs',
    children: [
      {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
      },
      {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
      },
      {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
      },
    ],
  },
];

const CustomTrigger = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} style={{ cursor: 'pointer', color: 'blue' }}>
    {props.children}
  </span>
));

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger asChild>
            <div className="p-0 mt-2 -mb-1">
              <a className="navbar__item navbar__link cursor-pointer ">Guide</a>
              <ChevronDown
                className="text-white relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="border-4 border-white grid gap-3 p-6 border-solid">
              <span className="text-white text-lg font-bold ">Products</span>
              <span className="w-full border-b border-[#00BCF0] border-solid border-t-transparent border-x-transparent" />
            </div>
            <ul className="border-4 border-white grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 ">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md list-none"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger asChild>
            <div className="p-0 mt-2 -mb-1">
              <a className="navbar__item navbar__link cursor-pointer ">Docs</a>
              <ChevronDown
                className="text-white relative top-[1px] h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {linkItems.map((linkGroup) => (
                <>
                  <div className="grid gap-3">
                    <span className="text-white text-lg font-bold -mb-2">
                      Products
                    </span>
                    <span className="w-full border-b-[0.5px] border-[#00BCF090] border-solid border-t-transparent border-x-transparent" />
                  </div>
                  {linkGroup.children.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-[#56BBEB] font-bold',
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
