export const marcela = {
  name: 'Lic. Marcela Maciel',
  title: 'Kinesiología para volver a moverte con confianza',
  specialty: 'Kinesióloga Fisiatra',
  license: 'Matrícula profesional a completar',
  location: 'Perú 1306, Florida Oeste, Provincia de Buenos Aires',
  phone: '011 7625-5059',
  whatsapp: 'https://wa.me/message/3PYPXHNCHXZBB1',
  center: 'ReKiMM Kinesiología',
  photo: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1000&q=85&auto=format&fit=crop',
};

export const services = [
  { number: '01', title: 'Ortopedia y traumatología', text: 'Tratamientos personalizados para recuperar movilidad, fuerza y autonomía después de una lesión.' },
  { number: '02', title: 'Rehabilitación vestibular', text: 'Abordaje especializado para mareos, vértigo y alteraciones del equilibrio.' },
  { number: '03', title: 'Articulación temporomandibular', text: 'Evaluación y rehabilitación para aliviar molestias y mejorar la función mandibular.' },
  { number: '04', title: 'Ergonomía laboral', text: 'Herramientas para cuidar tu cuerpo y prevenir molestias en tu actividad cotidiana.' },
];

export const reviews = [
  { quote: 'Fui con mucho dolor por una trocanteritis bilateral y desde la primera sesión empecé a notar mejoría. Marcela es muy amable y cálida.', author: 'Elizabeth', detail: 'Paciente verificada · Google' },
  { quote: 'Una profesional muy humana que atiende a cada paciente con respeto, empatía y dedicación. Recibí el mejor tratamiento.', author: 'Silvina E.', detail: 'Paciente verificada · Google' },
  { quote: 'La atención fue personalizada y cada práctica siempre fue explicada para comprender cómo impactaba en mi recuperación.', author: 'Alejandra B.', detail: 'Paciente verificada · Google' },
];

export const timeline = [
  ['2003', 'Título de Licenciada Kinesióloga Fisiatra · UBA'],
  ['2011 — 2019', 'Formación avanzada en rehabilitación vestibular · AAK / EAFV'],
  ['2017 — 2019', 'Especialidad en Kinesiología en Ortopedia y Traumatología · COKIBA / UBA'],
  ['2022 — 2023', 'Formación en rehabilitación de la articulación temporomandibular · AAK / Hospital Houssay'],
];
export const clinic = {
  name: marcela.name,
  professional: marcela.name,
  specialty: marcela.specialty,
  deposit: 5000,
};

export const demoBookings = [
  { id: 1, patient: 'Paciente de ejemplo', professional: marcela.name, specialty: marcela.specialty, date: '18 Sep 2024', time: '09:30', paid: true, initials: 'PE', color: 'bg-[#e4f6ef] text-[#258e76]' },
  { id: 2, patient: 'Otra persona', professional: marcela.name, specialty: marcela.specialty, date: '18 Sep 2024', time: '11:00', paid: false, initials: 'OP', color: 'bg-[#fff2dc] text-[#be7d1a]' },
];
