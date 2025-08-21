import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MessageSquare, Mail, Users, BookOpen, MessageCircle, FileText } from "lucide-react";
import { Case, CaseEvidence } from "@/data/cases";

interface CaseViewerProps {
  caseData: Case;
  onBack: () => void;
}

export const CaseViewer = ({ caseData, onBack }: CaseViewerProps) => {
  const getEvidenceIcon = (type: CaseEvidence['type']) => {
    switch (type) {
      case 'message': return <MessageSquare className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'witness': return <Users className="h-4 w-4" />;
      case 'journal': return <BookOpen className="h-4 w-4" />;
      case 'conversation': return <MessageCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getEvidenceTypeLabel = (type: CaseEvidence['type']) => {
    switch (type) {
      case 'message': return 'Digital Evidence';
      case 'email': return 'Email Chain';
      case 'witness': return 'Witness Statement';
      case 'journal': return 'Personal Journal';
      case 'conversation': return 'Recorded Conversation';
      default: return 'Evidence';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cases
        </Button>
        
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="font-mono">
            {caseData.number}
          </Badge>
          <Badge className="bg-accent text-accent-foreground">
            {caseData.difficulty}
          </Badge>
          <span className="text-sm text-muted-foreground">
            📅 {caseData.duration} • 👥 {caseData.participants} people
          </span>
        </div>
        
        <h1 className="text-3xl font-bold mb-3">🕵️ {caseData.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {caseData.description}
        </p>
      </div>

      <Separator className="my-8" />

      {/* Evidence Section */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          📁 Case Evidence
        </h2>
        
        {caseData.evidence.map((evidence, index) => (
          <Card key={index} className="case-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {getEvidenceIcon(evidence.type)}
                {getEvidenceTypeLabel(evidence.type)}
              </CardTitle>
              <h3 className="font-semibold text-foreground">{evidence.title}</h3>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-normal">
                  {evidence.content}
                </pre>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-8" />

      {/* Detective Missions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          🎯 Detective Mission
        </h2>
        <p className="text-muted-foreground">
          Use your empathy skills to investigate these key questions:
        </p>
        
        {caseData.missions.map((mission, index) => (
          <Card key={index} className="case-card border-l-4 border-l-success">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="detective-badge">
                  {index + 1}
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  {mission.question}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Card className="bg-accent-soft border-accent">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">🔍 Investigation Tips:</h3>
            <ul className="text-sm space-y-1 text-accent-foreground/80">
              <li>• Look beyond what people are saying to what they might be feeling</li>
              <li>• Consider what each person really needs to feel safe and valued</li>
              <li>• Think about how fear or stress might be affecting their behavior</li>
              <li>• Imagine how a conversation could create understanding instead of conflict</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};