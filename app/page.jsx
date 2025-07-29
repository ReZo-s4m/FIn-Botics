import { Button } from "@/components/ui/button";
import HeroSec from "@/components/hero";
import { featuresData, howItWorksData, statsData } from "@/data/landin";
import { Card,CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-40">
      {user}
      <HeroSec />
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{item.value}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*features*/}
      <section className="py-20 bg-red-70">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature,index)=>(
                <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p  className="text-gray-600">{feature.description}</p>
                </CardContent>
                
              </Card>
              ))}
            </div>
            </div>
      </section>
      {/*steps*/ }
      <section className="py-20 bg-red-50">
            <div className="container mx-auto px-4">
               <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
              {howItWorksData.map((step,index)=>(
                <div key={index}>
                  <div className="w-16 h-16 bg-white-500 rounded-full flex items-center justify-center mx-auto mb-6" >{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-4" >{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            </div>
      </section>

       {/* CTA Section */}
      <section className="py-20 bg-red-70">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-black-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
