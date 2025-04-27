
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import ArticleCard from '@/components/ui/article-card';
import { articles } from '@/data/articles';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from '@/components/ui/pagination';

const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const articlesPerPage = 6;
  
  // Get unique categories from articles
  const categories = ["All", ...Array.from(new Set(articles.map(article => article.category)))];
  
  // Handle category filter from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);
  
  // Filter articles based on category and search term
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  
  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-arogya-blue to-arogya-teal py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Articles & Resources</h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our collection of articles on mental wellness, therapy, and self-improvement
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative w-full md:max-w-sm">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-arogya-teal focus:border-transparent"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-arogya-teal">
                <Search className="w-5 h-5" />
              </button>
            </form>
            
            {/* Filter Toggle on Mobile */}
            <Button 
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden w-full flex items-center justify-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {showFilters ? "Hide Categories" : "Show Categories"}
            </Button>
          </div>
          
          {/* Categories Filter */}
          <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-wrap items-center justify-center gap-3`}>
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === activeCategory
                    ? 'bg-arogya-teal text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Articles */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Stay informed with our newest content on mental wellness"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredArticles.slice(0, 2).map((article, index) => (
              <ArticleCard 
                key={index}
                id={article.id}
                title={article.title}
                category={article.category}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                image={article.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* All Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title={`${activeCategory === 'All' ? 'Browse All Articles' : activeCategory + ' Articles'}`}
            subtitle={`${filteredArticles.length} articles to explore`}
          />
          
          {currentArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArticles.map((article, index) => (
                <ArticleCard 
                  key={index}
                  id={article.id}
                  title={article.title}
                  category={article.category}
                  excerpt={article.excerpt}
                  date={article.date}
                  readTime={article.readTime}
                  image={article.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  handleCategoryChange("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink 
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
