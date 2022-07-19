import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CustomSkeleton = (props: SkeletonProps): JSX.Element => {
    return (
        <Skeleton baseColor="#4b4b4b" highlightColor="#696868" {...props}/>
    )
}