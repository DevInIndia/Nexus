"use client"
import React from 'react'
import { useState } from "react"
import {
  Send,
  LinkedinIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
const ContentAssistance = () => {
    
  const [emailContent, setEmailContent] = useState("")
  const [linkedinContent, setLinkedinContent] = useState("")
  return (
    <TabsContent value="content" className="mt-0 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Content Assistance</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="shadow-md border-indigo-100 dark:border-indigo-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r  from-indigo-700 to-indigo-400 text-white">
                        <CardTitle>Cold Email Generator</CardTitle>
                        <CardDescription className="text-indigo-100">Create personalized cold emails</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Recipient Industry</label>
                            <Input 
                              placeholder="e.g. Technology, Finance, Healthcare" 
                              className="border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Purpose</label>
                            <Input 
                              placeholder="e.g. Partnership, Sales, Introduction" 
                              className="border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Key Points</label>
                            <Textarea
                              placeholder="Enter key points to include in your email"
                              value={emailContent}
                              onChange={(e) => setEmailContent(e.target.value)}
                              rows={4}
                              className="border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                          <Send className="mr-2 h-4 w-4" />
                          Generate Email
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="shadow-md border-indigo-100 dark:border-indigo-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r  from-indigo-700 to-indigo-400 text-white">
                        <CardTitle>LinkedIn Post Suggestions</CardTitle>
                        <CardDescription className="text-indigo-100">Get content ideas for your professional network</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Topic</label>
                            <Input 
                              placeholder="e.g. Leadership, Industry Trends, Career Tips" 
                              className="border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tone</label>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="outline" size="sm" className="rounded-full bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300">
                                Professional
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-full">
                                Conversational
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-full">
                                Inspirational
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Draft</label>
                            <Textarea
                              placeholder="Start writing your LinkedIn post"
                              value={linkedinContent}
                              onChange={(e) => setLinkedinContent(e.target.value)}
                              rows={4}
                              className="border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                          <LinkedinIcon  className="mr-2 h-4 w-4" />
                          Generate Post Ideas
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
              </TabsContent>

  )
}

export default ContentAssistance