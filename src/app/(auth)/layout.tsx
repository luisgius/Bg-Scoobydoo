export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-burgundy-950 via-[#0f0a15] to-[#1a1228] p-4">
      {children}
    </div>
  );
}
