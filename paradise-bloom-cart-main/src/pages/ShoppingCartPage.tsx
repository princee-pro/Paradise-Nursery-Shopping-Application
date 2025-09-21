import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CartItemCard } from '@/components/CartItemCard';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, ArrowLeft, CreditCard, Leaf } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ShoppingCartPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalCost, clearCart } = useCart();

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout Successful! 🌱",
      description: `Thank you for your order of ${totalItems} plants. Your green oasis awaits!`,
    });
    clearCart();
    setTimeout(() => navigate('/'), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <Header />
        
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="glass-card p-12 rounded-2xl border-glass-border/30">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-50" />
              <h1 className="text-3xl font-bold text-card-foreground mb-4">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground mb-8 text-lg">
                Looks like you haven't added any plants to your cart yet. 
                Explore our collection to start building your green paradise!
              </p>
              <Button 
                onClick={handleContinueShopping}
                className="btn-hero px-8 py-3"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Start Shopping
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8 space-y-4">
          <Button 
            variant="ghost" 
            onClick={handleContinueShopping}
            className="mb-4 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
          
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Shopping Cart</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Review your selected plants and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Plants ({totalItems} items)
            </h2>
            
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-glass-border/30 sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Summary Details */}
                <div className="space-y-4">
                  <div className="flex justify-between text-card-foreground">
                    <span>Total Items:</span>
                    <span className="font-semibold">{totalItems}</span>
                  </div>
                  
                  <div className="flex justify-between text-card-foreground">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${totalCost.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tax:</span>
                    <span>Calculated at checkout</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold text-primary">
                    <span>Total:</span>
                    <span>${totalCost.toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleCheckout}
                    className="w-full btn-hero py-3"
                    size="lg"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </Button>
                  
                  <Button 
                    onClick={handleContinueShopping}
                    variant="outline"
                    className="w-full glass-card border-glass-border/50"
                    size="lg"
                  >
                    Continue Shopping
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-4 text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    🚚 Free shipping on all orders
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🌱 30-day plant guarantee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    🔒 Secure checkout
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCartPage;