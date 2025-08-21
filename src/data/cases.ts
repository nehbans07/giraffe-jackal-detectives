export interface CaseEvidence {
  type: 'message' | 'email' | 'witness' | 'journal' | 'conversation';
  title: string;
  content: string;
  timestamp?: string;
}

export interface CaseMission {
  question: string;
  type: 'feelings' | 'needs' | 'conversation' | 'solution';
}

export interface Case {
  id: string;
  number: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  participants: number;
  evidence: CaseEvidence[];
  missions: CaseMission[];
}

export const cases: Case[] = [
  {
    id: 'silent-treatment',
    number: 'ST-2024-001',
    title: 'The Silent Treatment Mystery',
    description: 'Roommates Ananya & Priya stop communicating after a kitchen cleaning dispute escalates into silence and passive-aggressive behavior.',
    difficulty: 'Beginner',
    duration: '15 min',
    participants: 2,
    evidence: [
      {
        type: 'message',
        title: 'WhatsApp Chat - Roommates Ananya & Priya',
        content: `Ananya: Can you please clean the kitchen after cooking?
Priya: 👍
[3 days later]
Ananya: Kitchen is still dirty. This is really frustrating.
[Message delivered, not read]
[5 days of no messages]
Ananya: Are we not talking now? What's going on?
[Message delivered, not read]`
      },
      {
        type: 'witness',
        title: 'Witness Statement - Mutual Friend Kavya',
        content: `"I went to their flat last week. The tension was thick - you could cut it with a knife. Ananya kept making passive-aggressive comments about 'some people not caring about shared spaces.' Priya just stayed in her room the whole time I was there. When I asked Priya privately what was wrong, she just said 'I can't deal with her constant criticism anymore' and looked really defeated. Ananya later told me 'I shouldn't have to be anyone's mother.'"`
      },
      {
        type: 'journal',
        title: 'Anonymous Journal Entry Found',
        content: `"I'm so tired of being treated like a child. Every request feels like an attack on who I am as a person. Why can't she just accept that I have different standards? I work 12-hour shifts at the hospital - the last thing I want is to come home to more criticism. Maybe if she appreciated what I DO contribute instead of focusing on what I don't..."`
      }
    ],
    missions: [
      {
        question: 'What feelings do you think each person is holding inside?',
        type: 'feelings'
      },
      {
        question: 'What is each person really wanting (like respect, peace, or appreciation)?',
        type: 'needs'
      },
      {
        question: 'If they talked with kindness, what could that conversation sound like?',
        type: 'conversation'
      }
    ]
  },
  {
    id: 'project-breakdown',
    number: 'PPB-2024-002', 
    title: 'The Project Partnership Breakdown',
    description: 'Work colleagues Rajesh & Deepika clash over missed deadlines and different work styles, leading to professional tension.',
    difficulty: 'Intermediate',
    duration: '20 min',
    participants: 2,
    evidence: [
      {
        type: 'email',
        title: 'Email Chain - Work Colleagues Rajesh & Deepika',
        content: `From: rajesh.kumar@company.com
To: deepika.singh@company.com
Subject: Project Timeline

Deepika,
I've noticed several missed deadlines. We need to discuss this ASAP.
-Rajesh

From: deepika.singh@company.com  
To: rajesh.kumar@company.com
Subject: RE: Project Timeline

I'm doing my best with limited resources. Not everyone can work 14-hour days.
-Deepika

From: rajesh.kumar@company.com
To: deepika.singh@company.com
Subject: RE: Project Timeline

This isn't about working hours. It's about commitment and reliability.

From: deepika.singh@company.com
To: rajesh.kumar@company.com
Subject: RE: Project Timeline

Wow. Just wow. I'm CC'ing our manager on future emails.`
      },
      {
        type: 'witness',
        title: 'Witness Statement - Team Lead Amit',
        content: `"These two used to be great collaborators. Something shifted about a month ago. Rajesh has been staying super late, looking stressed, constantly checking on everyone's progress. I heard he's up for a promotion and this project is crucial. Deepika mentioned to me privately that she's been dealing with her mother's illness and feels like she's failing at everything. She said 'I used to love working with Rajesh, but now I feel like I can never meet his expectations.'"`
      }
    ],
    missions: [
      {
        question: 'What worries or pressures are affecting each person?',
        type: 'feelings'
      },
      {
        question: 'How did their misunderstandings make the fight bigger?',
        type: 'needs'
      },
      {
        question: 'What teamwork approach could help both feel supported and get the work done?',
        type: 'solution'
      }
    ]
  },
  {
    id: 'birthday-incident',
    number: 'BPI-2024-003',
    title: 'The Birthday Party Incident', 
    description: 'Friends Maya and Riya experience tension at a surprise party due to miscommunication and social dynamics.',
    difficulty: 'Intermediate',
    duration: '18 min',
    participants: 6,
    evidence: [
      {
        type: 'message',
        title: 'Instagram & WhatsApp Screenshots',
        content: `Maya's Story: "Amazing surprise party! Thanks to everyone who made it special! 🎉✨"
        
Riya's Story: "Sometimes you realize who your real friends are 💔"

WhatsApp Group:
Neha: Such a fun party yesterday! Maya looked so happy 😍
Arjun: Yeah! The surprise worked perfectly
Shreya: @Riya why did you leave so early?
Riya: Had to go
Maya: @Riya is everything okay? You seemed upset
[Riya left the group]`
      },
      {
        type: 'witness',
        title: 'Witness Statement - Shreya',
        content: `"The party planning was chaotic. We all assumed someone else had invited Riya to help with decorations and planning. She showed up early and seemed excited to help, but we already had everything done. I saw her face fall when Maya said 'Oh, I didn't know you were coming early.' Later, when Maya was opening gifts, Riya looked really uncomfortable. Her gift was much smaller than everyone else's - I think she felt embarrassed."`
      }
    ],
    missions: [
      {
        question: 'What mix-ups or wrong assumptions made Riya feel hurt?',
        type: 'feelings'
      },
      {
        question: 'How can money or lifestyle differences sometimes cause tension in friendships?',
        type: 'needs'
      },
      {
        question: 'What kind of honest talk could Maya and Riya have to fix their bond?',
        type: 'conversation'
      }
    ]
  },
  {
    id: 'family-dinner',
    number: 'FDE-2024-004',
    title: 'The Family Dinner Explosion',
    description: 'A 28-year-old daughter clashes with her parents over life choices, marriage expectations, and generational differences.',
    difficulty: 'Advanced',
    duration: '25 min', 
    participants: 4,
    evidence: [
      {
        type: 'message',
        title: 'Voice Message - Frustrated daughter to friend',
        content: `"I can't take it anymore! Every family dinner is the same. 'When are you getting married? Your cousin just bought a house. Why can't you save money like Priya's daughter?' I'm 28, I have a good job, I'm happy with my life, but apparently that means nothing to them. Today I finally snapped and said some things I probably shouldn't have. Now my mom is crying and dad won't talk to me."`
      },
      {
        type: 'witness',
        title: 'Witness Statement - Younger Brother Arjun (age 16)',
        content: `"Didi has been really stressed lately. Every Sunday dinner becomes this weird interrogation where Mom and Dad ask her about marriage and money and compare her to everyone else. She usually just stays quiet and looks uncomfortable, but today she exploded. She said stuff like 'I'm not your trophy daughter' and 'my life doesn't need your approval.' Mom started crying and said 'we just want you to be secure and happy.'"`
      },
      {
        type: 'journal',
        title: 'Unsent Letter Found (handwritten)',
        content: `"Dear Beta, Your father and I lie awake at night worrying about your future. We see our friends' children settling down, buying homes, building families, and we want that security for you too. When we ask about marriage, it's not because we don't value your independence - it's because we love you and want to know you'll have someone to care for you when we're gone. We're proud of your job, but we worry you're working so hard that you're missing out on other joys in life..."`
      }
    ],
    missions: [
      {
        question: 'How are the daughter\'s wishes (freedom, independence) different from her parents\' wishes (security, tradition)?',
        type: 'needs'
      },
      {
        question: 'What are the parents truly worried about in their hearts?',
        type: 'feelings'
      },
      {
        question: 'How could they talk in a way that respects her choices but also shows love and care from the family?',
        type: 'conversation'
      }
    ]
  },
  {
    id: 'startup-crisis',
    number: 'SCC-2024-005',
    title: 'The Startup Co-founder Crisis',
    description: 'Business partners Vikram & Suhani face a crisis over company direction, values vs. profits, and their friendship.',
    difficulty: 'Advanced',
    duration: '30 min',
    participants: 2,
    evidence: [
      {
        type: 'message',
        title: 'Slack Conversation - Co-founders Vikram & Suhani',
        content: `Vikram: We need to pivot our strategy. Current approach isn't scaling.
Suhani: We've been at this for 8 months. Can we give it more time?
Vikram: Time is money. Every day we delay, competitors get ahead.
Suhani: What about the team we hired for current strategy? Just fire them?
Vikram: Business is business. We have to make tough decisions.
Suhani: This isn't the company culture we dreamed of building.
Vikram: Dreams don't pay bills or investors.
[Suhani went offline and hasn't been active for 3 days]`
      },
      {
        type: 'witness',
        title: 'Witness Statement - Employee Prateek',
        content: `"The office vibe has been really weird lately. Vikram and Suhani used to finish each other's sentences - now they barely make eye contact in meetings. Suhani seems really sad, like she's questioning everything. Vikram is more aggressive than usual, pushing everyone harder. Yesterday I heard Suhani on a call saying 'maybe we want different things now' and it didn't sound like she was talking about business strategy."`
      },
      {
        type: 'email',
        title: 'Email Draft (never sent) - Suhani\'s laptop',
        content: `Subject: What happened to us?

Vikram,
Remember when we started this company in your garage? We said we'd build something different - a place where people mattered, where we could prove business could be both profitable AND humane. Now I watch you make decisions that prioritize numbers over people, and I don't recognize my best friend anymore.

I know you're under pressure from investors. I know you carry the weight of everyone's expectations. But when did we decide that success meant abandoning our values?

[Draft saved, never sent]`
      }
    ],
    missions: [
      {
        question: 'How are outside pressures (like investors, competition) affecting their friendship and teamwork?',
        type: 'feelings'
      },
      {
        question: 'What big difference in what they believe is causing the fight (numbers vs. people)?',
        type: 'needs'
      },
      {
        question: 'How could they balance both—running a strong business and staying true to their original dream?',
        type: 'solution'
      }
    ]
  }
];