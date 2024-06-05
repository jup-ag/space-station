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
import { docsLinkItems, guidesLinkItems } from '../../../static/data/megaMenu';

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
            <ul className="flex flex-col flex-wrap w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] max-h-[300px]">
              {guidesLinkItems.map((linkGroup) => (
                <>
                  <div className="grid gap-3">
                    <span className="text-white text-lg font-bold -mb-2">
                      {linkGroup.heading}
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
            <ul className="flex flex-col flex-wrap w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px] max-h-[600px]">
              {docsLinkItems.map((linkGroup) => (
                <>
                  <div className="grid gap-3">
                    <span className="text-white text-lg font-bold -mb-2">
                      {linkGroup.heading}
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
