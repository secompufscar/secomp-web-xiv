import "./globals.css";

const keywords = [
  "SECOMP",
  "UFSCar",
  "Computação",
  "Acadêmica",
  "Evento",
  "Inovação",
  "Tecnologia",
  "Palestras",
  "Conferências",
  "Universidade",
  "Graduação",
  "Departamento",
  "Informações",
  "Conhecimento",
  "Participantes",
  "Entusiastas",
  "Experiências",
  "Novidades",
  "Comunidade",
  "São Carlos",
  "Desenvolvimento",
  "Estudantes",
  "Tecnológico",
  "Educação",
  "Aprendizado",
  "Discussões",
  "Networking",
  "Futuro da Computação",
  "Evento Anual",
  "Ciência da Computação"
];

const description = "A SECOMP UFSCar é um evento que reúne estudantes, profissionais e entusiastas da tecnologia para dias de palestras, workshops, inovação e networking. Participe e descubra tendências, compartilhe experiências e conecte-se com a comunidade que está moldando o futuro da computação."

export const metadata = {
    metadataBase: new URL("https://www.secompufscar.com.br"),
    alternates: { canonical: "/"},
    title: "SECOMP UFSCar",
    description: description,
    url: "https://www.secompufscar.com.br",
    siteName: "SECOMP UFSCar",
    icons: { 
      icon: "/favicon.ico", 
      shortcut: "/favicon.ico" 
    },
    keywords: keywords,
    robots: "index, follow",
    openGraph: {
      title: "SECOMP UFSCar",
      siteName: "SECOMP UFSCar",
      description: description,
      url: "https://www.secompufscar.com.br",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "/equipe-xii.png",
          width: 1200,
          height: 630,
          alt: "SECOMP UFSCar - Equipe XII"
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SECOMP UFSCar",
      description: description,
      creator: "@secompufscar",
      images: ["/equipe-xii.png"],
    },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SECOMP UFSCar",
    url: "https://www.secompufscar.com.br",
    logo: "https://www.secompufscar.com.br/logo.png", 
    sameAs: [
      "https://twitter.com/secompufscar",
      "https://www.instagram.com/secompufscar"
    ]
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Semana Acadêmica da Computação da UFSCar",
    startDate: "2026-10-05T09:00",  // TODO: confirmar data de início / fim
    endDate: "2026-10-09T18:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "UFSCar",
      address: "São Carlos, SP, Brasil"
    },
    image: ["https://www.secompufscar.com.br/mesa-redonda.png"],
    description: "A Semana Acadêmica da Computação da UFSCar é um evento anual que reúne estudantes, pesquisadores e entusiastas da computação.",
    organizer: {
      "@type": "Organization",
      name: "SECOMP UFSCar",
      url: "https://www.secompufscar.com.br"
    }
  };

  return (
      <html lang="pt-BR">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
          />
        </head>

          <body>
            <div className="crt-overlay" aria-hidden="true" />
            {children}
          </body>
      </html>
  );
}
