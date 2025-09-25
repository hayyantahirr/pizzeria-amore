import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    // Parse the request body to get order details
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      address,
      city,
      notes,
      paymentMethod,
      cartItems, // Expecting an array of cart items
      total_price,
      order_id,
    } = body;

    // Validate that cartItems is an array and not empty
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: "Cart items are missing or invalid." },
        { status: 400 }
      );
    }

    // Prepare the data for insertion
    const orders = cartItems.map((item) => ({
      customer_name: fullName,
      customer_email: email,
      customer_phone: phone,
      delivery_address: address,
      delivery_city: city,
      delivery_notes: notes,
      payment_method: paymentMethod,
      item_name: item.item_name,
      item_quantity: item.quantity,
      item_size: item.size,
      item_category: item.item_category,
      item_pic: item.item_pic,
      order_total: total_price,
      order_id: order_id,
      order_status: "pending",
    }));

    // Insert the order data into the 'order_list' table
    const { data, error } = await supabase.from("order_list").insert(orders);

    // Handle any errors during insertion
    if (error) {
      console.error("Supabase insertion error:", error);
      return NextResponse.json(
        { error: "Failed to store order details." },
        { status: 500 }
      );
    }

    // Return a success response
    return NextResponse.json({
      message: "Order details stored successfully.",
      data,
    });
  } catch (error) {
    // Handle any other errors
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
