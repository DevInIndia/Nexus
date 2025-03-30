"use client"
import React from 'react'
import {
    Mail,
    Star,
    Filter,
  } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const EmailIntelligence = () => {
  return (
    <TabsContent value="email" className="mt-0 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Email Intelligence</h2>
                  <Card className="shadow-md border-indigo-100 dark:border-indigo-900 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-indigo-700 to-indigo-400 text-white">
                      <CardTitle>Smart Inbox</CardTitle>
                      <CardDescription className="text-indigo-100">Manage your emails efficiently</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <Tabs defaultValue="important">
                        <TabsList className="mb-6 justify-start bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                          <TabsTrigger value="important" className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                            <Mail className="mr-2 h-4 w-4" />
                            Important
                          </TabsTrigger>
                          <TabsTrigger value="starred" className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                            <Star className="mr-2 h-4 w-4" />
                            Starred
                          </TabsTrigger>
                          <TabsTrigger value="filtered" className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700">
                            <Filter className="mr-2 h-4 w-4" />
                            Filtered
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="important">
                          <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="flex items-start gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all">
                                <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center shrink-0 text-red-600 dark:text-indigo-300">
                                  <Mail className="h-5 w-5" />
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Project Update</h4>
                                    <Badge className="bg-indigo-600">Important</Badge>
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Latest updates on the dashboard project from the team...
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">Today, 10:30 AM</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="starred">
                          <div className="space-y-4">
                            {[1, 2].map((i) => (
                              <div key={i} className="flex items-start gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all">
                                <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0 text-amber-600 dark:text-amber-300">
                                  <Star className="h-5 w-5" />
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Interview Schedule</h4>
                                    <Badge variant="outline" className="border-amber-500 text-amber-600 dark:text-amber-400">Starred</Badge>
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Your interview is scheduled for next Monday at 2 PM...
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">Yesterday, 4:15 PM</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="filtered">
                          <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="flex items-start gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all">
                                <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 text-slate-600 dark:text-slate-300">
                                  <Filter className="h-5 w-5" />
                                </div>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Newsletter</h4>
                                    <Badge variant="secondary" className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">Filtered</Badge>
                                  </div>
                                  <p className="text-sm text-slate-600 dark:text-slate-300">
                                    Weekly tech newsletter with the latest updates...
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">2 days ago</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </section>
              </TabsContent>
  )
}

export default EmailIntelligence