import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, Zap, BarChart, Users, Lock } from 'lucide-react'
import { IFAQItemProps, IFeatureCard, IPricingCardProps, IStepCard, ITestimonialCardProps } from '@/types/Home'
import Container from '@/components/custom/Container'

export default function LandingPage() {
  return (
    <Container className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageCircle className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">ChatFlow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link> */}
          
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Powerful Chatbots with ChatFlow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Engage your audience, automate conversations, and boost your business with our intuitive chatbot platform.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started for Free</Button>
                <Button variant="outline">Book a Demo</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Easy to Use"
                description="Intuitive drag-and-drop interface for creating chatbots without coding."
              />
              <FeatureCard
                icon={<BarChart className="h-10 w-10 text-primary" />}
                title="Analytics"
                description="Detailed insights and performance metrics for your chatbots."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Multi-platform"
                description="Deploy your chatbots on websites, Facebook, WhatsApp, and more."
              />
              <FeatureCard
                icon={<Lock className="h-10 w-10 text-primary" />}
                title="Secure"
                description="Enterprise-grade security to protect your data and conversations."
              />
              <FeatureCard
                icon={<MessageCircle className="h-10 w-10 text-primary" />}
                title="AI-Powered"
                description="Leverage advanced AI for natural language processing and understanding."
              />
              <FeatureCard
                icon={<CheckCircle className="h-10 w-10 text-primary" />}
                title="Integrations"
                description="Connect with your favorite tools and CRM systems seamlessly."
              />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                number={1}
                title="Design Your Bot"
                description="Use our intuitive builder to create your chatbot's flow and responses."
              />
              <StepCard
                number={2}
                title="Train and Test"
                description="Refine your bot's responses and test it in a sandbox environment."
              />
              <StepCard
                number={3}
                title="Deploy and Engage"
                description="Launch your bot on multiple platforms and start engaging with your audience."
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter"
                price="$29"
                description="Perfect for small businesses"
                features={[
                  "1,000 monthly active users",
                  "Basic bot builder",
                  "Website integration",
                  "Email support"
                ]}
              />
              <PricingCard
                title="Pro"
                price="$99"
                description="Ideal for growing companies"
                features={[
                  "10,000 monthly active users",
                  "Advanced bot builder",
                  "Multi-platform integration",
                  "Priority support"
                ]}
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="For large-scale operations"
                features={[
                  "Unlimited monthly active users",
                  "Custom AI model training",
                  "Dedicated account manager",
                  "24/7 phone support"
                ]}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="ChatFlow has revolutionized our customer service. We've seen a 40% increase in customer satisfaction!"
                author="Jane Doe"
                company="Tech Innovators Inc."
              />
              <TestimonialCard
                quote="The ease of use and powerful features make ChatFlow a game-changer for our marketing efforts."
                author="John Smith"
                company="Global Retail Co."
              />
              <TestimonialCard
                quote="We've been able to scale our support operations effortlessly with ChatFlow. Highly recommended!"
                author="Emily Brown"
                company="SaaS Solutions Ltd."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem
                question="Do I need coding skills to use ChatFlow?"
                answer="No, ChatFlow is designed to be user-friendly and doesn't require any coding skills. Our drag-and-drop interface makes it easy for anyone to create powerful chatbots."
              />
              <FAQItem
                question="Can I integrate ChatFlow with my existing systems?"
                answer="Yes, ChatFlow offers a wide range of integrations with popular CRM systems, marketing tools, and other business applications. We also provide APIs for custom integrations."
              />
              <FAQItem
                question="Is there a free trial available?"
                answer="Yes, we offer a 14-day free trial on all our plans. You can test out all the features and see how ChatFlow can benefit your business before committing to a paid plan."
              />
              <FAQItem
                question="How secure is my data with ChatFlow?"
                answer="We take security very seriously. ChatFlow uses enterprise-grade encryption and follows best practices for data protection. We are also GDPR compliant and offer data residency options for enterprise customers."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Customer Engagement?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of businesses already using ChatFlow to create powerful, engaging chatbots.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started for Free</Button>
                <Button size="lg" variant="outline">Book a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 ChatFlow. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </Container>
  )
}

function FeatureCard({ icon, title, description }: IFeatureCard) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: IStepCard) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

function PricingCard({ title, price, description, features, highlighted = false }: IPricingCardProps) {
  return (
    <div className={`flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${highlighted ? 'ring-2 ring-primary' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-4xl font-bold mb-2">{price}</div>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`mt-auto ${highlighted ? '' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}>
        Choose Plan
      </Button>
    </div>
  )
}

function TestimonialCard({ quote, author, company }: ITestimonialCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <blockquote className="text-lg mb-4">"{quote}"</blockquote>
      <div className="mt-auto">
        <div className="font-bold">{author}</div>
        <div className="text-gray-500 dark:text-gray-400">{company}</div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: IFAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-gray-500 dark:text-gray-400">{answer}</p>
    </div>
  )
}
