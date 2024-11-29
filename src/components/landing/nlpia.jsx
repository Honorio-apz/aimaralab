import React from 'react';
import { Calendar, MapPin, Clock, Award, Mail } from 'lucide-react';

const SeminarioPage = () => {
  const talleres = [
    { id: 1, nombre: 'Análisis de Características MGC y UGC para Estimar Nivel de Aceptación en el sector Inmobiliario', fecha: 'Pedro Shiguihara', hora: '10:00 AM' },
    { id: 2, nombre: 'Modelos Neuronales de Traducción Auatomatica para las Lenguas Nativas', fecha: 'Honorio Apaza', hora: '10:30 AM' },
    { id: 3, nombre: 'Estudio Infodemiológico de Covid-19 Usando Minería de Datos y Procesamiento de Lenguaje Natural', fecha: 'Anibal Flores', hora: '11:00 AM' },
    
  ];

  return (
    <div className="g-gradient-to-b min-h-screen text-gray-800 font-sans">
      
      
      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8">
        <div className="mb-8">
          <img src="../aimara/NLPIA.png" alt="Portada del Seminario Taller de Redacción de Artículos Científicos" className="w-full h-52 sm:h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]" />
        </div>

        <section className="mb-12">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
          I Natural Language Processing and Artificial Intelligence Seminar is proposed as a space for learning, exchange, and discussion, aimed at students, professors, and the general public interested in exploring these technologies. This seminar will bring together prominent national experts who will share their experiences, research findings, and practical applications, focusing on the specific challenges and opportunities of our country.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
          The objective of the event is to raise awareness and train attendees on the impact of NLP and AI in various fields, promoting the development of research projects and technological applications that address local and international challenges.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-6">Detalles del Seminario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <Calendar className="text-blue-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Fecha de inicio</p>
                <p>10 de December 2024.</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <MapPin className="text-purple-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Location</p>
                <p>Autoorium of EPISI, Universidad Nacional de Moquegua.</p>
              </div>
            </div>
           
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <Award className="text-blue-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Certification</p>
                <p>Certificate of Attendance to the Event.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-6">Program of seminar</h2>
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-500 text-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Topic</th>
                  <th className="px-4 py-2 text-left">Speaker</th>
                  <th className="px-4 py-2 text-left">Hour</th>
                </tr>
              </thead>
              <tbody>
                {talleres.map((taller, index) => (
                  <tr key={taller.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition-colors duration-300 hover:g-gradient-to-b`}>
                    <td className="border-t px-4 py-2">{taller.nombre}</td>
                    <td className="border-t px-4 py-2">{taller.fecha}</td>
                    <td className="border-t px-4 py-2">{taller.hora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
       

       
        <br></br>
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
