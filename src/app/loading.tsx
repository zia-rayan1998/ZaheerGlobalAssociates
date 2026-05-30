export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-royal-950">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-royal-800" />
          <div className="absolute inset-0 rounded-full border-4 border-t-emerald-400 animate-spin" />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-white">Zaheer Global Associates</p>
          <p className="text-sm text-white/60 mt-1">Loading...</p>
        </div>
      </div>
    </div>
  );
}
