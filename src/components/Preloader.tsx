import { useState, useEffect } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-accent animate-spin animate-reverse"></div>
        </div>
        
        <div className="animate-pulse">
          <h2 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
            Vaishnavi Soni
          </h2>
          <p className="text-muted-foreground text-sm">
            Loading amazing experiences...
          </p>
        </div>
        
        <div className="mt-8 flex justify-center gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-tertiary rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}