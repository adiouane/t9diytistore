'use client'
import React from 'react'

import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import {  usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import { Footer, Media } from '../../../../payload/payload-types'
import Link from 'next/link'
import { Button } from '../../Button'

import classes from './index.module.scss'


const FooterComponent = (
    { footer }: { footer: Footer }
) => {
    const  pathname  = usePathname();
    const navItems = footer?.navItems || [];
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
        
        <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
        </Gutter>
        <div className={classes.footer}>
            <Gutter>
                <div className={classes.wrap}>
                    <Link href="/">
                            <Image
                                src="/logo-white.svg"
                                alt="Logo"
                                width={200}
                                height={50}
                            />
                    </Link>
                  
                </div>
                
                <div>
                    <ul className={classes.socialLinks}>
                        <li className={classes.socialLinks}>
                            <Image className={classes.socialLinkItem} src="/admin ui/footer/facebook.svg" alt="Facebook" width={24} height={24} />
                            <Image className={classes.socialLinkItem} src="/admin ui/footer/twitter.svg" alt="Twitter" width={24} height={24} />
                            <Image className={classes.socialLinkItem} src="/admin ui/footer/instagram.svg" alt="Instagram" width={24} height={24} />
                        </li>
                      
                    </ul>
                </div>
                <p className={classes.copyRight}>
                        &copy; {new Date().getFullYear()} All rights reserved
                </p>
            </Gutter>
        </div>
    </footer>
  )
}

export default FooterComponent
