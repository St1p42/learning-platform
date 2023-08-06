import type { Question } from "./Question";

export interface PassageModel {
    title: string
    passage: string
    questions: Question[]
}