
import { Career } from '../data/careersData';

export interface UserProfile {
  interests: string[];
  skills: string[];
  academics: string;
  values: string[];
}

// This is a simplified matching algorithm. In a real-world application,
// this would be much more sophisticated, possibly using ML or more complex algorithms.
export const matchCareersToProfile = (careers: Career[], profile: UserProfile): Career[] => {
  // Create a deep copy of the careers to avoid mutating the original data
  const matchedCareers = JSON.parse(JSON.stringify(careers)) as Career[];
  
  // Calculate match scores
  matchedCareers.forEach(career => {
    let score = 0;
    
    // Match based on skills
    const careerSkillNames = [
      ...career.requiredSkills.map(s => s.name.toLowerCase()),
      ...career.recommendedSkills.map(s => s.name.toLowerCase())
    ];
    
    profile.skills.forEach(skill => {
      if (careerSkillNames.some(careerSkill => careerSkill.includes(skill.toLowerCase()))) {
        score += 20;
      }
    });
    
    // Match based on interests
    profile.interests.forEach(interest => {
      if (career.description.toLowerCase().includes(interest.toLowerCase())) {
        score += 15;
      }
      
      // Check if interest matches the career title
      if (career.title.toLowerCase().includes(interest.toLowerCase())) {
        score += 25;
      }
      
      // Check if interest matches industry
      if (career.industries.some(industry => industry.toLowerCase().includes(interest.toLowerCase()))) {
        score += 20;
      }
    });
    
    // Match based on values
    profile.values.forEach(value => {
      if (career.description.toLowerCase().includes(value.toLowerCase())) {
        score += 10;
      }
    });
    
    // Education match (simplified)
    if (career.educationRequirements.toLowerCase().includes(profile.academics.toLowerCase())) {
      score += 15;
    }
    
    // Cap the score at 100
    career.matchScore = Math.min(Math.round(score), 100);
  });
  
  // Sort by match score (descending)
  return matchedCareers.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
};
