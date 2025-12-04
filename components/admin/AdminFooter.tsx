export default function AdminFooter() {
  return (
    <footer className="w-full py-4  bg-white text-center text-sm text-gray-600">
      <p className="flex items-center justify-center gap-1">
        <span>© {new Date().getFullYear()} TsbVision News. All rights reserved.</span>
        <span className="text-gray-400">|</span>
        <span>
          Built with <span className="text-red-500">♥</span> by <strong>Coursefiction</strong>
        </span>
      </p>
    </footer>
  );
}
