export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1918] via-[#0F0E0D] to-[#15130F] p-4">
      {children}
    </div>
  );
}
