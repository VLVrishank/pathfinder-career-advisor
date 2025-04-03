
import React, { useState } from 'react';
import { Career } from '../data/careersData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CareerCardProps {
  career: Career;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getMatchScoreColor = (score?: number) => {
    if (!score) return 'bg-gray-300';
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-orange-400';
  };
  
  const getGrowthBadgeColor = (growth: string) => {
    switch (growth) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="w-full hover-scale">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <CardTitle className="text-xl text-pathfinder-700">{career.title}</CardTitle>
            <CardDescription className="mt-1">{career.averageSalary} avg. salary</CardDescription>
          </div>
          {career.matchScore !== undefined && (
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium">Match</div>
              <div 
                className={cn("h-10 w-10 rounded-full flex items-center justify-center text-white font-bold", 
                  getMatchScoreColor(career.matchScore)
                )}
              >
                {career.matchScore}%
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{career.description}</p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className={cn(getGrowthBadgeColor(career.growthOutlook))}>
            {career.growthOutlook.charAt(0).toUpperCase() + career.growthOutlook.slice(1)} Growth
          </Badge>
          {career.industries.slice(0, 3).map((industry, i) => (
            <Badge key={i} variant="secondary" className="bg-pathfinder-100 text-pathfinder-700">
              {industry}
            </Badge>
          ))}
        </div>
        
        {expanded && (
          <div className="space-y-4 pt-2 animate-fade-in">
            <div>
              <h4 className="font-medium text-pathfinder-700 mb-2">Education Requirements</h4>
              <p className="text-sm">{career.educationRequirements}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-pathfinder-700 mb-2">Required Skills</h4>
              <div className="flex flex-wrap gap-2">
                {career.requiredSkills.map((skill, i) => (
                  <Badge key={i} variant="outline">
                    {skill.name} ({skill.level})
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-pathfinder-700 mb-2">Recommended Skills</h4>
              <div className="flex flex-wrap gap-2">
                {career.recommendedSkills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="border-dashed">
                    {skill.name} ({skill.level})
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-pathfinder-700 mb-2">Learning Paths</h4>
              <div className="space-y-3">
                {career.learningPaths.map((path, i) => (
                  <div key={i} className="bg-secondary/50 p-3 rounded-md">
                    <h5 className="font-medium">{path.title}</h5>
                    <p className="text-sm mb-2">{path.description}</p>
                    <div className="space-y-1">
                      {path.resources.map((resource, j) => (
                        <a
                          key={j}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm flex items-center gap-1 text-pathfinder-600 hover:text-pathfinder-800"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {resource.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
