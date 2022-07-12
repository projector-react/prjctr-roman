import { ComponentType } from 'react';
import { Category, Direction, Format, Level } from "../types/filter";

export function getCategoryTitle (category: Category) {
    switch(category) {
        case Category.ALL:
            return "Всі"
        case Category.FAVORITE:
            return "Обране"
        case Category.HISTORY:
            return "Історія"
        case Category.POPULAR:
            return "Популярне"
        case Category.RESTREAM:
            return "Restream"
        case Category.WITHOUT_PAYMENT:
            return "Без оплати"
    }
}

export function getDirectionTitle (direction: Direction) {
    switch(direction) {
        case Direction.ALL:
            return "Всі"
        case Direction.ADVERTISING:
            return "Advertising"
        case Direction.DEV_DATASCIENCE:
            return "Dev & Data Science"
        case Direction.GRAPHICS:
            return "Graphics"
        case Direction.HUMANUTARIUM:
            return "Humanitarium"
        case Direction.INTERFACE_DESIGN:
            return "Interface Design"
        case Direction.MANAGEMENT:
            return "Management"
        case Direction.MARKETING:
            return "Marketing"
    }
}

export function getFormatTitle (format: Format) {
    switch(format) {
        case Format.ALL:
            return "Всі"
        case Format.CONFERENCE:
            return "Конференція"
        case Format.INTERVIEW:
            return "Інтерв'ю"
        case Format.TUTORIAL:
            return "Туторіал"
        case Format.VIDEO_LESSON:
            return "Відеолекції"
        case Format.PLAYLIST:
            return "Плейліст"
    }
}

export function getLevelTitle (level: Level): string {
    switch(level) {
        case Level.ANY:
            return "Всі"
        case Level.BEGINNER:
            return "Початківець"
        case Level.SPECIALIST:
            return "Спеціаліст"
    }
}

function getMapEnum<V> (EnumArray: V[], getTitleFc: (payload: V) => string) {
    return EnumArray.map((key) => [key, getTitleFc(key)])
}

export const categories = getMapEnum([
    Category.ALL,
    Category.FAVORITE,
    Category.HISTORY,
    Category.POPULAR,
    Category.RESTREAM,
    Category.WITHOUT_PAYMENT
], getCategoryTitle)

export const directions = getMapEnum([
    Direction.ALL,
    Direction.ADVERTISING,
    Direction.DEV_DATASCIENCE,
    Direction.GRAPHICS,
    Direction.HUMANUTARIUM,
    Direction.INTERFACE_DESIGN,
    Direction.MANAGEMENT,
    Direction.MARKETING
], getDirectionTitle)

export const formats = getMapEnum([
    Format.ALL,
    Format.CONFERENCE,
    Format.INTERVIEW,
    Format.TUTORIAL,
    Format.VIDEO_LESSON,
    Format.PLAYLIST
], getFormatTitle)

export const levels = getMapEnum([
    Level.ANY,
    Level.BEGINNER,
    Level.SPECIALIST
], getLevelTitle)

export function getDisplayName<T>(WrappedComponent: ComponentType<T>) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
