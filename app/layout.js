import './globals.css';

export const metadata = {
  title: 'Lic. Marcela Maciel · Kinesiología',
  description: 'Kinesiología y rehabilitación personalizada en Florida Oeste.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
