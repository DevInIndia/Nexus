"use client"
import {
  Briefcase,
  Mail,
  MessageSquare,
} from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"

import EmailIntelligence from "./EmailIntelligence"
import CareerDevelopment from "./CareerDevelopment"
import ContentAssistance from "./ContentAssistance"
import Sidebar_dash from "./Sidebar_dash"

export default function Dashboard() {

  return (
    <>
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-900 dark:to-indigo-950">
        <Sidebar_dash/>
        <div className="flex-1 overflow-auto">
          <header className="py-6 px-8 border-b border-indigo-100 dark:border-indigo-900 bg-gradient-to-r from-indigo-700 to-purple-700 dark:bg-slate-950">
            <h1 className="text-2xl font-bold text-white dark:text-slate-900">Welcome back, Shashank!</h1>
            <p className="text-white dark:text-gray-500">Manage your career and professional content in one place</p>
          </header>
          
          <main className="p-8">
            <Tabs defaultValue="email" className="min-w-[73.5vw] ">
              <div className="mb-8">
                <TabsList className="bg-white w-full dark:bg-slate-900 p-1 rounded-xl shadow-sm border border-indigo-100 dark:border-indigo-900">
                  <TabsTrigger value="email" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white hover:bg-purple-400 hover:text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Intelligence
                  </TabsTrigger>
                  <TabsTrigger value="content" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white hover:bg-purple-400 hover:text-white">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Content Assistance
                  </TabsTrigger>
                  <TabsTrigger value="career" className="rounded-lg data-[state=active]:bg-indigo-600 data-[state=active]:text-white hover:bg-purple-400 hover:text-white">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Career Development
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Email Intelligence Tab */}
              <EmailIntelligence/>
              {/* Content Assistance Tab */}
              <ContentAssistance/>
              {/* Career Development Tab */}
              <CareerDevelopment/>
              
            </Tabs>
          </main>
        </div>
      </div>
    </SidebarProvider>
    </>
  )
}