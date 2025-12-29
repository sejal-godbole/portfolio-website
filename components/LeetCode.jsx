"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Trophy, Activity, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- CONFIGURATION ---
const LEETCODE_USERNAME = "sejal_godbole"; // Double check this username!

// Default data to show if API fails or while loading (Editable)
const FALLBACK_DATA = {
  totalSolved: 120, // Edit these numbers manually if needed
  ranking: 154320,
  easySolved: 50,
  totalEasy: 838,
  mediumSolved: 60,
  totalMedium: 1756,
  hardSolved: 10,
  totalHard: 765,
  acceptanceRate: 64.5,
};

export default function LeetCode() {
  const [stats, setStats] = useState(FALLBACK_DATA);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`);
        if (!res.ok) throw new Error("API response not ok");
        
        const data = await res.json();
        
        if (data.status === "success") {
          setStats({
            totalSolved: data.totalSolved,
            ranking: data.ranking,
            easySolved: data.easySolved,
            totalEasy: data.totalEasy,
            mediumSolved: data.mediumSolved,
            totalMedium: data.totalMedium,
            hardSolved: data.hardSolved,
            totalHard: data.totalHard,
            acceptanceRate: data.acceptanceRate,
          });
        } else {
            console.warn("LeetCode API returned error:", data.message);
            setIsError(true);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
        setIsError(true);
      }
    };

    fetchStats();
  }, []);

  return (
    <section id="leetcode" className="py-20 bg-foreground/90 text-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
            <div className="p-3 rounded-full bg-background/10 mb-4 backdrop-blur-sm border border-background/20">
                <Code2 className="h-8 w-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Coding Profile
            </h2>
            <div className="w-20 h-1.5 bg-background/80 rounded-full mb-6" />
            <p className="max-w-[700px] text-background/70 md:text-xl">
                My problem solving statistics on LeetCode.
            </p>
        </div>

        {/* Dashboard Card */}
        <div className="max-w-4xl mx-auto">
            <Card className="bg-background/5 border-background/10 backdrop-blur-sm overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between border-b border-background/10 pb-6">
                    <div>
                        <CardTitle className="text-2xl text-background">LeetCode Stats</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-background/60 text-sm">Username: @{LEETCODE_USERNAME}</p>
                            {isError && (
                                <Badge variant="destructive" className="text-[10px] h-5">
                                    Using Offline Data
                                </Badge>
                            )}
                        </div>
                    </div>
                    <Button asChild variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors">
                        <Link href={`https://leetcode.com/${LEETCODE_USERNAME}`} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" /> View Profile
                        </Link>
                    </Button>
                </CardHeader>

                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    
                    {/* Column 1: Total Solved Circle */}
                    <div className="flex flex-col items-center justify-center p-6 bg-background/5 rounded-2xl border border-background/5">
                        <div className="relative flex items-center justify-center h-40 w-40 rounded-full border-4 border-yellow-500/20 mb-4">
                            <Trophy className="h-12 w-12 text-yellow-500 absolute top-4 right-4 opacity-20" />
                            <div className="text-center z-10">
                                <span className="text-5xl font-bold text-background block">{stats.totalSolved}</span>
                                <span className="text-xs text-background/60 uppercase tracking-widest">Solved</span>
                            </div>
                        </div>
                        <Badge variant="outline" className="text-background/80 border-background/20 bg-background/5 px-4 py-1">
                            Rank: {stats.ranking.toLocaleString()}
                        </Badge>
                    </div>

                    {/* Column 2: Progress Bars */}
                    <div className="col-span-2 space-y-8 flex flex-col justify-center">
                        
                        {/* Easy */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-teal-400">Easy</span>
                                <span className="text-background/80">{stats.easySolved} <span className="text-background/40">/ {stats.totalEasy}</span></span>
                            </div>
                            <div className="h-3 w-full bg-background/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-teal-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                                    style={{ width: `${(stats.easySolved / (stats.totalEasy || 1)) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Medium */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-yellow-400">Medium</span>
                                <span className="text-background/80">{stats.mediumSolved} <span className="text-background/40">/ {stats.totalMedium}</span></span>
                            </div>
                            <div className="h-3 w-full bg-background/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                                    style={{ width: `${(stats.mediumSolved / (stats.totalMedium || 1)) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Hard */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-rose-400">Hard</span>
                                <span className="text-background/80">{stats.hardSolved} <span className="text-background/40">/ {stats.totalHard}</span></span>
                            </div>
                            <div className="h-3 w-full bg-background/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-rose-400 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(251,113,133,0.5)]"
                                    style={{ width: `${(stats.hardSolved / (stats.totalHard || 1)) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Acceptance Rate */}
                        <div className="pt-4 flex items-center justify-between border-t border-background/10 mt-2">
                            <div className="flex items-center gap-2">
                                <Activity className="h-4 w-4 text-blue-400" />
                                <span className="text-sm text-background/80">Acceptance Rate</span>
                            </div>
                            <span className="text-lg font-bold text-blue-400">{stats.acceptanceRate}%</span>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}