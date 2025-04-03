
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 gradient-bg text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8" />
          <h1 className="text-2xl font-bold">PathFinder</h1>
        </div>
        <div className="text-sm opacity-90">Your AI Career Advisor</div>
      </div>
    </header>
  );
};

export default Header;
