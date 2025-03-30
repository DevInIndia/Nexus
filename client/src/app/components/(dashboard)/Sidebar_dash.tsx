"use client"
import React from 'react'
import { Inbox,Layers,Settings,Briefcase,ChevronRight } from 'lucide-react'
import Image from 'next/image';
import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarHeader,
    SidebarFooter,
    SidebarMenuBadge,
  } from "@/components/ui/sidebar"
  import { Button } from '@/components/ui/button'
const Sidebar_dash = () => {
  return (
    <Sidebar className="border-r border-indigo-100 dark:border-indigo-900 bg-white dark:bg-slate-950">
          <SidebarHeader className="flex h-16 items-center border-b px-6 bg-indigo-50 dark:bg-indigo-950">
            <h1 className="text-xl flex items-center font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"><Image src="/favicon.png" alt="Logo" width={32} height={32} /> NEXUS PULSE</h1>
          </SidebarHeader>
          <SidebarContent>
            <div className="px-3 py-4">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 px-3">MAIN MENU</p>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="#" className="flex items-center rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 p-3 transition-all">
                      <Inbox className="mr-3 h-5 w-5" />
                      <span className="font-medium">Inbox</span>
                      <SidebarMenuBadge className="ml-auto bg-indigo-600 text-white">12</SidebarMenuBadge>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center rounded-lg p-3 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                      <Layers className="mr-3 h-5 w-5" />
                      <span className="font-medium">Content</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center rounded-lg p-3 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                      <Briefcase className="mr-3 h-5 w-5" />
                      <span className="font-medium">Career</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center rounded-lg p-3 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
                      <Settings className="mr-3 h-5 w-5" />
                      <span className="font-medium">Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
          <SidebarFooter className="border-t p-4 border-indigo-100 dark:border-indigo-900">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <span className="text-sm font-bold">JD</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Shashank</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Shashank@example.com</p>
              </div>
              <Button variant="ghost" size="icon" className="ml-auto rounded-full h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

  )
}

export default Sidebar_dash