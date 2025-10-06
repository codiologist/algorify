import { CustomButton } from "@/components/CustomButton";

export default function Buttons() {
  return (
    <div className="bg-background min-h-screen p-8 pt-40">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="mb-12 text-center text-3xl font-bold">
          Custom Button Components
        </h1>

        <div className="space-y-8">
          {/* Type 1: Transparent background with hover effect */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Type 1: Transparent Background
            </h2>
            <p className="text-muted-foreground">
              Transparent background, black text, lemon hover effect with
              separated black arrow
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="transparent">Request a Demo</CustomButton>
              <CustomButton variant="transparent" size="sm">
                Small Button
              </CustomButton>
              <CustomButton variant="transparent" size="lg">
                Large Button
              </CustomButton>
            </div>
          </div>

          {/* Type 2: lemon background */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Type 2: lemon Background</h2>
            <p className="text-muted-foreground">
              lemon background, black text, no hover color change with separated
              black arrow
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="lemon">Try Now</CustomButton>
              <CustomButton variant="lemon" size="sm">
                Small lemon
              </CustomButton>
              <CustomButton variant="lemon" size="lg">
                Large lemon
              </CustomButton>
            </div>
          </div>

          {/* Type 3: lemon background with blue arrow */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Type 3: lemon Background with Blue Arrow
            </h2>
            <p className="text-muted-foreground">
              lemon background, black text with separated blue arrow
              (non-circular)
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="lemon" arrowVariant="lemon-blue">
                Get Service
              </CustomButton>
              <CustomButton variant="lemon" arrowVariant="lemon-blue" size="sm">
                Small Service
              </CustomButton>
              <CustomButton variant="lemon" arrowVariant="lemon-blue" size="lg">
                Large Service
              </CustomButton>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Type 4: Dark Background</h2>
            <p className="text-muted-foreground">
              Dark background (#050505), white text with bright lemon arrow
              background and dark arrow
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="dark">Dark Button</CustomButton>
              <CustomButton variant="dark" size="sm">
                Small Dark
              </CustomButton>
              <CustomButton variant="dark" size="lg">
                Large Dark
              </CustomButton>
            </div>
          </div>

          {/* Without arrows */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Without Arrows</h2>
            <p className="text-muted-foreground">
              Same buttons but without the separated arrow icons
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton variant="transparent" showArrow={false}>
                No Arrow Transparent
              </CustomButton>
              <CustomButton variant="lemon" showArrow={false}>
                No Arrow lemon
              </CustomButton>
              <CustomButton variant="dark" showArrow={false}>
                No Arrow Dark
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
