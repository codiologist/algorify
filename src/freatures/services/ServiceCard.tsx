import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_CONTENT } from "./service-constants";

const ServiceCard = () => {
  return (
    <div className="space-y-14">
      {SERVICES_CONTENT.map((service) => (
        <Card
          key={service.id}
          className={`${service?.bg ? service.bg : "bg-black"} rounded-4xl border-0 pt-0 shadow-none`}
        >
          <Image
            alt="Services"
            src={service?.thumbnail}
            className="mx-auto mb-4 hidden h-auto w-full rounded-4xl md:block"
          />
          <Image
            alt="Services"
            src={service?.thumbnail_mobile ?? ""}
            className="mx-auto mb-4 block h-auto w-full rounded-4xl md:hidden"
          />
          <CardContent className="text-white">
            <h2 className="mb-2 text-3xl font-semibold">{service.title}</h2>
            <p className="text-base font-medium">{service.description}</p>
            <div className="mt-3 grid grid-cols-1 gap-0 md:grid-cols-2 lg:gap-12">
              <div>
                <ul>
                  {service?.services.slice(0, 3).map((item, index) => (
                    <li
                      key={index}
                      className="mb-2 border-b border-white/30 pt-3 pb-2 text-lg font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {service?.services.slice(3).map((item, index) => (
                    <li
                      key={index}
                      className="mb-2 border-b border-white/30 pt-3 pb-2 text-lg font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/hire-us" className="mt-1 inline-block">
                  <CustomButton variant="lemon-white" className="">
                    Get Service
                  </CustomButton>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCard;
