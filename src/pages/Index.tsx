
import React, { useState } from 'react';
import Header from '../components/Header';
import AssessmentForm from '../components/AssessmentForm';
import CareerResults from '../components/CareerResults';
import { UserProfile, matchCareersToProfile } from '../utils/careerMatcher';
import careersData, { Career } from '../data/careersData';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [matchedCareers, setMatchedCareers] = useState<Career[] | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  const handleAssessmentSubmit = (profile: UserProfile) => {
    try {
      // Match careers to the user's profile
      const results = matchCareersToProfile(careersData, profile);
      
      // Update state
      setMatchedCareers(results);
      setShowResults(true);
      
      toast({
        title: "Assessment Complete",
        description: `We've found ${results.length} career paths that match your profile!`,
      });
    } catch (error) {
      console.error("Error matching careers:", error);
      toast({
        title: "Error",
        description: "There was an error processing your assessment. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const handleBackClick = () => {
    setShowResults(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 px-4 md:py-12">
        <div className="container mx-auto">
          {showResults && matchedCareers ? (
            <CareerResults 
              careers={matchedCareers} 
              onBackClick={handleBackClick} 
            />
          ) : (
            <AssessmentForm onSubmit={handleAssessmentSubmit} />
          )}
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>PathFinder AI Career Advisor • Find your perfect career path</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
