import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { service, propertyType, details, name, phone, email, postcode } = body;

    if (!name || !phone || !postcode) {
      return NextResponse.json(
        { success: false, message: "Missing required contact details" },
        { status: 400 }
      );
    }

    // Dynamic price logic based on UK market averages
    let minPrice = 150;
    let maxPrice = 300;
    let duration = "2-4 Hours";

    switch (service) {
      case "fuse-box":
        minPrice = 550;
        maxPrice = 850;
        duration = "Half Day (4-6 Hours)";
        break;
      case "ev-charger":
        minPrice = 650;
        maxPrice = 950;
        duration = "3-5 Hours";
        break;
      case "eicr":
        minPrice = 160;
        maxPrice = 280;
        duration = "2-3 Hours";
        break;
      case "emergency":
        minPrice = 95;
        maxPrice = 180;
        duration = "Immediate Callout (Within 45 Mins)";
        break;
      case "rewire":
        minPrice = 2800;
        maxPrice = 4500;
        duration = "3-5 Working Days";
        break;
      default:
        minPrice = 150;
        maxPrice = 350;
        duration = "1-3 Hours";
    }

    // In production, this would trigger a webhook to Zapier / Make / Resend email
    console.log("⚡ NEW UK ELECTRICIAN QUOTE LEAD RECEIVED:", {
      timestamp: new Date().toISOString(),
      service,
      propertyType,
      details,
      customer: { name, phone, email, postcode },
      estimate: { minPrice, maxPrice, duration },
    });

    return NextResponse.json({
      success: true,
      message: "Quote estimated successfully",
      estimate: {
        minPrice,
        maxPrice,
        currency: "£",
        duration,
        guarantee: "100% Fixed Price Guarantee - No Hidden Extras",
        includes: [
          "NICEIC Minor / Major Works Certification",
          "Part P Building Control Notification",
          "Full Debris Clean-Up & Earth Bonding Verification",
          "3-Year Workmanship Warranty",
        ],
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Invalid payload format" },
      { status: 400 }
    );
  }
}
