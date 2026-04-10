import { AlertCircle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-accent to-accent/90 text-white py-3 lg:py-3.5 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto flex items-center justify-center gap-3 text-sm lg:text-base">
        <AlertCircle className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <p className="leading-tight">
          <span className="font-medium">Emergency Response Available</span> - 24/7 Service
        </p>
      </div>
    </div>
  );
}