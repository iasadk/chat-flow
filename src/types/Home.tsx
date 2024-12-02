import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface IBasic {
    title: string,
    description: string
}
export interface IFeatureCard extends IBasic {
    icon: ReactNode,

}

export interface IStepCard extends IBasic {
    number: number,
}

export interface IPricingCardProps extends IBasic {
    price: number | string;
    features: string[];
    highlighted?: boolean;
}


export interface ITestimonialCardProps {
    quote: string;
    author: string;
    company: string;
}

export interface IFAQItemProps {
    question: string;
    answer: string;
  }