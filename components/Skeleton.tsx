import React from 'react';

interface SkeletonProps {
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
    <div className={`skeleton ${className}`} />
);

export const ProductCardSkeleton: React.FC = () => (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-100">
        <div className="skeleton skeleton-image mb-3" />
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-text w-3/4" />
        <div className="flex justify-between items-center mt-3">
            <div className="skeleton w-20 h-6 rounded" />
            <div className="skeleton w-10 h-10 rounded-xl" />
        </div>
    </div>
);

export const PageSkeleton: React.FC = () => (
    <div className="px-4 py-6 space-y-6">
        <div className="skeleton h-8 w-48 rounded-lg" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    </div>
);

export const CategorySkeleton: React.FC = () => (
    <div className="flex gap-4 overflow-hidden py-4">
        {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
                <div className="skeleton w-16 h-16 rounded-full" />
                <div className="skeleton w-12 h-4 rounded" />
            </div>
        ))}
    </div>
);

export const BannerSkeleton: React.FC = () => (
    <div className="skeleton h-[240px] md:h-[400px] rounded-3xl" />
);

export default Skeleton;
