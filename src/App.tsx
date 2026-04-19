import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  ChevronRight, Facebook, Instagram, 
  Linkedin, BookOpen, Users, GraduationCap, 
  Stethoscope, Building2, Bus, Trophy,
  ClipboardList, ArrowRight
} from 'lucide-react';

// --- Shared Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl serif italic leading-tight mb-4 tracking-tighter ${light ? 'text-white' : 'text-primary'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-sm max-w-2xl leading-relaxed ${light ? 'text-blue-100' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`w-12 h-1 mt-6 ${light ? 'bg-accent' : 'bg-primary'}`} />
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admission', href: '#admission' },
    { name: 'Placements', href: '#placements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-white shadow-sm border-subtle py-3' : 'bg-transparent py-5 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rotate-45 flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent"></div>
                </div>
              </div>
              <div className={`flex flex-col ${scrolled ? 'text-primary' : 'text-white'}`}>
                <span className="text-xl font-bold tracking-tight leading-none uppercase">Nilesh</span>
                <span className={`text-[10px] font-semibold tracking-widest uppercase ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>College of Nursing</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-500 hover:text-primary' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#admission" className="bg-accent text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-yellow-200/50 hover:bg-yellow-500 transition-all transform hover:-translate-y-0.5">
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-primary' : 'text-white'}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-subtle"
          >
            <div className="px-6 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-[11px] font-bold uppercase tracking-widest text-primary border-b border-subtle"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#admission" 
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center bg-accent text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 bg-white overflow-hidden pt-20 md:pt-0">
    <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-center px-6 md:px-12 py-16 md:py-8 bg-white z-10 order-2 lg:order-1">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Recognized by Rajasthan Nursing Council</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl serif italic text-primary leading-[1.1] mb-8 tracking-tighter">
          Empowering <span className="text-slate-900 not-italic font-bold">Compassion</span>, <br className="hidden md:block" />
          Defining Excellence.
        </h1>
        
        <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-10 max-w-md">
          Dedicated to nurturing the next generation of healthcare leaders through world-class clinical training and academic rigor in the heart of Rajasthan.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <a href="#admission" className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-yellow-200/50 hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
            Apply Now <ArrowRight size={16} />
          </a>
          <a href="#" className="w-full sm:w-auto bg-white border border-subtle text-primary px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            Download Prospectus
          </a>
        </div>

        <div className="flex gap-8 border-t border-subtle pt-10">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">100%</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Placements</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">RNC</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Certified</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-primary">RUHS</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Affiliated</span>
          </div>
        </div>
      </motion.div>
    </div>

    <div className="md:col-span-12 lg:col-span-7 relative bg-slate-100 hero-mask overflow-hidden order-1 lg:order-2 h-[400px] md:h-[600px] lg:h-auto">
      <img 
        src="https://picsum.photos/seed/nilesh-campus-view/1200/1000" 
        alt="Nilesh College of Nursing Best Campus View" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur-md p-6 border-l-4 border-primary shadow-2xl"
          >
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Program I</span>
            <h3 className="text-xl font-bold mb-2">B.Sc. Nursing</h3>
            <p className="text-[11px] text-slate-600 leading-normal font-medium italic">Comprehensive 4-year undergraduate degree.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/90 backdrop-blur-md p-6 border-l-4 border-accent shadow-2xl"
          >
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Program II</span>
            <h3 className="text-xl font-bold mb-2">G.N.M.</h3>
            <p className="text-[11px] text-slate-600 leading-normal font-medium italic">Focused 3-year diploma training.</p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-container bg-white">
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <SectionHeading subtitle="Discover our legacy of training world-class nurses.">
          Our Vision & History
        </SectionHeading>
        <div className="space-y-8 text-slate-500 text-sm leading-relaxed">
          <p>
            Established with a vision to be a premier institution in Rajasthan, Nilesh College of Nursing provides a holistic education that blends traditional medical wisdom with modern clinical practices.
          </p>
          <p>
            We are proudly recognized by the <strong className="text-primary">Rajasthan Nursing Council (RNC)</strong> and affiliated with the <strong className="text-primary">Rajasthan University of Health Sciences (RUHS)</strong>. Our graduates are equipped with the skills and empathy required to lead in the global health sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="border-t border-subtle pt-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary block mb-3">Institutional Vision</span>
              <p className="italic text-slate-600 font-medium leading-normal">To be a leader in transformative nursing education and clinical research across the nation.</p>
            </div>
            <div className="border-t border-subtle pt-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-accent block mb-3">Core Mission</span>
              <p className="italic text-slate-600 font-medium leading-normal">Fostering excellence through student-centric learning and ethical evidence-based practice.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative px-6 md:px-0"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 bg-slate-100 p-3">
          <img 
            src="https://picsum.photos/seed/clinical-labs/800/1000" 
            alt="Nursing Students in Lab" 
            className="w-full rounded-2xl grayscale transition-all duration-700 hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-md p-8 border-l-4 border-primary shadow-2xl hidden md:block max-w-[240px]">
          <div className="flex flex-col gap-2">
            <ClipboardList className="text-primary mb-2" size={32} />
            <p className="text-4xl font-bold text-primary leading-none">100%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Successful Placement Record</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Courses = () => {
  const courses = [
    {
      title: "B.Sc. Nursing",
      fullTitle: "Bachelor of Science in Nursing",
      duration: "4 Years",
      eligibility: "10+2 with PCB (Physics, Chemistry & Biology)",
      icon: <GraduationCap className="w-8 h-8" />,
      desc: "Comprehensive degree program focused on evidence-based practice, surgical care, and healthcare management."
    },
    {
      title: "G.N.M.",
      fullTitle: "General Nursing and Midwifery",
      duration: "3 Years",
      eligibility: "10+2 in any stream (Bio preferred)",
      icon: <Stethoscope className="w-8 h-8" />,
      desc: "Practical-oriented training for community health nursing, midwifery services, and bedside clinical excellence."
    }
  ];

  return (
    <section id="courses" className="bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading subtitle="Rigorous academic programs recognized by Rajasthan Nursing Council.">
              Academic Programs
            </SectionHeading>
          </div>
          <div className="lg:col-span-4 flex justify-end pb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 max-w-[200px] text-right">
              Enrollment for session 2024-25 is now active for all eligible candidates.
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-0 border border-subtle bg-white">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`p-12 md:p-16 flex flex-col group ${idx === 0 ? 'border-r border-subtle' : ''} hover:bg-slate-50 transition-colors duration-500`}
            >
              <div className="text-primary mb-8 border-l-2 border-primary pl-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Program {idx + 1}</span>
                <h3 className="text-4xl serif italic text-primary group-hover:text-ink transition-colors">{course.title}</h3>
              </div>
              
              <p className="text-slate-500 text-sm mb-10 leading-relaxed max-w-sm">{course.desc}</p>
              
              <div className="space-y-4 mb-12 flex-1">
                <div className="flex justify-between items-center text-[11px] uppercase tracking-widest font-bold">
                  <span className="text-slate-400">Duration</span>
                  <span className="text-primary">{course.duration}</span>
                </div>
                <div className="h-[1px] bg-subtle w-full" />
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Basic Eligibility</span>
                  <span className="text-xs text-ink font-medium leading-relaxed italic">{course.eligibility}</span>
                </div>
              </div>
              
              <a href="#admission" className="inline-flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-primary hover:gap-8 transition-all">
                Inquire Details <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    { title: "Advanced Labs", icon: <Building2 size={24} />, desc: "Fully equipped Anatomy & Nutrition labs for expert training." },
    { title: "Digital Library", icon: <BookOpen size={24} />, desc: "Vast collection of medical journals & e-learning resources." },
    { title: "Secure Hostel", icon: <MapPin size={24} />, desc: "Safe, separate residential facilities with nutritious meals." },
    { title: "Transport", icon: <Bus size={24} />, desc: "Dedicated fleet for clinical postings at various hospitals." },
    { title: "Extra-Curricular", icon: <Trophy size={24} />, desc: "Annual sports meet, cultural events, and festivals." },
    { title: "Clinical Postings", icon: <Users size={24} />, desc: "Hands-on experience at top Rajasthan medical colleges." }
  ];

  return (
    <section id="facilities" className="bg-white">
      <div className="section-container">
        <SectionHeading subtitle="State-of-the-art infrastructure designed for medical excellence.">
          Learning Environment
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-subtle">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 border-b border-r border-subtle group hover:bg-slate-50 transition-all duration-300"
            >
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform flex items-center justify-between">
                {fac.icon}
                <span className="text-[10px] font-bold text-slate-300">0{idx + 1}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 italic serif text-ink">{fac.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">{fac.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-0 border border-subtle">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square overflow-hidden group border-r last:border-r-0 border-subtle">
              <img 
                src={`https://picsum.photos/seed/campus-${i}/400/400`} 
                alt="Campus Facility" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Admission = () => (
  <section id="admission" className="bg-primary text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full border-[100px] border-white rounded-full translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="section-container relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <SectionHeading light subtitle="Join Rajasthan's leading nursing institute for clinical excellence.">
            Enrollment 2024-25
          </SectionHeading>
          <div className="space-y-10 mb-16">
            <div className="border-l-4 border-accent pl-8 py-2">
              <h5 className="font-bold text-xl mb-2 italic serif">Document Submission</h5>
              <p className="text-blue-100/80 text-sm leading-relaxed">Keep 10th & 12th original certificates, Aadhaar verification, and 8 passport size photos ready for offline counseling.</p>
            </div>
            <div className="border-l-4 border-white/30 pl-8 py-2">
              <h5 className="font-bold text-xl mb-2 italic serif">Direct Admissions</h5>
              <p className="text-blue-100/80 text-sm leading-relaxed">Walk-in into our Jaipur campus for a personal orientation with our Academic Dean and seat reservation.</p>
            </div>
            <div className="border-l-4 border-white/30 pl-8 py-2">
              <h5 className="font-bold text-xl mb-4 italic serif underline decoration-accent decoration-2 underline-offset-8">
                <a href="#" className="flex items-center gap-3 group">
                  Download Prospectus <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </h5>
            </div>
          </div>
          <div className="inline-block p-10 bg-white/5 border border-white/10 backdrop-blur-xl">
            <span className="text-[10px] text-accent font-bold uppercase tracking-widest block mb-4">Urgent Helpline</span>
            <div className="flex items-center gap-6 mb-2">
              <Phone className="text-accent" size={32} />
              <span className="text-3xl font-bold tracking-tighter">+91 9461032002</span>
            </div>
            <p className="text-[10px] text-blue-200 uppercase tracking-[0.2em] font-semibold">Available Mon-Sat | 09:00 - 18:00 IST</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-14 text-ink shadow-[0_50px_100px_-20px_rgba(30,58,138,0.3)]"
        >
          <h3 className="text-3xl serif italic mb-10 text-primary border-b border-subtle pb-6 tracking-tight">Admission Inquiry</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block tracking-widest">Full Name</label>
                <input type="text" className="w-full border-b border-subtle py-3 text-sm focus:border-primary transition-all outline-none font-medium" placeholder="Candidate Name" />
              </div>
              <div>
                <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block tracking-widest">Contact Number</label>
                <input type="tel" className="w-full border-b border-subtle py-3 text-sm focus:border-primary transition-all outline-none font-medium" placeholder="+91" />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 mb-2 block tracking-widest">Select Program</label>
              <select className="w-full border-b border-subtle py-3 text-sm focus:border-primary transition-all outline-none font-medium bg-transparent">
                <option>B.Sc. Nursing (Degree)</option>
                <option>G.N.M. (Diploma)</option>
              </select>
            </div>
            <button className="w-full bg-accent text-white py-5 text-[11px] font-bold uppercase tracking-widest shadow-xl shadow-yellow-200/50 hover:bg-yellow-500 transition-all transform hover:-translate-y-1">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

const Placements = () => (
  <section id="placements" className="section-container bg-white">
    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
      <div className="max-w-2xl">
        <SectionHeading subtitle="Providing a launchpad for professional nursing careers across India.">
          Clinical Ties & Alumni
        </SectionHeading>
      </div>
      <div className="pb-16 flex items-center gap-10">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">50+</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2">Hospitals</span>
        </div>
        <div className="w-[1px] h-12 bg-subtle" />
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-primary">500+</span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2">Annual Placements</span>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-subtle mb-32">
      {['Apollo', 'Fortis', 'Medanta', 'AIIMS'].map((hosp, idx) => (
        <div key={hosp} className={`h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all font-serif italic font-bold text-2xl text-slate-300 border-r last:border-r-0 border-subtle hover:bg-slate-50 cursor-default bg-white`}>
          {hosp}
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-3 gap-0 border border-subtle bg-white">
      {[1, 2, 3].map((i, idx) => (
        <div key={i} className={`p-16 relative group hover:bg-slate-50 transition-colors ${idx !== 2 ? 'border-r border-subtle' : ''}`}>
          <span className="absolute top-8 left-8 text-6xl serif italic text-primary opacity-10 group-hover:opacity-20 transition-opacity">“</span>
          <p className="text-slate-600 text-sm italic mb-12 relative z-10 font-medium leading-relaxed">
            "The clinical exposure at Nilesh College helped me build confidence. The faculty support was exceptional during my residency at AIIMS."
          </p>
          <div className="flex items-center gap-5 mt-auto">
            <div className="w-14 h-14 bg-slate-100 p-1 flex items-center justify-center">
               <div className="w-full h-full bg-primary/10 rounded-full" />
            </div>
            <div>
              <p className="font-bold text-primary uppercase text-[11px] tracking-widest">Alumni Profile {i}</p>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-tighter">Senior Nursing Officer</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-white min-h-[400px] flex flex-col">
    <div className="flex-1 flex flex-col md:flex-row border-t border-slate-800">
      <div className="flex-[2] p-12 md:p-24 border-r border-slate-800">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center scale-75">
            <div className="w-8 h-8 border-2 border-white rotate-45 flex items-center justify-center">
              <div className="w-4 h-4 bg-accent"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="serif font-bold text-3xl leading-none italic">Nilesh College</span>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">Of Nursing, Rajasthan</span>
          </div>
        </div>
        <p className="text-slate-400 text-sm max-w-sm mb-12 leading-relaxed">
          Recognized by RNC and affiliated with RUHS. We are dedicated to providing world-class nursing education and creating healthcare leaders for a healthier nation.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Facebook size={20} /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Instagram size={20} /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"><Linkedin size={20} /></a>
        </div>
      </div>
      
      <div className="flex-1 grid grid-cols-1 divide-y divide-slate-800">
        <div className="p-12 md:p-16">
          <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold block mb-8">Contact Information</span>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="text-accent shrink-0" size={20} />
              <span className="text-slate-200">Main Road, Opp. Medical City, Jaipur, Rajasthan</span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-accent shrink-0" size={20} />
              <span className="text-slate-200">+91 9461032002</span>
            </li>
            <li className="flex gap-4">
              <Mail className="text-accent shrink-0" size={20} />
              <span className="text-slate-200">info@nileshcollege.ac.in</span>
            </li>
          </ul>
        </div>
        <div className="p-12 md:p-16 group cursor-pointer hover:bg-slate-800 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold block mb-2">Academics</span>
              <span className="text-xl serif italic text-white underline decoration-accent decoration-2 underline-offset-8">Download Prospectus</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
              <ArrowRight size={24} className="rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-black py-8 px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold text-slate-600 tracking-[0.3em]">
      <p>© 2024 Nilesh College of Nursing. RNC Recognized Institute.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Compliance</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Facilities />
        <Admission />
        <Placements />
      </main>
      <Footer />
    </div>
  );
}
