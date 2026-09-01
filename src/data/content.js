import { Presentation, BookOpen, Trophy, Users, Mic, Gamepad2 } from "lucide-react";

export const content = [  // TODO: adequar ao conteúdo da SECOMP XIV
  { 
    label: "Palestras", 
    icon: <Presentation size={36} />, 
    text: "Aprenda com especialistas sobre tendências e inovações em computação." 
  },
  { 
    label: "Minicursos", 
    icon: <BookOpen size={36} />, 
    text: "Atividades práticas para desenvolver novas habilidades técnicas." 
  },
  { 
    label: "Competições", 
    icon: <Trophy size={36} />, 
    text: "Teste seus conhecimentos em desafios práticos junto com sua equipe!" 
  },
  { 
    label: "Mesa Redonda", 
    icon: <Users size={36} />, 
    text: "Discussões abertas com profissionais e pesquisadores da área." 
  },
  { 
    label: "Flash Talks", 
    icon: <Mic size={36} />, 
    text: "Apresentações rápidas e dinâmicas sobre diversos temas da computação." 
  },
  { 
    label: "Gamenight", 
    icon: <Gamepad2 size={36} />, 
    text: "Momento de descontração com jogos e muita interação entre os participantes." 
  },
];