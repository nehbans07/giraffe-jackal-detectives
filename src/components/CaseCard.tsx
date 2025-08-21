import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, FileText } from "lucide-react";

interface CaseCardProps {
  caseNumber: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  participants: number;
  evidenceCount: number;
  onViewCase: () => void;
}

export const CaseCard = ({ 
  caseNumber, 
  title, 
  description, 
  difficulty, 
  duration, 
  participants, 
  evidenceCount,
  onViewCase 
}: CaseCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-success text-success-foreground';
      case 'Intermediate': return 'bg-warning text-warning-foreground'; 
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card className="case-card h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="font-mono text-xs">
            {caseNumber}
          </Badge>
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {participants} people
          </div>
          <div className="flex items-center gap-1">
            <FileText className="h-3 w-3" />
            {evidenceCount} evidence
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onViewCase}
          className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
        >
          🔍 Investigate Case
        </Button>
      </CardFooter>
    </Card>
  );
};