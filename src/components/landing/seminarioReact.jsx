import React from 'react';
import { Calendar, MapPin, Clock, Award, Mail } from 'lucide-react';

const SeminarioPage = () => {
  const talleres = [
    { id: 1, nombre: 'Módulo 1: Introducción a la Redacción Científica (Presencial)', fecha: '15/08/2024', hora: '4:00 PM - 7:00 PM' },
    { id: 2, nombre: 'Asesoría Virtual', fecha: '20/08/2024', hora: '8:00 PM - 10:00 PM' },
    { id: 3, nombre: 'Módulo 2: Estructura de un Artículo Científico (Presencial)', fecha: '22/08/2024', hora: '4:00 PM - 7:00 PM' },
    { id: 4, nombre: 'Asesoría Virtual', fecha: '27/08/2024', hora: '8:00 PM - 10:00 PM' },
    { id: 5, nombre: 'Módulo 3: Redacción de la Introducción y Metodología (Presencial)', fecha: '29/08/2024', hora: '4:00 PM - 7:00 PM' },
    { id: 6, nombre: 'Asesoría Virtual', fecha: '03/09/2024', hora: '8:00 PM - 10:00 PM' },
    { id: 7, nombre: 'Módulo 4: Redacción de Resultados y Discusión (Presencial)', fecha: '05/09/2024', hora: '4:00 PM - 7:00 PM' },
    { id: 8, nombre: 'Asesoría Virtual', fecha: '10/09/2024', hora: '8:00 PM - 10:00 PM' },
    { id: 9, nombre: 'Módulo 5: Redacción de Conclusiones y Referencias (Virtual)', fecha: '12/09/2024', hora: '8:00 PM - 11:00 PM' },
    { id: 10, nombre: 'Asesoría Virtual', fecha: '17/09/2024', hora: '8:00 PM - 10:00 PM' },
    { id: 11, nombre: 'Módulo 6: Edición y Revisión (Virtual)', fecha: '19/09/2024', hora: '5:00 PM - 8:00 PM' },
    { id: 12, nombre: 'Asesoría Virtual', fecha: '24/09/2024', hora: '8:00 PM - 10:00 PM' },
    { id: 13, nombre: 'Módulo 7: Publicación y Difusión', fecha: '26/09/2024', hora: '5:00 PM - 8:00 PM' },
  ];

  return (
    <div className="g-gradient-to-b min-h-screen text-gray-800 font-sans">
      
      
      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8">
        <div className="mb-8">
          <img src="../aimara/seminario.png" alt="Portada del Seminario Taller de Redacción de Artículos Científicos" className="w-full h-52 sm:h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]" />
        </div>

        <section className="mb-12">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
          In the academic and scientific field, the publication of articles is a fundamental activity for the dissemination of knowledge and the advancement of science. This seminar is designed to provide participants with a thorough knowledge of the principles and practices of scientific writing, with a theoretical-practical approach.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4">
          Over the course of 7 sessions, participants will learn how to structure and write scientific articles, gain a deep understanding of the publication process, and be trained in ethics in scientific publishing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-6">Detalles del Seminario</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <Calendar className="text-blue-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Fecha de inicio</p>
                <p>15 de agosto de 2024</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <MapPin className="text-purple-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Ubicación</p>
                <p>Aula Magna EPISI, Universidad Nacional de Moquegua</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <Clock className="text-purple-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Duración</p>
                <p>40 horas académicas</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <Award className="text-blue-500 mr-4 flex-shrink-0" size={24} />
              <div>
                <p className="font-semibold">Certificación</p>
                <p>Certificado por 40 horas académicas</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-light mb-6">Cronograma de Talleres</h2>
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-500 text-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Talleres</th>
                  <th className="px-4 py-2 text-left">Fecha</th>
                  <th className="px-4 py-2 text-left">Hora</th>
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
       

        <section>
        <h2 className="text-xl sm:text-2xl font-light mb-6">Material del Taller</h2>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-4 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <div>
            <p className="font-semibold">Descargar Material</p>
            <a href="https://drive.google.com/drive/folders/17autxb16cqV91gl-TwJYL43ccKeMZnsJ?usp=sharing" className="text-blue-500 hover:underline" download>
              Haz clic aquí para acceder al material del taller
            </a>
          </div>
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
