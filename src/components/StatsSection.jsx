import { Rocket, TrendingUp, Users } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: <Rocket className="w-12 h-12 text-white" />,
      number: '1120',
      label: 'projets réalisés',
      description: 'Projects allant d\'un simple dépannage à la réfection complète d\'une toiture'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-white" />,
      number: '6,9 M€',
      label: 'de chiffre d\'affaires',
      description: 'CA cumulé depuis 2011, date de création d\'entreprise'
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      number: '10',
      label: 'couvreurs passionnés',
      description: 'formés majoritairement chez les Compagnons du Devoir'
    }
  ];

  return (
    <section className="w-full flex flex-col md:flex-row py-0 bg-white">
    
        {/* Left - Image */}
        <div className="  ">
          <img
            src="/stat.png"
            alt="Couvreur travaillant sur une toiture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Stats */}
       
          <div className="flex flex-col items-center gap-6 md:flex-row bg-[#0565C4] p-8 lg:p-12  justify-center ">
            {stats.map((stat, index) => (
              <div key={index} className="md:w-1/3 flex flex-col  gap-3">
                {/* Icon */}
                <div className="flex items-center justify-start">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <h3 className="text-5xl lg:text-6xl font-bold text-white">
                  {stat.number}
                </h3>
                  <p className="text-xl lg:text-2xl font-semibold text-white">
                  {stat.label}
                </p>

                {/* Label */}
                <div className=' w-full md:w-3/4'>
                 {/* Description */}
                <p className="text-white/80  w-fulltext-sm lg:text-base leading-relaxed">
                  {stat.description}
                </p>

                </div>
              

               

              
              </div>
            ))}
          </div>
    
      
    </section>
  );
}