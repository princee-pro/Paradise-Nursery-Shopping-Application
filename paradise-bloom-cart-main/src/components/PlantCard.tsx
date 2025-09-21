import React from 'react';
import { Plant } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(plant.id);

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(plant);
    }
  };

  return (
    <Card className="glass-card hover:shadow-elevated transition-all duration-500 group overflow-hidden border-glass-border/30">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={plant.image} 
            alt={plant.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3">
            <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {plant.category}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {plant.name}
          </h3>
          <p className="text-2xl font-bold text-primary">
            ${plant.price.toFixed(2)}
          </p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {plant.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={inCart}
          className={`w-full transition-all duration-300 ${
            inCart 
              ? 'bg-success hover:bg-success text-success-foreground cursor-not-allowed' 
              : 'btn-hero'
          }`}
        >
          {inCart ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart
            </>
          ) : (
            'Add to Cart'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};