import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
    return (
        <div className="flex items-center justify-center py-16">
            <LoadingSpinner />
        </div>
    );
}