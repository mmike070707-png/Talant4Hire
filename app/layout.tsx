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
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-slate-100 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
