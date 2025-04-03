
import React from 'react';
import { Career } from '../data/careersData';
import CareerCard from './CareerCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface CareerResultsProps {
  careers: Career[];
  onBackClick: () => void;
}

const CareerResults: React.FC<CareerResultsProps> = ({ careers, onBackClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in space-y-6">
      <div className="flex flex-col items-center text-center mb-6">
        <h2 className="text-2xl font-bold text-pathfinder-700 mb-2">Your Career Matches</h2>
        <p className="text-muted-foreground">
          Based on your profile, we've identified these career paths that align with your interests, skills, and values.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {careers.map((career) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
      
      <div className="flex justify-center pt-4">
        <Button variant="outline" className="flex items-center gap-2" onClick={onBackClick}>
          <ArrowLeft className="h-4 w-4" />
          Back to Assessment
        </Button>
      </div>
    </div>
  );
};

export default CareerResults;
