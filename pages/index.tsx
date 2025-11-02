import { PropertyCardProps } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/Card"
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/ui/Pill";


export default function Home() {
  const [properties, setProperties] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
<>
{/* ===== Hero Section ===== */}
     <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
       <Image
         src={"/assets/image1.png"}
         alt="Hero Background"
         fill
         priority
         className="object-cover -z-10"
       />
       <div className="max-w-2xl px-4">
         <h1 className="text-4xl md:text-5xl font-bold">
           Find your favorite place here!
         </h1>
         <p className="mt-4 text-lg">
           The best prices for over 2 million properties worldwide.
         </p>
       </div>
     </section>

      {/* ===== Filter Section ===== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {PROPERTYLISTINGSAMPLE.map((filter, index) => (
            <Pill key={index} label={filter.name} />
          ))}
        </div>
      </section>

    <div className="sm:grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
   
    </div>
    </>
  );
}
