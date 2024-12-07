"use client";
import { cardData } from "@/data/shopData";
import React, { useState } from "react";
import ShopSingleProducts from "./ShopSingleProducts";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import Availability from "./Availability";
import CategoryFilter from "./CategoryFilter";
import ShortFilter from "./ShortFilter";

const ShopProduct = () => {
  const [filteredProducts, setFilteredProducts] = useState(cardData);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handlePriceFilterChange = (products: typeof cardData) => {
    applyFilters(products, selectedBrands, selectedCategories);
  };

  const handleBrandFilterChange = (brands: string[]) => {
    setSelectedBrands(brands);
    applyFilters(null, brands, selectedCategories);
  };

  const handleCategoryFilterChange = (categories: string[]) => {
    setSelectedCategories(categories);
    applyFilters(null, selectedBrands, categories);
  };

  const handleSortChange = (sortOption: string) => {
    if (sortOption === "default") {
      applyFilters(null, selectedBrands, selectedCategories);
    } else {
      const sortedProducts = [...filteredProducts];

      if (sortOption === "low-to-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "high-to-low") {
        sortedProducts.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(sortedProducts);
    }
  };

  const applyFilters = (
    products: typeof cardData | null,
    brands: string[],
    categories: string[]
  ) => {
    let updatedProducts = cardData;

    // Apply brand filtering
    if (brands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        brands.includes(product.brand)
      );
    }

    // Apply category filtering
    if (categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        categories.includes(product.category)
      );
    }

    // Apply price filtering (if `products` is passed, it means price filter is active)
    if (products) {
      updatedProducts = updatedProducts.filter((product) =>
        products.some((p) => p.id === product.id)
      );
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <div>
       <ShortFilter onSortChange={handleSortChange} />
    <div className="flex gap-4 mt-5">
      <div className="basis-[35%]">
        <PriceFilter onFilterChange={handlePriceFilterChange} />
        <BrandFilter onFilterChange={handleBrandFilterChange} />
        <Availability />
        <CategoryFilter onFilterChange={handleCategoryFilterChange} />
      </div>
      <div className="basis-[65%]">
       
        <div className="max-h-[920px] overflow-x-auto hide-scrollbar">
          <ShopSingleProducts products={filteredProducts} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShopProduct;