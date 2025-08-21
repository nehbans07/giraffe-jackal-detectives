import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseCard } from "@/components/CaseCard";
import { CaseViewer } from "@/components/CaseViewer";
import { cases, Case } from "@/data/cases";
import { Search, Heart, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-detective.jpg";
import communicationImage from "@/assets/communication-cases.jpg";

const Index = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);

  if (selectedCase) {
    return (
      <CaseViewer 
        caseData={selectedCase} 
        onBack={() => setSelectedCase(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage}
            alt="Detective investigating empathy"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="detective-badge mb-4 animate-fade-in [animation-delay:0.2s]">🦒🐺 Detective Academy</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in [animation-delay:0.4s]">
            Giraffe-Jackal Detective Agency
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in [animation-delay:0.6s]">
            Master the art of non-violent communication through real-world case studies. 
            Investigate conflicts, uncover hidden feelings, and learn to build bridges instead of walls.
          </p>
          <Button 
            onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 animate-fade-in [animation-delay:0.8s] hover-scale"
          >
            🔍 Start Investigating
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="case-card text-center animate-fade-in [animation-delay:0.2s] hover-scale">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-2xl font-bold mb-2">{cases.length}</h3>
                <p className="text-muted-foreground">Real Case Studies</p>
              </CardContent>
            </Card>
            
            <Card className="case-card text-center animate-fade-in [animation-delay:0.4s] hover-scale">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">💝</div>
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Empathy Focused</p>
              </CardContent>
            </Card>
            
            <Card className="case-card text-center animate-fade-in [animation-delay:0.6s] hover-scale">
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-2xl font-bold mb-2">Practice</h3>
                <p className="text-muted-foreground">Safe Learning Space</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Why Practice with Case Studies?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn non-violent communication through engaging, real-world scenarios that help you develop empathy and conflict resolution skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in [animation-delay:0.2s]">
              <img 
                src={communicationImage}
                alt="People practicing empathetic communication"
                className="rounded-lg shadow-lg w-full hover-scale"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4 animate-fade-in [animation-delay:0.3s]">
                <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                  <Search className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Investigate Real Conflicts</h3>
                  <p className="text-muted-foreground">
                    Analyze authentic scenarios from roommate disputes to workplace tension, 
                    learning to see beyond surface-level arguments.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in [animation-delay:0.5s]">
                <div className="bg-accent text-accent-foreground rounded-full p-3 flex-shrink-0">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Uncover Hidden Feelings</h3>
                  <p className="text-muted-foreground">
                    Practice identifying the emotions and needs beneath defensive behavior, 
                    building your emotional intelligence.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in [animation-delay:0.7s]">
                <div className="bg-success text-success-foreground rounded-full p-3 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Practice Compassionate Communication</h3>
                  <p className="text-muted-foreground">
                    Learn to transform conflicts into opportunities for deeper understanding 
                    and stronger relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">🗂️ Case Files</h2>
            <p className="text-xl text-muted-foreground">
              Choose a case to begin your empathy investigation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseData, index) => (
              <div 
                key={caseData.id}
                className={`animate-fade-in hover-scale`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CaseCard
                  caseNumber={caseData.number}
                  title={caseData.title}
                  description={caseData.description}
                  difficulty={caseData.difficulty}
                  duration={caseData.duration}
                  participants={caseData.participants}
                  evidenceCount={caseData.evidence.length}
                  onViewCase={() => setSelectedCase(caseData)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">🦒🐺 Giraffe-Jackal Detective Agency</h3>
          <p className="text-primary-foreground/80 mb-6">
            Solving conflicts through understanding, one case at a time.
          </p>
          <div className="flex justify-center gap-6 text-sm flex-wrap">
            <span className="hover-scale cursor-default">🎯 Practice Non-Violent Communication</span>
            <span className="hover-scale cursor-default">💝 Build Stronger Relationships</span>
            <span className="hover-scale cursor-default">🌟 Develop Emotional Intelligence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;