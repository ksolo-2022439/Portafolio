export default function SectionDivider() {
  return (
    <div className="relative w-full flex items-center justify-center py-6 overflow-hidden select-none pointer-events-none">
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-sky-200" />
        <div className="mx-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-sky-100 shadow-2xs">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
          <div className="w-2 h-2 rounded-full bg-sky-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-sky-200 via-gray-200 to-transparent" />
      </div>
    </div>
  );
}
