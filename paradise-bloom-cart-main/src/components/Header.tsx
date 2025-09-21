import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onCartClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    } else {
      navigate('/cart');
    }
  };

  return (
    <header className="glass-header sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo and Company Name */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={handleLogoClick}
        >
          <div className="relative">
            <Leaf className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Paradise Nursery
            </h1>
            <p className="text-sm text-muted-foreground">Bring Nature Home 🌱</p>
          </div>
        </div>

        {/* Cart Icon with Counter */}
        <Button 
          variant="outline" 
          size="icon" 
          className="relative glass-card border-glass-border/30 hover:border-primary/50 transition-all duration-300"
          onClick={handleCartClick}
        >
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold animate-glow">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Shopping cart with {totalItems} items</span>
        </Button>
      </div>
    </header>
  );
};