import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl glass-dark p-8 md:p-12 rounded-2xl border border-white/10"
        >
          <h2 className="text-xl md:text-2xl text-accent-cyan font-mono mb-4 tracking-widest uppercase">
            Hello World, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-sans leading-tight">
            Nandhakumar S
          </h1>
          <div className="text-2xl md:text-4xl font-semibold mb-8 text-slate-300 h-20 md:h-12">
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'React Developer',
                2000,
                'JavaScript Developer',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </div>
          
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            I craft immersive, modern, and engaging web experiences using cutting-edge frontend technologies.
          </p>
          
          <div className="flex gap-6">
            <a href="#projects" className="px-8 py-3 bg-accent-cyan/20 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black hover:shadow-neon-cyan transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-sm glass">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 text-white border border-white/20 hover:border-accent-purple hover:text-accent-purple transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-sm glass-dark">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
