import { Bell, HeartPulse, MessageCircle, Send } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="mx-auto flex h-56 w-32 flex-col rounded-[1.75rem] border-4 border-ink-900 bg-white p-3 shadow-lg dark:border-white/80 dark:bg-ink-900">
      <div className="mx-auto h-1.5 w-10 rounded-full bg-ink-900/20 dark:bg-white/20" />
      <div className="mt-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-200">
          <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <div className="h-2 w-14 rounded-full bg-ink-900/10 dark:bg-white/20" />
      </div>
      <div className="mt-4 h-16 w-full rounded-xl bg-brand-50 dark:bg-white/5" />
      <div className="mt-3 space-y-2">
        <div className="h-2 w-full rounded-full bg-ink-900/10 dark:bg-white/15" />
        <div className="h-2 w-2/3 rounded-full bg-ink-900/10 dark:bg-white/15" />
      </div>
    </div>
  );
}

export function ChatMockup() {
  return (
    <div className="mx-auto flex h-56 w-full max-w-[220px] flex-col justify-between rounded-2xl bg-white p-4 shadow-lg dark:bg-ink-900">
      <div className="flex items-center gap-2 border-b border-ink-900/5 pb-3 dark:border-white/10">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink-900 dark:text-white">Dr. Thomas</p>
          <p className="text-[10px] text-ink-500 dark:text-white/60">Online</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 py-3">
        <div className="self-start rounded-xl rounded-bl-sm bg-ink-900/5 px-3 py-2 text-[10px] text-ink-700 dark:bg-white/10 dark:text-white/80">
          How are you feeling today?
        </div>
        <div className="self-end rounded-xl rounded-br-sm bg-brand-500 px-3 py-2 text-[10px] text-white">
          Much better, thank you!
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-ink-900/5 px-3 py-2 dark:bg-white/10">
        <div className="h-2 flex-1 rounded-full bg-ink-900/10 dark:bg-white/15" />
        <Send className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
      </div>
    </div>
  );
}

export function DashboardMockup() {
  const bars = [40, 65, 45, 80, 55, 90, 70];
  return (
    <div className="flex h-40 w-full items-end justify-between gap-2 rounded-2xl bg-white p-5 shadow-lg dark:bg-ink-900">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-full bg-gradient-to-t from-brand-500 to-brand-300"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function PrescriptionIcon() {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-200">
      <Bell className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
