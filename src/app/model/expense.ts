import { Category } from "./category";

export interface Expense {
    id: number;
    amount: number;
    description: string;
    date: string;
    category: Category;
}
