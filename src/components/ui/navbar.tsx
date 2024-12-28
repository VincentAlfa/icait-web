'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './navigation-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './sheet';
import { Button } from './button';
import { Menu } from 'lucide-react';

const navigationItems = [
  { title: 'About', href: '#about' },
  { title: 'Speakers', href: '#speaker' },
  { title: 'Call for Paper', href: '#callforpaper' },
  { title: 'For Author', href: '#forauthor' },
  { title: 'Committee', href: '#committee' },
  { title: 'Registration', href: '#registration' },
  { title: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-san-juan-800 text-slate-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4'>
        <Link href='#hero' className='text-3xl font-bold uppercase'>
          ICAIT 2025
        </Link>
        <div className='hidden lg:block'>
          <NavigationMenu className='justify-start'>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        navigationMenuTriggerStyle() +
                        ' bg-san-juan-600/0 text-sm text-slate-50 hover:bg-san-juan-600 hover:text-slate-50'
                      }
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild className='lg:hidden'>
            <Button
              variant='ghost'
              className='hover: px-0 text-slate-50 hover:bg-white/10 hover:text-slate-50 [&_svg]:size-8'
            >
              <Menu />
              <span className='sr-only'>Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='left'
            className='border-0 bg-san-juan-800 text-slate-50'
          >
            <SheetTitle className='-z-50 hidden opacity-0'></SheetTitle>
            <div className='grid gap-4 py-6'>
              {navigationItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className='hover: text-sm font-medium hover:text-slate-50/90'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
