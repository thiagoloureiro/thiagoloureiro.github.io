export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <svg
        className="w-full h-full opacity-5" // Changed opacity from 10 to 5
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  )
}

