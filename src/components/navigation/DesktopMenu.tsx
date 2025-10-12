"use client";

import { CustomButton } from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuPromotionalCard from "./MenuPromotionalCard";
import { desktopNavigationItems } from "./navigation-items";
import menu_thumb_teams from "/public/expert_teams_menu_thumb.jpg";
import arrow_down from "/public/icons/menu-arrow-down.svg";
import menu_thumb_latest_project from "/public/latest_project_menu_thumb.jpg";

export default function DesktopMenu() {
  // const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="flex items-center space-x-8">
      {desktopNavigationItems.map((item) => (
        <div
          key={item.section_name}
          className="relative"
          onMouseEnter={() =>
            item.hasDropdown && setHoveredItem(item.section_name)
          }
          onMouseLeave={() => setHoveredItem(null)}
        >
          {item.hasDropdown ? (
            <Link
              href={item.href}
              className="hover:text-blue flex cursor-pointer items-center space-x-3 text-lg font-medium text-black transition-colors duration-200"
            >
              <span>{item.label}</span>
              {item.section_name === "services" && (
                <Image
                  src={arrow_down}
                  alt="Dropdown Arrow"
                  className="h-8 w-8"
                />
              )}
            </Link>
          ) : (
            <Link
              href={item.href}
              className="hover:text-blue text-lg font-medium text-black transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}

          {/* Dropdown Menu */}
          {item.hasDropdown && hoveredItem === item.section_name && (
            <div className="bg absolute top-full left-1/2 -translate-x-1/2 transform pt-4">
              {/* Invisible hover bridge to maintain hover state */}
              <div className="absolute top-0 left-1/2 h-4 w-full -translate-x-1/2 transform bg-transparent" />

              {/* Triangle pointer */}
              <div className="animate-in slide-in-from-bottom-4 absolute top-1 left-1/2 h-0 w-0 -translate-x-1/2 transform border-r-12 border-b-12 border-l-12 border-r-transparent border-b-gray-800 border-l-transparent duration-300" />

              <div className="animate-in fade-in-0 slide-in-from-bottom-4 bg-black-secondary z-50 w-[800px] overflow-hidden rounded-2xl shadow-2xl duration-300">
                {/* Service Section Sub Menu */}
                {item.section_name === "services" && (
                  <div className="grid grid-cols-2">
                    {/* Left Column - Service Menu Items */}
                    <div className="flex flex-col justify-between p-8">
                      <div>
                        <div className="space-y-4">
                          {desktopNavigationItems.map(
                            (item) =>
                              item.section_name === "services" &&
                              item.subNavItems?.map((subItem) => (
                                <div key={subItem.label} className="mb-4">
                                  <Link
                                    href={subItem.href}
                                    className="group block border-b border-white/10 pb-2.5"
                                  >
                                    <h4 className="group-hover:text-lemon pb-1 text-lg font-semibold text-white transition-colors">
                                      {subItem.label}
                                    </h4>
                                    <p className="text-sm text-[#9D9D9D]">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </div>
                              )),
                          )}
                        </div>
                      </div>

                      <div>
                        <Link href="/hire-us">
                          <CustomButton
                            variant="dark"
                            className="px-14 text-xl"
                          >
                            Book an appointment
                          </CustomButton>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Promotional Card */}
                    <div>
                      <MenuPromotionalCard href="/case-studies">
                        <MenuPromotionalCard.Title>
                          Our Expert Team is Here for You
                        </MenuPromotionalCard.Title>

                        <MenuPromotionalCard.Description>
                          We deliver innovative solutions with expertise,
                          creativity, and precision. Explore our case studies to
                          see the impact of our work.
                        </MenuPromotionalCard.Description>

                        <MenuPromotionalCard.Media>
                          <Image
                            src={menu_thumb_teams}
                            alt="Teams Thumbnail"
                            className="w-full object-cover"
                            priority
                          />
                        </MenuPromotionalCard.Media>
                      </MenuPromotionalCard>
                    </div>
                  </div>
                )}

                {/* More Section Sub Menu */}
                {item.section_name === "more" && (
                  <div className="grid grid-cols-2">
                    {/* Left Column - Promotional Card */}
                    <div>
                      <MenuPromotionalCard href="/">
                        <MenuPromotionalCard.Title>
                          Our Latest Projects
                        </MenuPromotionalCard.Title>

                        <MenuPromotionalCard.Description>
                          Discover our latest projects and see how our
                          innovative solutions have helped businesses grow. Take
                          a look at our case studies and explore the impact of
                          our work.
                        </MenuPromotionalCard.Description>

                        <MenuPromotionalCard.Media>
                          <Image
                            src={menu_thumb_latest_project}
                            alt="Latest Project Thumbnail"
                            className="w-full object-cover"
                            priority
                          />
                        </MenuPromotionalCard.Media>
                      </MenuPromotionalCard>
                    </div>

                    {/* Right Column - More Menu Items */}
                    <div className="flex flex-col justify-between p-8">
                      <div>
                        <div className="space-y-4">
                          {desktopNavigationItems.map(
                            (item) =>
                              item.section_name === "more" &&
                              item.subNavItems?.map((subItem) => (
                                <div key={subItem.label} className="mb-4">
                                  <Link
                                    href={subItem.href}
                                    className="group block border-b border-white/10 pb-2.5"
                                  >
                                    <h4 className="group-hover:text-lemon pb-1 text-lg font-semibold text-white transition-colors">
                                      {subItem.label}
                                    </h4>
                                    <p className="text-sm text-[#9D9D9D]">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </div>
                              )),
                          )}
                        </div>
                      </div>

                      <div>
                        <Link href="/hire-us">
                          <CustomButton
                            variant="dark"
                            className="px-14 text-xl"
                          >
                            Start a project
                          </CustomButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
