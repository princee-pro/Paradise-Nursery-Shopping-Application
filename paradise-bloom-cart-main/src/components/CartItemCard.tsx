import React from 'react';
import { CartItem } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemCardProps {
  item: CartItem;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <Card className="glass-card border-glass-border/30 hover:shadow-glass transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          {/* Plant Image */}
          <div className="relative overflow-hidden rounded-lg flex-shrink-0">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 object-cover"
            />
          </div>

          {/* Plant Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground truncate">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              ${item.price.toFixed(2)} each
            </p>
            <p className="text-lg font-bold text-primary">
              ${subtotal.toFixed(2)}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 glass-card border-glass-border/30"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              <Minus className="w-3 h-3" />
            </Button>
            
            <span className="w-12 text-center font-semibold text-card-foreground">
              {item.quantity}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8 glass-card border-glass-border/30"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>

          {/* Delete Button */}
          <Button
            variant="destructive"
            size="icon"
            className="w-8 h-8 flex-shrink-0"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 className="w-3 h-3" />
            <span className="sr-only">Remove {item.name} from cart</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};