import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { GithubIcon } from "@/components/icons/github-icon";
import { BrandMark } from "@/components/layout/app-shell";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const metrics = [
  { value: "3x", label: "faster review cycles" },
  { value: "24/7", label: "AI coding support" },
  { value: "99.9%", label: "GitHub workflow uptime" },
];

const features = [
  {
    icon: Workflow,
    title: "Repository-aware workflows",
    description: "Context from your repos, branches, and pull requests moves with every task.",
  },
  {
    icon: ShieldCheck,
    title: "Safe source control",
    description: "Every action is grounded in the GitHub flow your team already trusts.",
  },
  {
    icon: BarChart3,
    title: "Actionable insights",
    description: "See pulse checks, review status, and delivery health in one place.",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_oklch(from_var(--primary)_l_c_h/0.14),_transparent_45%)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <BrandMark />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Sign in
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
              <Sparkles className="size-4 text-primary" />
              Built for modern engineering teams
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-foreground sm:text-5xl lg:text-6xl">
                Turn GitHub activity into a smoother product workflow.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                DevPilot helps teams review pull requests, track delivery health, and dispatch AI-assisted coding work without leaving their GitHub-centered workflow.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90",
                )}
              >
                <GithubIcon className="size-4" />
                Continue with GitHub
              </Link>
              <Link
                href="/login?next=/dashboard"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex items-center justify-center gap-2",
                )}
              >
                Explore workspace
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-border bg-card/60 px-4 py-3">
                  <div className="text-2xl font-semibold tracking-tight text-foreground">{metric.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden border-border/80 bg-card/85 p-1 shadow-xl shadow-foreground/5 backdrop-blur-xl">
              <div className="rounded-[1.75rem] border border-border/70 bg-background p-4">
                <CardHeader className="px-0 pb-4 pt-2">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Active sprint</p>
                      <CardTitle className="mt-1 text-xl">GitHub delivery overview</CardTitle>
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      on track
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-0">
                  <div className="rounded-2xl border border-border bg-card p-3">
                    <div className="mb-3 flex items-center justify-between text-sm text-muted-foreground">
                      <span>PR readiness score</span>
                      <span className="font-medium text-foreground">92%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-muted">
                      <div className="h-full w-[92%] rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "Ship sprint", status: "Ready to merge" },
                      { name: "Docs cleanup", status: "Reviewing" },
                      { name: "API health", status: "Stable" },
                    ].map((item) => (
                      <div key={item.name} className="flex items-center justify-between rounded-2xl border border-border bg-card px-3 py-2.5">
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">GitHub sync enabled</p>
                        </div>
                        <span className="rounded-full bg-muted px-2 py-1 text-[11px] font-medium text-foreground/80">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Why DevPilot</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
              Keep engineering work moving without context switching.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="h-full border-border/80 bg-card/80">
                <CardHeader className="space-y-4">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
