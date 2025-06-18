"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const isServiceActive = () => {
    return pathname === '/service' || pathname === '/graphic' || pathname === '/marketing'
  }

  return (
    <nav className='w-full fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4'>
      <div className="max-w-screen-2xl mx-auto">
        {/* Liquid Glass Container */}
        <div className="relative backdrop-blur-3xl bg-white/8 border border-white/20 rounded-full shadow-2xl shadow-black/25 px-8 py-4">
          {/* Multi-layer Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/3 to-white/10 rounded-full"></div>
          
          {/* Inner Glow */}
          <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-full"></div>
          
          {/* Content */}
          <div className="relative flex items-center justify-between h-12">
            {/* Brand Name - ทางซ้าย */}
            <div className="flex items-center gap-3 group">
              <Link href="/" className="text-white font-bold text-xl tracking-wide hover:scale-110 transition-all duration-300">
                <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent hover:from-white hover:to-white/80 transition-all duration-300 drop-shadow-lg">
                  BookGeek
                </span>
              </Link>
            </div>

            {/* Navigation Menu - ตรงกลาง (Desktop) */}
            <div className="hidden md:flex">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="gap-3">
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        href="/" 
                        className={cn(
                          "relative px-8 text-white/85 hover:text-white transition-all duration-300 text-sm font-medium overflow-hidden group min-w-[100px] text-center h-12 flex items-center justify-center",
                          "!rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/10 hover:scale-105",
                          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                          "hover:before:translate-x-[100%]",
                          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0",
                          isActive('/') && "!rounded-full bg-white/15 border border-white/25 shadow-lg shadow-white/10 scale-105 text-white font-semibold backdrop-blur-sm"
                        )}
                      >
                        <span className="relative z-10 drop-shadow-sm">หน้าแรก</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        href="/about" 
                        className={cn(
                          "relative px-8 text-white/85 hover:text-white transition-all duration-300 text-sm font-medium overflow-hidden group min-w-[120px] text-center h-12 flex items-center justify-center",
                          "!rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/10 hover:scale-105",
                          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                          "hover:before:translate-x-[100%]",
                          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0",
                          isActive('/about') && "!rounded-full bg-white/15 border border-white/25 shadow-lg shadow-white/10 scale-105 text-white font-semibold backdrop-blur-sm"
                        )}
                      >
                        <span className="relative z-10 drop-shadow-sm">เกี่ยวกับเรา</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem className="relative">
                    <NavigationMenuTrigger className={cn(
                      "relative px-8 text-white/85 hover:text-white transition-all duration-300 text-sm font-medium overflow-hidden group min-w-[120px] text-center h-12 flex items-center justify-center",
                      "!rounded-full !hover:bg-white/15 !hover:backdrop-blur-sm !hover:shadow-lg !hover:shadow-white/10 !hover:scale-105",
                      "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                      "hover:before:translate-x-[100%]",
                      "data-[state=open]:!rounded-full data-[state=open]:!bg-white/15 data-[state=open]:!border data-[state=open]:!border-white/25 data-[state=open]:!shadow-lg data-[state=open]:!shadow-white/10 data-[state=open]:!scale-105 data-[state=open]:!text-white data-[state=open]:!font-semibold data-[state=open]:!backdrop-blur-sm",
                      "data-[state=closed]:!text-white/85 data-[state=closed]:!bg-transparent data-[state=closed]:!border-0 data-[state=closed]:!shadow-none data-[state=closed]:!scale-100 data-[state=closed]:!font-medium",
                      "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0",
                      "!bg-transparent !border-0 !shadow-none",
                      isServiceActive() && "!rounded-full !bg-white/15 !border !border-white/25 !shadow-lg !shadow-white/10 !scale-105 !text-white !font-semibold !backdrop-blur-sm"
                    )}>
                      <span className="relative z-10 drop-shadow-sm">บริการของเรา</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute top-full left-1/2 transform -translate-x-1/2 !mt-6 z-50 !bg-transparent !border-0 !shadow-none !p-0">
                      {/* Enhanced Glass Dropdown */}
                      <div className="relative backdrop-blur-3xl bg-slate-800/80 border border-white/25 rounded-3xl shadow-2xl shadow-black/50 p-6 w-[280px]">
                        {/* Multi-layer Glass Effect with Dark Base */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/60 via-slate-800/80 to-slate-900/90 rounded-3xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-slate-800/40 to-slate-700/30 rounded-3xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/50 via-slate-800/30 to-black/40 rounded-3xl"></div>
                        
                        {/* White Glass Overlay */}
                        <div className="absolute inset-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent rounded-3xl"></div>
                        <div className="absolute inset-[2px] bg-gradient-to-t from-transparent to-white/10 rounded-3xl"></div>
                        
                        {/* Subtle Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent rounded-3xl animate-pulse"></div>
                        
                        <ul className="relative grid gap-3">
                          <li>
                            <Link 
                              href="/service" 
                              className={cn(
                                "block px-6 py-4 text-white/90 hover:text-white transition-all duration-300 text-sm relative overflow-hidden group",
                                "rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02] hover:border hover:border-white/25",
                                "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                                "hover:before:translate-x-[100%]",
                                "focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0",
                                isActive('/service') && "bg-white/15 border border-white/25 shadow-lg shadow-white/15 scale-[1.02] text-white font-semibold backdrop-blur-sm"
                              )}
                            >
                              <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                <span className="text-lg">💻</span>
                                <span>เทคโนโลยี</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/service#business" 
                              className={cn(
                                "block px-6 py-4 text-white/90 hover:text-white transition-all duration-300 text-sm relative overflow-hidden group",
                                "rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02] hover:border hover:border-white/25",
                                "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                                "hover:before:translate-x-[100%]",
                                "focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                              )}
                            >
                              <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                <span className="text-lg">📈</span>
                                <span>ธุรกิจ</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/service#design" 
                              className={cn(
                                "block px-6 py-4 text-white/90 hover:text-white transition-all duration-300 text-sm relative overflow-hidden group",
                                "rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02] hover:border hover:border-white/25",
                                "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                                "hover:before:translate-x-[100%]",
                                "focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                              )}
                            >
                              <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                <span className="text-lg">🎨</span>
                                <span>ดิจิทัล</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/service#finance" 
                              className={cn(
                                "block px-6 py-4 text-white/90 hover:text-white transition-all duration-300 text-sm relative overflow-hidden group",
                                "rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02] hover:border hover:border-white/25",
                                "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                                "hover:before:translate-x-[100%]",
                                "focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                              )}
                            >
                              <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                <span className="text-lg">💰</span>
                                <span>การเงิน</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/service#health" 
                              className={cn(
                                "block px-6 py-4 text-white/90 hover:text-white transition-all duration-300 text-sm relative overflow-hidden group",
                                "rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02] hover:border hover:border-white/25",
                                "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                                "hover:before:translate-x-[100%]",
                                "focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                              )}
                            >
                              <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                <span className="text-lg">🏥</span>
                                <span>สุขภาพ</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link 
                              href="/service#education" 
                              className={cn(
                                "block px-6 py-4 text-white/90 hover:text-white transition-all duration-300 text-sm relative overflow-hidden group",
                                "rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/15 hover:scale-[1.02] hover:border hover:border-white/25",
                                "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                                "hover:before:translate-x-[100%]",
                                "focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0"
                              )}
                            >
                              <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                <span className="text-lg">🎓</span>
                                <span>การศึกษา</span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        href="/contact" 
                        className={cn(
                          "relative px-8 text-white/85 hover:text-white transition-all duration-300 text-sm font-medium overflow-hidden group min-w-[100px] text-center h-12 flex items-center justify-center",
                          "!rounded-full hover:bg-white/15 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-white/10 hover:scale-105",
                          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700",
                          "hover:before:translate-x-[100%]",
                          "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0",
                          isActive('/contact') && "!rounded-full bg-white/15 border border-white/25 shadow-lg shadow-white/10 scale-105 text-white font-semibold backdrop-blur-sm"
                        )}
                      >
                        <span className="relative z-10 drop-shadow-sm">ติดต่อเรา</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button asChild className="relative overflow-hidden !rounded-full bg-white/15 hover:bg-white/20 border border-white/25 hover:border-white/30 shadow-lg hover:shadow-xl hover:shadow-white/10 hover:scale-110 transition-all duration-300 group backdrop-blur-sm !h-12 !px-8 !py-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0">
                <Link href="/login" className="relative z-10 font-medium text-white/90 hover:text-white flex items-center justify-center !h-12 !px-8 !py-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 focus:ring-offset-0">
                  <span className="relative drop-shadow-sm">
                    เข้าสู่ระบบ
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar