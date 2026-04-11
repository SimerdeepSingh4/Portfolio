import React from "react";
import { motion } from "framer-motion";
import { Search, Grid3X3, List, Filter, SortAsc, SortDesc } from "lucide-react";

const ProjectControls = React.memo(({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  selectedTech,
  setSelectedTech,
  allTechnologies,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder
}) => {
  return (
    <motion.div
      className="mb-8 space-y-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative flex-grow max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-colors ${viewMode === "grid"
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:bg-muted border border-border"
              }`}
            aria-label="Grid view"
          >
            <Grid3X3 size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-colors ${viewMode === "list"
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:bg-muted border border-border"
              }`}
            aria-label="List view"
          >
            <List size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Technology Filter */}
        <div className="relative w-full md:w-auto">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full pl-10 pr-8 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Technologies</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Controls */}
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-3 pr-8 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="title">Title</option>
            </select>
          </div>
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="p-2 bg-background hover:bg-muted border border-border rounded-lg transition-colors"
            aria-label="Toggle sort order"
          >
            {sortOrder === "asc" ? <SortAsc size={18} /> : <SortDesc size={18} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default ProjectControls;
