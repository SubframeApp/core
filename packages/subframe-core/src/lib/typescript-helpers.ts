// From https://stackoverflow.com/questions/43159887/make-a-single-property-optional-in-typescript
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>
