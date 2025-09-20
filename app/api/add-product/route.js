import supabaseAdmin from "@/lib/supabaseAdmin";

export async function POST(req) {
  try {
    // 1. Read body (what client sent)
    const body = await req.json();
    const { name, description, price, imageUrl } = body;

    // 2. Insert into products
    const { data, error } = await supabaseAdmin.from("dishes").insert([
      {
        item_name: name,
        item_desc: description,
        item_price: price,
        item_pic: imageUrl,
      },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    // 3. Return data
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
