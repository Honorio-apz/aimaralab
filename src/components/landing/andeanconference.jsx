import React from 'react';
import { Calendar, MapPin, Clock, Award, Mail, CalendarPlus  } from 'lucide-react';

const SeminarioPage = () => {
  const talleres = [
    { id: 1, nombre: 'Charla de presentación ', Ponente: 'Por confirmar', hora: '10:00 AM' },
    { id: 2, nombre: 'Ponencia : NLP Models to Clarify Degree and Title Regulations in Peruvian Universities', Ponente: 'Jamir E. Balcona', hora: '10:30 AM' },
    { id: 3, nombre: 'Panel: Experience FGV Brazil Summer Program & Phaw AI', Ponente: 'Estrella Velasquez, Yoselin Arocutipa & Allison Reynoso', hora: '10:50 AM' },
    { id: 4, nombre: 'Ponencia: Peruvian Sign Recognition (LSP) to the Native Quechua Language Using LSTM', Ponente: 'Seline M. Maquera', hora: '11:20 AM' },
    { id: 5, nombre: 'Panel: Experience publishing at IEEE conference', Ponente: 'Jamir Balcona, Selin Maquera & Ivan Ccaso', hora: '11:40 AM' },
    { id: 6, nombre: 'Ponencia: Detection of Anemia through Nail Images using Convolutional Neural Networks', Ponente: 'Iván A. Ccaso', hora: '12:10 PM' },
    { id: 7, nombre: 'Cierre de conferencia', Ponente: 'Por confirmar', hora: '12:30 PM' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <h1 className="text-2xl sm:text-3xl font-light text-center sm:text-left">Innovation and technological advances in the Andean region</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8">
        <div className="mb-8">
          <img src="../aimara/andeanconference2.png" alt="Portada del Innovation and technological advances in the Andean region" className="w-full h-52 sm:h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]" />
        </div>

        <section className="mb-12">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
          La conferencia "Innovation and Technological Advances in the Andean Region", con el objetivo de replicar la experiencia vivida en la conferencia IEEE ANDESCON 2024 celebrada del 11 al 13 de septiembre en Cusco.

          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
          Tres estudiantes de la Escuela Profesional de Ingeniería de Sistemas e Informática de la Universidad Nacional de Moquegua destacaron en este evento con sus proyectos innovadores: "NLP Models to Clarify Degree and Title Regulations in Peruvian Universities", "Peruvian Sign Recognition (LSP) to the Native Quechua Language Using LSTM" y "Detection of Anemia through Nail Images using Convolutional Neural Networks"<div className=""></div>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-6">Detalles de la conferencia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <Calendar className="text-blue-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Ponente de inicio</p>
                <p>03 de octubre de 2024</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <MapPin className="text-purple-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Ubicación</p>
                <p>Auditorio de EPISI, Universidad Nacional de Moquegua</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-6">Cronograma de la conferencia</h2>
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-500 text-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Temas</th>
                  <th className="px-4 py-2 text-left">Ponente</th>
                  <th className="px-4 py-2 text-left">Hora</th>
                </tr>
              </thead>
              <tbody>
                {talleres.map((taller, index) => (
                  <tr key={taller.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition-colors duration-300 hover:bg-gray-100`}>
                    <td className="border-t px-4 py-2">{taller.nombre}</td>
                    <td className="border-t px-4 py-2">{taller.Ponente}</td>
                    <td className="border-t px-4 py-2">{taller.hora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
       

          <section className='mb-14'>
            <h2 className="text-xl sm:text-2xl font-light mb-6">Registro</h2>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <div className="flex items-center">
                <CalendarPlus className="text-blue-500 mr-4 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold">¡Únete a nuestro evento!</p>
                  <p className="text-gray-600">No te pierdas esta oportunidad única</p>
                </div>
              </div>
              <a 
                href="https://forms.gle/CzA2WZEAK8aFDHKa8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Registrarse
              </a>
            </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-light mb-6">Contacto</h2>
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
            <Mail className="text-blue-500 mr-4 flex-shrink-0" size={24} />
            <div>
              <p className="font-semibold">Correo electrónico</p>
              <a href="mailto:rg@aimaralab.com" className="text-blue-500 hover:underline">rg@aimaralab.com</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeminarioPage;