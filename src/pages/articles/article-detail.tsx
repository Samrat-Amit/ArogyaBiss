import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag, Clock } from 'lucide-react';
import { articles } from '@/data/articles';

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  
  // Find the article with the matching ID
  const article = articles.find((article) => article.id === articleId);
  
  useEffect(() => {
    // If article doesn't exist, redirect to articles page
    if (!article && articleId) {
      navigate('/articles', { replace: true });
    }
    
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [article, articleId, navigate]);
  
  // If article is loading or not found, show loading state
  if (!article) {
    return (
      <div className="container-custom py-16">
        <div className="flex justify-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-96 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-64 mb-12"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-12"></div>
          </div>
        </div>
      </div>
    );
  }
  
  // Determine related articles (same category, excluding current article)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 2);
  
  return (
    <>
      {/* Hero Section with Image Background */}
      <div className="relative h-80 md:h-96 bg-gradient-to-br from-arogya-blue to-arogya-teal overflow-hidden">
        {article.image && (
          <img 
            src={article.image} 
            alt={article.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/50 to-transparent"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-12 text-white">
          <Link to="/articles" className="flex items-center text-white/80 hover:text-white mb-4 transition-colors w-fit">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
          <span className="inline-block px-3 py-1 bg-arogya-teal/20 text-white rounded-full text-sm font-medium mb-3 backdrop-blur-sm">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">{article.title}</h1>
          <div className="flex flex-wrap items-center text-white/80 gap-x-4 gap-y-2">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime}
            </div>
            <div>
              By {article.author}
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">{article.excerpt}</p>
            <div className="space-y-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          {/* Category Tag */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-arogya-teal" />
              <span className="font-medium text-gray-700">Category:</span>
              <Link 
                to={`/articles?category=${article.category}`}
                className="text-arogya-teal hover:text-arogya-teal-dark transition-colors"
              >
                {article.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((relatedArticle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                  {relatedArticle.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-grow">
                    <span className="inline-block px-3 py-1 bg-arogya-teal/10 text-arogya-teal rounded-full text-xs font-medium mb-3">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      <Link to={`/articles/${relatedArticle.id}`} className="hover:text-arogya-teal transition-colors">
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedArticle.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-xs mt-auto">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{relatedArticle.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleDetail;
