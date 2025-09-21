import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-background.jpg';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <Leaf className="w-16 h-16 text-primary animate-float" />
              <Sparkles className="w-6 h-6 text-primary-glow absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Paradise Nursery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Bring Nature Home 🌱
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl border-glass-border/30">
            <p className="text-lg text-card-foreground leading-relaxed">
              Transform your living space into a green oasis with our curated collection of premium houseplants. 
              From air-purifying wonders to aromatic herbs and stunning decorative plants, we bring you 
              the finest selections to enhance your home's atmosphere and your well-being.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-xl border-glass-border/20 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Air Purifying</h3>
              <p className="text-sm text-muted-foreground">Clean your air naturally</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border-glass-border/20 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Carefully selected plants</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border-glass-border/20 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Easy Care</h3>
              <p className="text-sm text-muted-foreground">Perfect for all skill levels</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="btn-hero text-lg px-12 py-6 rounded-xl font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary-glow rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 delay-1000" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-glow rounded-full animate-pulse opacity-50 delay-500" />
    </div>
  );
};

export default LandingPage;