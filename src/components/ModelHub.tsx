"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, ArrowUpRight, ChevronLeft, ChevronRight, PackageOpen, Link as LinkIcon, Database, Zap } from "lucide-react";
import clsx from "clsx";
import { MODELS, ModelType, TagType } from "@/data/models";
import { t, modelHub as modelHubT } from "@/lib/translations/site";

const MODEL_TYPES: ModelType[] = ["全部", "对话", "生图", "嵌入", "重排序", "语音", "视频"];
const typeKeys = ['all', 'chat', 'image', 'embedding', 'rerank', 'audio', 'video'] as const;
const typeToFilter: Record<string, ModelType> = { all: '全部', chat: '对话', image: '生图', embedding: '嵌入', rerank: '重排序', audio: '语音', video: '视频' };
// Extract unique tags from the dataset dynamically
const TAGS: TagType[] = Array.from(new Set(MODELS.flatMap(m => m.tags)));
const ITEMS_PER_PAGE = 8;

export function ModelHub({ locale }: { locale: string }) {
  const [selectedType, setSelectedType] = useState<ModelType>("全部");
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredModelId, setHoveredModelId] = useState<string | null>(null);
  const s = t(modelHubT, locale);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedTags, searchQuery]);

  const toggleTag = (tag: TagType) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredModels = useMemo(() => {
    return MODELS.filter((model) => {
      // 1. Filter by Type
      if (selectedType !== "全部" && model.type !== selectedType) return false;
      
      // 2. Filter by Search Query
      if (searchQuery && !model.name.toLowerCase().includes(searchQuery.toLowerCase()) && !model.developer.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // 3. Filter by Tags (Must have ALL selected tags)
      if (selectedTags.length > 0) {
        const hasAllTags = selectedTags.every(tag => (model.tags as string[]).includes(tag));
        if (!hasAllTags) return false;
      }

      return true;
    });
  }, [selectedType, selectedTags, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredModels.length / ITEMS_PER_PAGE);
  const paginatedModels = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredModels.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredModels, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPaginationGroup = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">{s.title}</h1>
        <p className="text-zinc-400">{s.subtitle}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar / Top Filters */}
        <div className="w-full lg:w-64 shrink-0 space-y-8 sticky top-24 self-start z-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder={s.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-elevated border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-zinc-300">
              <SlidersHorizontal className="w-4 h-4" />
              {s.modelType}
            </div>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {typeKeys.map((key) => {
                const filterValue = typeToFilter[key];
                return (
                <button
                  key={key}
                  onClick={() => setSelectedType(filterValue)}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all text-left",
                    selectedType === filterValue
                      ? "bg-blue-600/10 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(var(--theme-glow-rgb),0.15)]"
                      : "bg-white/5 text-zinc-400 hover:bg-white/10 border border-transparent"
                  )}
                >
                  {s.types[key]}
                </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-semibold text-zinc-300">{s.useCases}</div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={clsx(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
                    selectedTags.includes(tag)
                      ? "bg-violet-600/20 text-violet-300 border-violet-500/30 shadow-[0_0_10px_rgba(var(--theme-glow-rgb),0.15)]"
                      : "bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Model Grid */}
        <div className="flex-1 min-h-[600px] flex flex-col relative z-0">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-zinc-500 text-sm font-medium">
              {s.found} <span className="text-white px-1">{filteredModels.length}</span> {s.models}
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
            <AnimatePresence mode="popLayout">
              {paginatedModels.map((model, index) => {
                const isHovered = hoveredModelId === model.id;
                
                return (
                 <motion.div
                   key={model.id}
                   layout="position"
                   initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)", y: 10 }}
                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                   exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                   transition={{ 
                     opacity: { duration: 0.2 },
                     layout: { type: "spring", bounce: 0, duration: 0.4 },
                     default: { duration: 0.3 }
                   }}
                   onMouseEnter={() => setHoveredModelId(model.id)}
                   onMouseLeave={() => setHoveredModelId(null)}
                   className={clsx(
                     "group relative bg-card border rounded-2xl flex flex-col transition-all overflow-hidden w-full",
                     isHovered
                      ? "border-blue-500/50 shadow-[0_4px_30px_rgba(var(--theme-glow-rgb),0.15)] z-20"
                      : "border-white/10 z-10"
                   )}
                 >
                  <div className="p-5">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-blue-500/50 transition-colors duration-500" />
                    
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 font-bold text-lg group-hover:border-blue-500/30 transition-colors">
                          {model.developer.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors flex items-center gap-1 line-clamp-1">
                            {model.name}
                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                          </h3>
                          <p className="text-xs text-zinc-500">{model.developer}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {model.contextLength !== "N/A" && (
                          <span className="shrink-0 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-300">
                            {model.contextLength}
                          </span>
                        )}
                        <span className="shrink-0 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-zinc-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors">
                          {model.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className={clsx(
                      "text-sm text-zinc-400 mb-6 flex-1 leading-relaxed transition-all",
                      isHovered ? "line-clamp-none max-h-[200px]" : "line-clamp-2 max-h-[40px]"
                    )}>
                      {model.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {model.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[11px] bg-secondary text-zinc-300 border border-transparent group-hover:border-white/5 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {!isHovered && (
                      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <div>
                          <div className="text-[10px] text-zinc-500 mb-0.5 font-medium">{s.inputPrice}</div>
                          <div className="text-sm font-semibold text-zinc-300">{model.inputPrice}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-zinc-500 mb-0.5 font-medium">{s.outputPrice}</div>
                          <div className="text-sm font-semibold text-zinc-300">{model.outputPrice}</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Expanded Hover Area */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-border/50 bg-surface/30"
                      >
                        <div className="p-5 space-y-6">
                          {/* API Endpoints */}
                          <div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 mb-3 uppercase tracking-wider">
                              <LinkIcon className="w-3 h-3 text-blue-400" />
                              Supported API Endpoints
                            </div>
                            <div className="space-y-2">
                              {model.endpoints.map((ep, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-surface-elevated border border-border/50 rounded-md px-3 py-2">
                                  <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                                    <span className="text-xs font-mono text-zinc-400">{ep.provider}:</span>
                                    <span className="text-xs font-mono text-zinc-200">{ep.path}</span>
                                  </div>
                                  <span className="text-[10px] font-bold text-zinc-500">{ep.method}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Pricing Table */}
                          <div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300 mb-3 uppercase tracking-wider">
                              <Database className="w-3 h-3 text-blue-400" />
                              Enterprise Pricing (按量计费)
                            </div>
                            <div className="overflow-x-auto rounded-lg border border-border/50">
                              <table className="w-full text-left text-xs">
                                <thead className="bg-surface-elevated text-zinc-400 border-b border-border/50">
                                  <tr>
                                    <th className="px-3 py-2 font-medium">Group</th>
                                    <th className="px-3 py-2 font-medium">Input / 1M</th>
                                    <th className="px-3 py-2 font-medium">Output / 1M</th>
                                    <th className="px-3 py-2 font-medium flex items-center gap-1">
                                      <Zap className="w-3 h-3 text-yellow-500" /> Cache Read
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="text-zinc-300 divide-y divide-border/30">
                                  <tr>
                                    <td className="px-3 py-2">
                                      <div className="font-medium text-white">defaultGroup</div>
                                      <div className="text-[10px] text-zinc-500">{s.officialPrice}</div>
                                    </td>
                                    <td className="px-3 py-2 font-mono">{model.inputPrice}</td>
                                    <td className="px-3 py-2 font-mono">{model.outputPrice}</td>
                                    <td className="px-3 py-2 font-mono text-blue-400">{model.cacheInputPrice}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                 </motion.div>
                );
              })}
            </AnimatePresence>

            {filteredModels.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-32 text-center flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <PackageOpen className="w-8 h-8 text-zinc-600" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{s.noResults}</h3>
                <p className="text-sm text-zinc-500 max-w-sm mb-6">{s.noResultsDesc}</p>
                <button 
                  onClick={() => { setSelectedType("全部"); setSelectedTags([]); setSearchQuery(""); }}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-zinc-300 text-sm transition-all"
                >
                  {s.clearFilters}
                </button>
              </motion.div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2 pb-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label={s.prevPage}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1">
                {getPaginationGroup().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' && handlePageChange(page)}
                    disabled={page === '...'}
                    className={clsx(
                      "w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all",
                      page === currentPage
                        ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(var(--theme-glow-rgb),0.3)]"
                        : page === '...'
                        ? "text-zinc-500 cursor-default"
                        : "text-zinc-400 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                aria-label={s.nextPage}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
