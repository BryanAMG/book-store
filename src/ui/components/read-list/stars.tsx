import { useState } from "react"
import { Star } from "../icons"
import cn from 'clsx'
import { useReadListStore } from "@/store/read-list"
type Props = {
    ISBN: string,
    currentRating: number,
    total?: number
}
export function StarsRating({ ISBN, currentRating, total = 5 }: Props) {
    const editStartRating = useReadListStore(store => store.editStartRating)
    const [hoverRating, setHoverRating] = useState(0)
    const totalStars = Array(total).fill(null).map((_, i) => i + 1)
    const handleClick = (stars: number) => {
        editStartRating({ ISBN, stars })
    }

    const handleMouseEnter = (rating: number) => {
        setHoverRating(rating)
    }

    const handleMouseLeave = () => setHoverRating(currentRating)

    return <div className="flex items-center ">
        {
            totalStars.map(num => (<button
                key={num}
                className={cn('px-1', num <= (hoverRating || currentRating) ? 'text-yellow-500' : 'text-white')}
                onClick={() => handleClick(num)}
                onMouseEnter={() => handleMouseEnter(num)}
                onMouseLeave={handleMouseLeave}
            >
                <Star />
            </button>))
        }

    </div>
}