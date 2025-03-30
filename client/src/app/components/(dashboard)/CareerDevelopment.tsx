"use client"
import React from 'react'
import {
    MessageSquare,
    BarChart2,
    Plus
  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
const CareerDevelopment = () => {
  return (
    <TabsContent value="career" className="mt-0 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Career Development</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="shadow-md border-indigo-100 dark:border-indigo-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                        <CardTitle>Resume Tracker</CardTitle>
                        <CardDescription className="text-indigo-100">Track your job applications</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
                              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Applications</p>
                              <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">24</p>
                            </div>
                            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800">
                              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Interviews</p>
                              <p className="text-3xl font-bold text-amber-600 dark:text-amber-300">8</p>
                            </div>
                            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800">
                              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Offers</p>
                              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-300">2</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-200 dark:border-slate-800">
                              <span>Recent Applications</span>
                              <span>Status</span>
                            </div>
                            <div className="space-y-3">
                              {[
                                { company: "Tech Solutions Inc.", role: "Senior Developer", status: "Interview" },
                                { company: "Global Innovations", role: "Product Manager", status: "Applied" },
                                { company: "Future Systems", role: "UX Designer", status: "Offer" },
                              ].map((app, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:shadow-md transition-all">
                                  <div>
                                    <p className="font-medium text-slate-900 dark:text-white">{app.company}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{app.role}</p>
                                  </div>
                                  <Badge
                                    className={
                                      app.status === "Interview"
                                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200"
                                        : app.status === "Offer"
                                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200"
                                          : "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200"
                                    }
                                  >
                                    {app.status}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                        <Button variant="outline" className="w-full border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                          <Plus className="mr-2 h-4 w-4" />
                          Add New Application
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="shadow-md border-indigo-100 dark:border-indigo-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                        <CardTitle>Skill Gap Insights</CardTitle>
                        <CardDescription className="text-indigo-100">Analyze and improve your professional skills</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">React</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">85%</span>
                              </div>
                              <Progress value={85} className="h-2 bg-slate-200 dark:bg-slate-700 [&>div]:bg-emerald-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">TypeScript</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">70%</span>
                              </div>
                              <Progress value={70} className="h-2 bg-slate-200 dark:bg-slate-700 [&>div]:bg-indigo-500" />
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">UI/UX Design</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">60%</span>
                              </div>
                              <Progress value={60} className="h-2 bg-slate-200 dark:bg-slate-700 [&>div]:bg-amber-500" />

                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Management</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400">75%</span>
                              </div>
                              <Progress value={75} className="h-2 bg-slate-200 dark:bg-slate-700 [&>div]:bg-indigo-500" />
                            </div>
                          </div>

                          <div className="pt-2 space-y-3">
                            <h4 className="font-medium text-slate-900 dark:text-white">Recommended Courses</h4>
                            <div className="space-y-2">
                              {["Advanced TypeScript Patterns", "UI/UX Fundamentals", "Agile Project Management"].map(
                                (course, i) => (
                                  <div key={i} className="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 hover:shadow-md transition-all">
                                    <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                      <BarChart2 className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{course}</span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                        <Button variant="outline" className="w-full border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Get Personalized Advice
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </section>
              </TabsContent>
  )
}

export default CareerDevelopment