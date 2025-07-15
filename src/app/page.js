// app/page.js

'use client'; 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import {
  Gift,
  Link,
  Sparkles,
  Heart,
  MessageSquare,
  Github,
  Instagram,
  Facebook,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';

import { AnimatedPillButton,AnimatedSquareButton, AnimatedGhostButton, AnimatedIconButton, AnimatedPressButton } from '../components/buttons';
import { AnimatedInput, AnimatedSegmentedControl, AnimatedToggle, AnimatedDropdown } from '../components/inputs';
import { AnimatedTabView } from '../components/tabs';
import AnimatedZarf from '../components/zarf';
import Image from 'next/image';


// Animation wrapper for sections
const AnimatedSection = ({ children, className, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.section>
);

// Main Landing Page Component
export default function ZarfLandingPage() {
  const [pricingPlan, setPricingPlan] = useState('monthly');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
  ];
  
  const pricingOptions = [
      { value: 'single', label: 'Single Zarf' },
      { value: 'monthly', label: 'Subscription' }
  ];
  
  const tabContent = {
    gift: (
        <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
            <Image src="https://placehold.co/600x400/e2e8f0/334155?text=Birthday+Surprise" alt="Birthday Surprise" className="w-full md:w-1/2 rounded-lg object-cover" width={600} height={400} />
            <div className="text-left">
                <h3 className="text-2xl font-semibold">Say Happy Birthday</h3>
                <p className="mt-2 text-zinc-600">Attach a gift card link or just send your best wishes in a format that feels as special as a real present.</p>
            </div>
        </div>
    ),
    thanks: (
        <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
            <Image src="https://placehold.co/600x400/e0f2fe/0891b2?text=Thank+You+Note" alt="Thank You Note" className="w-full md:w-1/2 rounded-lg object-cover" width={600} height={400} />
             <div className="text-left">
                <h3 className="text-2xl font-semibold">Show Your Gratitude</h3>
                <p className="mt-2 text-zinc-600">A simple &quot;thank you&quot; can mean the world. Make it memorable with a personalized Zarf.</p>
            </div>
        </div>
    ),
    moment: (
        <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
            <Image src="https://placehold.co/600x400/f3e8ff/7e22ce?text=Just+Because" alt="A fun moment" className="w-full md:w-1/2 rounded-lg object-cover" width={600} height={400} />
             <div className="text-left">
                <h3 className="text-2xl font-semibold">Share a Little Joy</h3>
                <p className="mt-2 text-zinc-600">Sometimes the best reason is no reason at all. Send a funny memory, an inside joke, or a simple &quot;thinking of you.&quot;</p>
            </div>
        </div>
    )
  };

  return (
    <div className="text-zinc-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-blue-600 h-7 w-7" />
              <span className="font-bold text-2xl tracking-tighter">Zarf</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-zinc-600 hover:text-blue-600 transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <NextLink href="/dashboard">
                <AnimatedSquareButton>Get Started</AnimatedSquareButton>
              </NextLink>
            </div>
            <div className="md:hidden">
                <AnimatedIconButton Icon={isMenuOpen ? X : Menu} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-6 pb-4 space-y-4 border-t border-zinc-200"
          >
            {navLinks.map(link => (
                <a key={link.name} href={link.href} className="block text-zinc-600 hover:text-blue-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
            <NextLink href="/dashboard">
              <AnimatedPillButton className="w-full">Get Started</AnimatedPillButton>
            </NextLink>
          </motion.div>
        )}
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden text-center py-20 md:py-32 lg:py-40 px-6">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] max-w-[80rem] -mt-48">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/15 blur-[100px]" />
                  <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-rose-500/15 blur-[100px]" />
                </div>
              </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              The Art of Digital Gifting. <br />
              <span className="text-blue-600">Sealed in a Zarf.</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-zinc-600">
              Craft beautiful, animated messages for the people you care about. Share a moment, a memory, or a simple thought in a way they&apos;ll never forget.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <NextLink href="/dashboard">
                <AnimatedPillButton>Create a Zarf <ArrowRight className="inline ml-2 h-4 w-4" /></AnimatedPillButton>
              </NextLink>
              <AnimatedGhostButton>See an Example</AnimatedGhostButton> 
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
            className="mt-20 flex justify-center relative"
          >
            <AnimatedZarf />
          </motion.div>
        </section>

        <AnimatedSection id="features" className="py-20 md:py-28 bg-zinc-50 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple to create. A joy to receive.</h2>
            <p className="mt-4 text-lg text-zinc-600">In just three simple steps.</p>
          </div>
          <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                <MessageSquare size={32} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">1. Craft Your Message</h3>
              <p className="mt-2 text-zinc-600">Write your text, add an image or a GIF, and choose a unique animation style.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                <Sparkles size={32} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">2. Seal the Zarf</h3>
              <p className="mt-2 text-zinc-600">Your message is encapsulated in a beautiful, interactive digital envelope.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                <Link size={32} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">3. Share the Link</h3>
              <p className="mt-2 text-zinc-600">You get a special link to send. The magic unfolds when they open it.</p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection id="use-cases" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">For any and every occasion.</h2>
                <p className="mt-4 text-lg text-zinc-600">From grand gestures to simple hellos.</p>
            </div>
            <div className="max-w-4xl mx-auto mt-12">
                <AnimatedTabView
                    tabs={[
                        { id: 'gift', label: 'A Special Gift', icon: <Gift /> },
                        { id: 'thanks', label: 'A Heartfelt Thanks', icon: <Heart /> },
                        { id: 'moment', label: 'A Shared Moment', icon: <Sparkles /> }
                    ]}
                    defaultTab="gift"
                    content={tabContent}
                />
            </div>
        </AnimatedSection>
        
        <AnimatedSection id="pricing" className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Choose your plan.</h2>
            <p className="mt-4 text-lg text-zinc-600">One-time purchase or a subscription for unlimited creativity.</p>
            <div className="mt-8 flex justify-center">
              <AnimatedSegmentedControl
                options={pricingOptions}
                value={pricingPlan}
                onChange={setPricingPlan}
              />
            </div>
          </div>
          <div className="max-w-md mx-auto mt-12">
            {pricingPlan === 'single' ? (
                <div className="border border-zinc-200 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-semibold">One-Time Zarf</h3>
                    <p className="mt-2 text-zinc-500">Perfect for a single special occasion.</p>
                    <p className="my-8 text-5xl font-bold tracking-tight">5 <span className="text-xl font-medium text-zinc-500">EGP</span></p>
                    <ul className="space-y-3 text-left text-zinc-600">
                        <li className="flex items-center"><Sparkles className="h-5 w-5 mr-3 text-blue-500"/>One shareable Zarf link</li>
                        <li className="flex items-center"><Sparkles className="h-5 w-5 mr-3 text-blue-500"/>All animation styles</li>
                        <li className="flex items-center"><Sparkles className="h-5 w-5 mr-3 text-blue-500"/>Link active for 1 year</li>
                    </ul>
                    <AnimatedPressButton className="w-full mt-8">Purchase for 5 EGP</AnimatedPressButton>
                </div>
            ) : (
                <div className="border-2 border-blue-600 rounded-2xl p-8 text-center relative">
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">BEST VALUE</span>
                    </div>
                    <h3 className="text-xl font-semibold">Zarf Unlimited</h3>
                    <p className="mt-2 text-zinc-500">For the frequent gifter and creator.</p>
                    <p className="my-8 text-5xl font-bold tracking-tight">50 <span className="text-xl font-medium text-zinc-500">EGP / month</span></p>
                     <ul className="space-y-3 text-left text-zinc-600">
                        <li className="flex items-center"><Sparkles className="h-5 w-5 mr-3 text-blue-500"/><strong>Unlimited</strong> Zarf links</li>
                        <li className="flex items-center"><Sparkles className="h-5 w-5 mr-3 text-blue-500"/>All animation styles</li>
                        <li className="flex items-center"><Sparkles className="h-5 w-5 mr-3 text-blue-500"/>Links never expire</li>
                    </ul>
                    <AnimatedPillButton className="w-full mt-8 bg-blue-600">Start Subscription</AnimatedPillButton>
                </div>
            )}
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto py-12 px-6 sm:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="flex items-center space-x-2">
                    <Sparkles className="text-blue-600 h-6 w-6" />
                    <span className="font-bold text-xl tracking-tighter">Zarf</span>
                </div>
                <div className="flex space-x-6 text-zinc-500">
                    <a href="#" className="hover:text-blue-600 transition-colors">About</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                </div>
                <div className="flex space-x-4">
                    <AnimatedIconButton Icon={Github} className="text-zinc-500"/>
                    <AnimatedIconButton Icon={Instagram} className="text-zinc-500"/>
                    <AnimatedIconButton Icon={Facebook} className="text-zinc-500"/>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-200 text-center text-zinc-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Zarf Inc. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}