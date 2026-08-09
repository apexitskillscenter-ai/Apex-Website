import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="font-display text-8xl font-bold text-primary">
        404
      </div>
      <h1 className="mt-4 font-display text-2xl font-semibold">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Back to Home
        </Link>
        <Link
          href="/courses"
          className="inline-flex h-11 items-center rounded-lg border border-border px-6 text-sm font-medium hover:bg-secondary"
        >
          View Courses
        </Link>
      </div>
    </div>
  );
}
