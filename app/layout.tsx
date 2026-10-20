import './globals.css';

export const metadata = {
  title: 'Talant4Hire - Holland MI Manufacturing Hub',
  description: 'Autonomous AI Recruitment Platform powered by Jason Styles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-slate-50">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="h-full text-slate-900 font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
