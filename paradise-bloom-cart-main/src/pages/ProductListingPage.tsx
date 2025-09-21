import React from 'react';
import { Header } from '@/components/Header';
import { PlantCard } from '@/components/PlantCard';
import { plants, categories } from '@/data/plants';
import { Leaf } from 'lucide-react';

const ProductListingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Leaf className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold text-foreground">
              Our Plant Collection
            </h1>
            <Leaf className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium houseplants. 
            Each plant is chosen for its beauty, health benefits, and ease of care.
          </p>
        </div>

        {/* Products by Category */}
        <div className="space-y-16">
          {categories.map((category) => {
            const categoryPlants = plants.filter(plant => plant.category === category);
            
            return (
              <section key={category} className="space-y-6">
                {/* Category Header */}
                <div className="glass-card p-6 rounded-xl border-glass-border/30">
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">
                    {category} Plants
                  </h2>
                  <p className="text-muted-foreground">
                    {category === 'Air Purifying' && 'Natural air filters that improve your indoor environment'}
                    {category === 'Aromatic' && 'Fragrant plants that fill your space with natural scents'}
                    {category === 'Decorative' && 'Stunning statement plants that enhance your interior design'}
                  </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryPlants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Empty State or Additional Info */}
        {plants.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <Leaf className="w-16 h-16 text-muted-foreground mx-auto opacity-50" />
            <h3 className="text-xl font-semibold text-muted-foreground">
              No plants available
            </h3>
            <p className="text-muted-foreground">
              Check back soon for our latest collection!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductListingPage;