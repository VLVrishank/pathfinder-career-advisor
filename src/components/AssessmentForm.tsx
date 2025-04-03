
import React, { useState } from 'react';
import { UserProfile } from '../utils/careerMatcher';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AssessmentFormProps {
  onSubmit: (profile: UserProfile) => void;
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ onSubmit }) => {
  const [interestsInput, setInterestsInput] = useState('');
  const [skillsInput, setSkillsInput] = useState('');
  const [academicsInput, setAcademicsInput] = useState('');
  const [valuesInput, setValuesInput] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const profile: UserProfile = {
      interests: interestsInput.split(',').map(i => i.trim()).filter(Boolean),
      skills: skillsInput.split(',').map(s => s.trim()).filter(Boolean),
      academics: academicsInput,
      values: valuesInput.split(',').map(v => v.trim()).filter(Boolean),
    };
    
    onSubmit(profile);
  };
  
  return (
    <Card className="w-full max-w-3xl mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-pathfinder-700">Discover Your Ideal Career Path</CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          Tell us about yourself, and we'll match you with career paths that align with your unique profile.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="interests">
              What are your interests? <span className="text-muted-foreground text-sm">(comma-separated)</span>
            </Label>
            <Textarea 
              id="interests"
              placeholder="e.g., technology, design, working with people, problem-solving, creativity"
              value={interestsInput}
              onChange={(e) => setInterestsInput(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="skills">
              What skills do you have? <span className="text-muted-foreground text-sm">(comma-separated)</span>
            </Label>
            <Textarea
              id="skills"
              placeholder="e.g., programming, communication, data analysis, design, writing"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="academics">What is your academic background?</Label>
            <Input
              id="academics"
              placeholder="e.g., Bachelor's in Computer Science, High School Diploma, Self-taught"
              value={academicsInput}
              onChange={(e) => setAcademicsInput(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="values">
              What do you value in a career? <span className="text-muted-foreground text-sm">(comma-separated)</span>
            </Label>
            <Textarea
              id="values"
              placeholder="e.g., work-life balance, creativity, helping others, financial stability, autonomy"
              value={valuesInput}
              onChange={(e) => setValuesInput(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
          
          <Button type="submit" className="w-full gradient-bg">
            Find My Career Paths
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AssessmentForm;
